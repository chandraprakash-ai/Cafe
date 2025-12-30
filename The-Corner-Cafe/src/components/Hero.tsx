'use client';
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollY = window.scrollY;
                const heroHeight = heroRef.current.offsetHeight;
                // Calculate scale based on scroll (1 at top, up to 1.15 when scrolled past hero)
                const scrollProgress = Math.min(scrollY / heroHeight, 1);
                const scale = 1 + (scrollProgress * 0.15);
                heroRef.current.style.setProperty('--hero-scale', scale.toString());
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="hero" ref={heroRef}>
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
