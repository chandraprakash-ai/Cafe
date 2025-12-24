import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import './Prasadam.css';

const Navbar: React.FC = () => {
    return (
        <nav className="prasadam-d2-navbar">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-nav-content">
                    {/* Logo Area */}
                    <div className="prasadam-d2-logo-area">
                        <div className="prasadam-d2-logo-icon">
                            <UtensilsCrossed size={24} />
                        </div>
                        <div className="prasadam-d2-logo-text">
                            <span className="prasadam-d2-brand">Prasadam</span>
                            <span className="prasadam-d2-tagline">WHERE FLAVOR TELLS A STORY</span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="prasadam-d2-nav-links">
                        <a href="#">Home</a>
                        <a href="#menu">Menu</a>
                        <a href="#about">About Us</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* CTA Button */}
                    <button className="prasadam-d2-btn-primary">
                        Order Online
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
