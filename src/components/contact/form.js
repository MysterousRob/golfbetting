import { useState } from "react";
import './../../assets/css/footer.css'

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form Submitted Successfully');
            } else {
                console.log('Form Submission Failed');
            }
        } catch (error) {
            console.log('Network ERROR', error);
        }

        console.log(formData);
    };

    return (
        <div className="contact">
            <h1>Get In Contact</h1>
      
        <form action="mailto:robertjohngasior@gmail.com" method="post" onSubmit={handleSubmit}>
            <div className="form">
                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
            />
                </div>
                <div className="form-field">
            <       label htmlFor="email">Email:</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
            />
                </div>
                <div className="form-field">
                    <label htmlFor="message">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
            </div>
            <div className="submit">
                <button type='submit'>Submit</button>
            </div>
            </div>  
           
        </form> 
    </div>
       
    );
}
export default MyForm