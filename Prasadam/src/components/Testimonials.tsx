import React from 'react';
import { Star } from 'lucide-react';
import './Prasadam.css';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: "Aditi Sharma",
            text: "Absolutely the best North Indian food I've had in a long time. The spices are authentic and the service is impeccable.",
            stars: 5
        },
        {
            name: "Rajesh Kumar",
            text: "Prasadam never disappoints. The Thali is a must-try! It reminded me of my grandmother's cooking.",
            stars: 5
        },
        {
            name: "Emily Davis",
            text: "A wonderful culinary experience. I loved the fusion dishes, and the ambiance is just perfect for a date night.",
            stars: 4
        }
    ];

    return (
        <section id="testimonials" className="prasadam-d2-testimonials">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-section-header">
                    <h2>What Our Guests Say</h2>
                    <div className="prasadam-d2-divider"></div>
                </div>

                <div className="prasadam-d2-testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="prasadam-d2-testimonial-card">
                            <div className="prasadam-d2-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.stars ? "currentColor" : "none"} strokeWidth={i < review.stars ? 0 : 2} />
                                ))}
                            </div>
                            <p className="prasadam-d2-testimonial-text">"{review.text}"</p>
                            <span className="prasadam-d2-testimonial-author">- {review.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
