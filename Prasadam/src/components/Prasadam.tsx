import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Offerings from './Offerings';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './Prasadam.css';

const PrasadamDesign2: React.FC = () => {
    return (
        <div className="prasadam-d2-root">
            <Navbar />
            <Hero />
            <Offerings />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default PrasadamDesign2;
