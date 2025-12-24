"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ChefHat, Heart } from 'lucide-react';
import './RetroCafe.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`ng-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="ng-logo">
                Retro<span>-</span>Cafe
            </div>
            <div className="ng-nav-links">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <span className="ng-link">Menu</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <span className="ng-link">Parties</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <span className="ng-link">Find Us</span>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
