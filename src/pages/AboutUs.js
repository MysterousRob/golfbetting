import './../assets/css/footer.css';
import React from 'react';
import MyForm from './../components/contact/form';

function AboutUs() {
    return (
        <div className='foot'>
            <footer>
            <h1>
                About Us
            </h1>
            <br />
            <p className='p1'>
                Golf-Betting.com is a comprehensive website that caters to golf enthusiasts, offering valuable services such as accessing the best pre-tournament and in-play golf odds, expert tips, and statistics. Additionally, users can take advantage of exclusive bookmaker offers and free bets, enhancing their betting experience.
            </p>
            <p className="p1">
                We are passionate about golf and betting. Our mission is to provide golf enthusiasts with valuable insights, tips, and resources to enhance their betting experience. Whether you're a seasoned better or just starting out, we're here to help you make informed decisions and enjoy the excitement of golf betting.
            </p>
            <p className="p1">
                Join our community and stay updated with the latest golf tournaments, odds, and betting strategies. Let's tee off together and make every golf event more thrilling!
            </p>
            <br />
            <br />
            <MyForm />
            <div className="contact-info"> 
                <h2>Contact Information</h2>
                <p>Email: info@golfbeting.com</p>
            </div>
            <br />
            <div className='Photos'>
                    {/* need to add links to the social media so they link up witht he web app*/}
                    <img src="images\gmail3.png" />
                    <img src="images\facebook 3 .png" />
                    <img src="images\tictoc.png" />
                    <img src="images\tinstalove.png" />
                </div>
            </footer>
        </div>
    )
}
export default AboutUs;