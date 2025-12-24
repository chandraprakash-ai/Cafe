import React from 'react';
import './Prasadam.css';

const Contact: React.FC = () => {
    return (
        <section className="prasadam-d2-contact-section">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-section-header">
                    <h2>Get in Touch</h2>
                    <div className="prasadam-d2-divider"></div>
                </div>

                <div className="prasadam-d2-contact-container">
                    <form>
                        <div className="prasadam-d2-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="prasadam-d2-input" placeholder="Your Name" />
                        </div>
                        <div className="prasadam-d2-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="prasadam-d2-input" placeholder="Your Email" />
                        </div>
                        <div className="prasadam-d2-form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="prasadam-d2-textarea" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="prasadam-d2-form-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
