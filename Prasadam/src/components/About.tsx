import React from 'react';
import './Prasadam.css';

const About: React.FC = () => {
    return (
        <section id="about" className="prasadam-d2-section">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-about-grid">
                    <div className="prasadam-d2-about-text">
                        <h2>About Prasadam</h2>
                        <div style={{ marginBottom: '24px' }}>
                            <div className="prasadam-d2-divider" style={{ margin: '0 0 16px 0', width: '64px' }}></div>
                        </div>
                        <p>
                            Prasadam is more than just a restaurant; it is a destination for food lovers who seek authenticity.
                            Located in the heart of the city, we serve dishes that honor traditional recipes while embracing modern culinary techniques.
                        </p>
                        <p>
                            Whether you are here for a quick snack or a wholesome family dinner, our warm ambiance and dedicated staff ensure a memorable experience.
                        </p>
                        <button className="prasadam-d2-btn-outline">
                            Learn More
                        </button>
                    </div>

                    <div className="prasadam-d2-about-img">
                        <div className="prasadam-d2-blob-1"></div>
                        <div className="prasadam-d2-blob-2"></div>
                        <img
                            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
                            alt="Prasadam Interior"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
