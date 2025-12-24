import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <div className="about-text">
                    <h2>A Timeless Escape</h2>
                    <div className="divider" style={{ margin: '0 0 30px 0' }}></div>
                    <p>Nestled in the quiet corners of the Old Quarter, The Corner Cafe is more than just a coffee shop; it's a living room for the community. Inspired by colonial architecture and local craftsmanship, our space features hand-carved wooden furniture, traditional textiles, and a serene atmosphere.</p>
                    <p>Whether you're here for our signature Corner Cafe blend or simply to soak in the art on our walls, we promise a pause from the ordinary. We believe in slow coffee, meaningful conversations, and the warmth of a good cup.</p>
                    <a href="#contact" style={{ color: 'var(--teal-accent)', fontWeight: 700, borderBottom: '2px solid var(--teal-accent)' }}>Come say hello</a>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" alt="The Corner Cafe Interior Detail" />
                    <div className="img-accent-box"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
