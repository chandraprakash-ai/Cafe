import React from 'react';
import './NaramGaram.css';

const About: React.FC = () => {
    return (
        <section className="about-section container" id="about">
            <div className="about-content">
                <h2 className="section-title">Our Story</h2>
                <div className="about-text">
                    <p>
                        Welcome to Naram-Garam, where tradition meets taste. Founded with a passion for authentic vegetarian cuisine,
                        we bring you the warmth of home-cooked meals in a vibrant, family-friendly atmosphere.
                    </p>
                    <p>
                        Our chefs use age-old secret recipes and the freshest ingredients to create dishes that delight the senses.
                        Whether you're craving spicy street food or comforting curries, we serve it all with love.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
