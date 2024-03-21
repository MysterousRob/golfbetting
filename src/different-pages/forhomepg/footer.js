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
    <h6 className="footer-title">Golf Predictions</h6> 
    <a className="link link-hover">News</a>
    <a className="link link-hover">Live Scores</a>
    <a className="link link-hover">Life Time Scores</a>
    <a className="link link-hover">#</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Quick Links</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Bets of the Week</a>
    <a className="link link-hover">Golf Betting Tips</a>
    <a className="link link-hover">Live Odds</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Tournaments</h6> 
    <a className="link link-hover">the Masters</a>
    <a className="link link-hover">The Open Championship</a>
    <a className="link link-hover">USA PGA Championship</a>
    <a className="link link-hover">The US Open</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Betting Offers</h6> 
    <a className="link link-hover">Betting Sites</a>
    <a className="link link-hover">Betting Promotions</a>
    <a className="link link-hover">#</a>
    <a className="link link-hover">#</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">Contact Us</h6> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Form</a>
    <a className="link link-hover">#</a>
    <a className="link link-hover">#</a>
  </nav> 
  <nav className="nav-footer">
    <h6 className="footer-title">to be filled in</h6> 
    <a className="link link-hover">#</a>
    <a className="link link-hover">#</a>
    <a className="link link-hover">#</a>
    <a className="link link-hover">#</a>
  </nav>
</footer>
        </div>
    );
}

export default Footer;