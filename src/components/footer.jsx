import React from "react";
import './../assets/css/footer.css'
import { Foot2 } from "../state/footerData";

function Footer() {
    return(
        <div className='footer'>
            <div className="container">
                <p className="warning">
                  18
                </p>
                <p>
                  Please gamble responsably 👀
                </p>
            </div> 
<footer className="foot">
        <Foot2 />
</footer>
        </div>
    );
}

export default Footer;