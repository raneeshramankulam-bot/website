
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <h2 className="footer-logo">STRIDE</h2>
          <p className="footer-tagline">Premium kicks for the modern pace.</p>
          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links-section">
          <h4>Collection</h4>
          <ul>
            <li><NavLink to="/shop">New Drops</NavLink></li>
            <li><NavLink to="/shop">Best Sellers</NavLink></li>
            <li><NavLink to="/shop">Limited Edition</NavLink></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section links-section">
          <h4>Support</h4>
          <ul>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
            <li><NavLink to="/shipping">Shipping Info</NavLink></li>
            <li><NavLink to="/returns">Returns</NavLink></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 STRIDE Sneaker Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;