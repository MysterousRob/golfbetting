import React from "react";
import './footer-css/footer.css'
import { quickLink2 } from "../data/nav";

function Footer() {
    return(
        <div className='footer'>
            <div class="container">
                <p class="warning">
                    18
                </p>
                    Please gamble responsably 👀
                </div>
            <div className="quick-link">
                <div className="company">
                    <h1>
                        Company
                    </h1>
                    <p>
                        About Us
                    </p>
                    <p>
                        News
                    </p>
                    <p>
                        Contact Us
                    </p>
                </div>
                <div className="quick-link">
                    <h1>
                        Quick Links
                    </h1>
                   
                </div>
            </div>

           
        </div>
    );
}

export default Footer;