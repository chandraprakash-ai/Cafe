import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Prasadam.css';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="prasadam-d2-footer">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-footer-grid">

                    {/* Contact Info */}
                    <div className="prasadam-d2-footer-col">
                        <h3>Contact Us</h3>
                        <div className="prasadam-d2-contact-list">
                            <div><Phone size={18} /> <span>+91 9226835780</span></div>
                            <div><Phone size={18} /> <span>+91 9926687783</span></div>
                            <div><Mail size={18} /> <span>info@tangerine.com</span></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="prasadam-d2-footer-col">
                        <h3>Menu</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="prasadam-d2-footer-col">
                        <h3>Social Media</h3>
                        <div className="prasadam-d2-socials">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                        </div>
                        <p className="prasadam-d2-footer-note">
                            Follow us for updates on special offers and new menu items.
                        </p>
                    </div>
                </div>

                <div className="prasadam-d2-copyright">
                    <p>© 2025 Tangerine Cafe. All rights reserved. | Designed by Chandraprakash</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
