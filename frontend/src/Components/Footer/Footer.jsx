import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="Container">
        <div className="feedback-section">
          <h2>Seeking personalized support?</h2>
          <p>Request a call from our team</p>
          <form className="feedback-form">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="Michael" />
            <label htmlFor="phone">Your phone number</label>
            <input type="text" id="phone" placeholder="Your phone number" />
            <button type="submit">Send request</button>
          </form>
          <p className="privacy-link">Privacy</p>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <h3>INFO</h3>
            <ul>
              <li>Company</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>ABOUT US</h3>
            <ul>
              <li>Gallery</li>
              <li>Technologies</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="footer-column subscription">
            <h3>SUBSCRIPTION</h3>
            <form>
              <input type="email" placeholder="E-mail" />
              <button type="submit">&#x27A4;</button>
            </form>
            <div className="social-icons">
              <p>F</p> {/* Font Awesome Facebook */}
              <p>I</p> {/* Font Awesome Instagram */}
              <p>Y</p> {/* Font Awesome YouTube */}
              <p>T</p> {/* Font Awesome Twitter */}
            </div>
          </div>
          <div className="footer-column contact">
            <h3>CONTACT US</h3>
            <p>+1 (999) 999-99-99</p>
            <p>hello@gojipsum.com</p>
            <p>London</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 – Copyright</p>
        <p>&amp;M</p>
      </div>
    </footer>
  );
};

export default Footer;
