import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h4>The Corner Cafe</h4>
                        <p>Brewing stories and connecting community since 2015. We are committed to sustainable sourcing and preserving local heritage.</p>
                        <div className="social-links">
                            <a href="#" className="social-box">IG</a>
                            <a href="#" className="social-box">FB</a>
                            <a href="#" className="social-box">TW</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Visit Us</h4>
                        <p>12 Heritage Road, Old Quarter<br />City District, 560001</p>
                        <p style={{ marginTop: '15px' }}><strong>Email:</strong> hello@cornercafe.com</p>
                        <p><strong>Phone:</strong> +91 987 654 3210</p>
                    </div>
                    <div className="footer-col">
                        <h4>Opening Hours</h4>
                        <p>Monday - Friday<br /><span style={{ color: 'var(--teal-accent)' }}>8:00 AM - 10:00 PM</span></p>
                        <p>Saturday - Sunday<br /><span style={{ color: 'var(--teal-accent)' }}>9:00 AM - 11:00 PM</span></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 The Corner Cafe. All rights reserved.</p>
                    <p style={{ marginTop: '10px', fontSize: '10px', opacity: 0.5 }}>Designed by chandraprakash</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
