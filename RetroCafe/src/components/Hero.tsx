"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './RetroCafe.css';

const Hero: React.FC = () => {
    return (
        <header className="ng-hero">
            <motion.div
                className="ng-hero-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            >
                <div className="ng-badge">Since 1995</div>
                <h1 className="ng-title">
                    Soft Vibes <br />
                    <span className="outline">Spicy Food</span>
                </h1>
                <p className="ng-description">
                    We don't do boring. We do bold flavors, massive smiles, and food that feels like a warm hug and a firecracker at the same time.
                </p>

                <div className="ng-cta-group">
                    <button className="ng-btn-primary">Order Now</button>
                    <button className="ng-btn-secondary">Book Table</button>
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;
