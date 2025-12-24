"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './RetroCafe.css';

const MenuSection: React.FC = () => {
    const items = [
        { name: "Retro Burger", price: "$12", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
        { name: "Spicy Fries", price: "$6", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=60" },
        { name: "Neon Shake", price: "$8", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },
        { name: "Classic Pancake", price: "$10", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=60" },
    ];

    return (
        <section className="ng-menu" id="menu">
            <div className="ng-section-header">
                <h2 className="ng-section-title">The Grub</h2>
                <div className="ng-badge" style={{ display: 'inline-block', transform: 'rotate(2deg)' }}>New Arrivals</div>
            </div>

            <div className="ng-menu-grid">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="ng-menu-card"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={item.img} alt={item.name} className="ng-menu-img" />
                        <div className="ng-menu-content">
                            <h3 className="ng-menu-title">{item.name}</h3>
                            <span className="ng-menu-price">{item.price}</span>
                            <button className="ng-btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%' }}>Add to Tray</button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <button className="ng-btn-primary">View Full Menu</button>
            </div>
        </section>
    );
};

export default MenuSection;
