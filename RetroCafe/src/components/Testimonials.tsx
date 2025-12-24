"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import './RetroCafe.css';

const Testimonials: React.FC = () => {
    return (
        <section className="ng-testimonials">
            <div className="ng-section-header">
                <h2 className="ng-section-title">Street Talk</h2>
            </div>

            <motion.div
                className="ng-testi-card"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
            >
                <span className="ng-quote">"</span>
                <p className="ng-testi-text">
                    This place isn't just a cafe, it's a time machine with better food. The burgers are massive and the vibes are immaculate.
                </p>
                <div className="ng-testi-author">- Alex Rivera, Foodie</div>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--ng-primary)', padding: '10px', border: 'var(--ng-border)' }}>
                    <MessageSquare color="white" size={24} />
                </div>
            </motion.div>

            <motion.div
                className="ng-testi-card"
                style={{ transform: 'rotate(-1deg)' }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <span className="ng-quote">"</span>
                <p className="ng-testi-text">
                    Finally a place that doesn't take itself too seriously but takes its spice levels VERY seriously. Highly recommended!
                </p>
                <div className="ng-testi-author">- Sarah Chen, Local Guide</div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
