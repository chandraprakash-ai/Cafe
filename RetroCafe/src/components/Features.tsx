"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ChefHat, Heart } from 'lucide-react';
import './RetroCafe.css';

const Features: React.FC = () => {
    return (
        <section className="ng-features">
            <div className="ng-section-header">
                <h2 className="ng-section-title">The Flavor Mix</h2>
                <p style={{ fontFamily: 'Montserrat', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                    Life is too short for bland food. We bring the heat, the sweet, and everything in between.
                </p>
            </div>

            <div className="ng-grid">
                <motion.div
                    className="ng-feature-card"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="ng-icon-box">
                        <Flame size={32} color="#000" strokeWidth={2.5} />
                    </div>
                    <h3>The Garam (Hot)</h3>
                    <p>Spices that wake you up. Curries that pack a punch. We keep it authentic and fiery.</p>
                </motion.div>

                <motion.div
                    className="ng-feature-card"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="ng-icon-box" style={{ background: '#FFA502' }}>
                        <Heart size={32} color="#000" strokeWidth={2.5} />
                    </div>
                    <h3>The Naram (Soft)</h3>
                    <p>Melt-in-your-mouth Naans, creamy Paneer, and desserts that soothe the soul.</p>
                </motion.div>

                <motion.div
                    className="ng-feature-card"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="ng-icon-box" style={{ background: '#FF4757' }}>
                        <ChefHat size={32} color="#fff" strokeWidth={2.5} />
                    </div>
                    <h3>The Experience</h3>
                    <p>No stiff waiters here. Just good vibes, great music, and a family that loves to feed you.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
