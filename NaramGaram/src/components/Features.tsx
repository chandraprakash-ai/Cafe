import React from 'react';
import { Soup, Users, Leaf } from 'lucide-react';
import './NaramGaram.css';

const Features: React.FC = () => {
    return (
        <section className="features-section container" id="about">
            <div className="features-grid">
                {/* Feature 1 */}
                <div className="feature-card">
                    <div className="feature-icon-wrapper">
                        <Soup size={40} className="feature-icon" strokeWidth={1.5} />
                    </div>
                    <div className="feature-content">
                        <h3>Authentic Flavors</h3>
                        <p>Authentic flavors and secret recipes passed down through generations.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-card">
                    <div className="feature-icon-wrapper">
                        <Users size={40} className="feature-icon" strokeWidth={1.5} />
                    </div>
                    <div className="feature-content">
                        <h3>Family Friendly</h3>
                        <p>Full of warmth and family friendly vibes for your loved ones.</p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="feature-card">
                    <div className="feature-icon-wrapper">
                        <Leaf size={40} className="feature-icon" strokeWidth={1.5} />
                    </div>
                    <div className="feature-content">
                        <h3>Pure Vegetarian</h3>
                        <p>100% Vegetarian options prepared with care and purity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
