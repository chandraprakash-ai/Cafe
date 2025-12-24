import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="fade-in">Where Every Flavour Tells a <span className="italic-accent">Story</span></h1>
                <p className="fade-in-delay">Handcrafted coffee, artisanal eats, and a timeless atmosphere in the heart of the city.</p>
                <div className="hero-buttons fade-in-delay-2">
                    <a href="#menu" className="btn btn-primary">View Our Menu</a>
                    <a href="#about" className="btn btn-outline">Read Our Story</a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
