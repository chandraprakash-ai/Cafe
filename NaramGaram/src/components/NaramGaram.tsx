"use client";

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Menu from './Menu';
import Footer from './Footer';

const NaramGaramPage2: React.FC = () => {
    // Add class for specific page body styling override
    useEffect(() => {
        document.body.classList.add('design-2-root');
        return () => {
            document.body.classList.remove('design-2-root');
        };
    }, []);

    return (
        <div className="design-2-root">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <About />
                <Menu />
            </main>
            <Footer />
        </div>
    );
};

export default NaramGaramPage2;
