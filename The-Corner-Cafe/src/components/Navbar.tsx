"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">The Corner Cafe</a>
                <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
                    <li><a href="#about" onClick={closeNav}>Our Story</a></li>
                    <li><a href="#menu" onClick={closeNav}>Menu</a></li>
                    <li><a href="#gallery" onClick={closeNav}>Ambience</a></li>
                    <li><a href="#contact" className="btn-nav" onClick={closeNav}>Visit Us</a></li>
                </ul>
                <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
