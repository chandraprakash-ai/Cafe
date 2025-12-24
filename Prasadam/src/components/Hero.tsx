import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Prasadam.css';

const Hero: React.FC = () => {
    return (
        <section className="prasadam-d2-hero">
            {/* Background Image */}
            <div className="prasadam-d2-hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Delicious Indian Food"
                />
                <div className="prasadam-d2-overlay"></div>
            </div>

            <div className="prasadam-d2-hero-content">
                <h1>Welcome to Prasadam</h1>
                <p>
                    Experience the fusion of tradition and taste. Where every dish is crafted with passion and every flavor tells a story.
                </p>
                <button className="prasadam-d2-btn-primary prasadam-d2-hero-btn">
                    Explore Menu <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
