import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">WearHouse</h1>
          <p>
            WearHouse is a premium clothing line that offers a wide range of high-quality fashion for all occasions. Explore our collection and find your perfect outfit today.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@wearhouse.com</span>
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
      </div>
      <div className="footer-bottom">
        &copy; Designed by Dreis27
      </div>
    </footer>
  );
}

export default Footer;
