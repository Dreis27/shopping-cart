import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">ClothingStore</h1>
          <p>
            ClothingStore is a premium clothing line that offers a wide range of high-quality fashion for all occasions. Explore our collection and find your perfect outfit today.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@clothingstore.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br/>
          <ul>
            <a href="#"><li>Events</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Products</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br/>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..."/>
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; clothingstore.com | Designed by YourName
      </div>
    </footer>
  );
}

export default Footer;
