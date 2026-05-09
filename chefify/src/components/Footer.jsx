import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo-area" style={{ color: 'white' }}>
            <ChefHat size={32} color="white" />
            <span className="logo-text">Chefify</span>
          </Link>
          <p className="footer-desc">
            Chefify is a recipe discovery platform that helps you find the perfect dish for any occasion. Explore, cook, and share!
          </p>
          <div className="social-links">
            <a href="#" className="social-link">FB</a>
            <a href="#" className="social-link">TW</a>
            <a href="#" className="social-link">IG</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          <div className="footer-column newsletter">
            <h3>Subscribe</h3>
            <p>Get the latest recipes right in your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Chefify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
