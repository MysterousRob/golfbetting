import React from "react";
import './footer-css/footer.css'
import { quickLink2 } from "../data/nav";

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
  <nav className="nav-footer">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Social</h6> 
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">Github</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Explore</h6> 
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Apps</h6> 
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>
        </div>
    );
}

export default Footer;