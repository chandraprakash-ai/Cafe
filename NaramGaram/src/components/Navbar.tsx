import React from 'react';
import './NaramGaram.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'baseline' }}>
                        <span className="logo-naram" style={{ fontSize: '1.8rem' }}>Naram</span>
                        <span style={{ fontSize: '1.8rem' }}>-</span>
                        <span className="logo-garam" style={{ fontSize: '1.8rem' }}>Garam</span>
                    </div>
                    <span>Family Restaurant</span>
                </div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button className="btn btn-brown">Order Online</button>
            </div>
        </nav>
    );
};

export default Navbar;
