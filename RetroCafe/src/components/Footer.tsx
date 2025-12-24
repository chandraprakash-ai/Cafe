"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './RetroCafe.css';

const Footer: React.FC = () => {
    return (
        <footer className="ng-footer">
            <motion.div
                whileInView={{ scale: [0.9, 1.1, 1] }}
                transition={{ duration: 0.5 }}
            >
                <h2>RETRO CAFE</h2>
            </motion.div>
            <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '2rem' }}>
                Come Hungry, Leave Happy.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={{ background: '#000', color: '#fff', border: 'none', padding: '1rem 2rem', fontWeight: 700, borderRadius: '50px' }}>
                    INSTAGRAM
                </button>
                <button style={{ background: '#000', color: '#fff', border: 'none', padding: '1rem 2rem', fontWeight: 700, borderRadius: '50px' }}>
                    FACEBOOK
                </button>
            </div>
        </footer>
    );
};

export default Footer;
