import React from 'react';
import { Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import './NaramGaram.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="contact-info">
                    <h4>Contact Us Now:</h4>
                    <div className="contact-details">
                        <Phone size={16} />
                        <span>+91 1239919731</span>
                    </div>
                </div>

                <div className="social-links">
                    <Facebook className="social-icon" />
                    <Twitter className="social-icon" />
                    <Instagram className="social-icon" />
                    <Youtube className="social-icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
