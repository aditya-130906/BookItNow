import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About HotelHub</h3>
                    <p>Your trusted platform for finding and booking the perfect hotel for your stay.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/hotels">Hotels</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: info@hotelhub.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Hotel St, City, State 12345</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} HotelHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
