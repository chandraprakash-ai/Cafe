"use client";

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import MenuSection from './MenuSection';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './RetroCafe.css';

const RetroCafePage: React.FC = () => {

    useEffect(() => {
        // Body bg override
        document.body.style.backgroundColor = '#F1F2F6';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <div className="ng-page">
            <Navbar />
            <Hero />
            <Features />
            <MenuSection />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default RetroCafePage;
