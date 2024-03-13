import { useState } from "react";

function MyForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.PreventDefault();

        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(response.ok) {
                console.log('Form Submited Successfully');
            } else {
                console.log('Form Submission Failed');
            } catch (error) {
                conaole.log('Network ERROR', error);
            }
        }
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Email:</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Message:</label>
            <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>

        <button type='submit'>Submit</button>
        </form>
    );
}
export default MyForm