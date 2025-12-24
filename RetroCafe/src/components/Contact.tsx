"use client";

import React from 'react';
import './RetroCafe.css';

const Contact: React.FC = () => {
    return (
        <section className="ng-contact" id="contact">
            <div className="ng-section-header">
                <h2 className="ng-section-title">Book a Spot</h2>
                <p>Don't wait in line. Secure your table now.</p>
            </div>

            <form className="ng-booking-form">
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="text" placeholder="NAME" className="ng-input" />
                    <input type="text" placeholder="PHONE" className="ng-input" />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" className="ng-input" />
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input type="date" className="ng-input" />
                    <input type="time" className="ng-input" />
                </div>
                <input type="number" placeholder="GUESTS" className="ng-input" min="1" />
                <button type="submit" className="ng-form-btn">Lock It In</button>
            </form>
        </section>
    );
};

export default Contact;
