import React from 'react';
import './Prasadam.css';

const Offerings: React.FC = () => {
    return (
        <section id="menu" className="prasadam-d2-section prasadam-d2-bg-light">
            <div className="prasadam-d2-container">
                <div className="prasadam-d2-section-header">
                    <h2>Our Offerings</h2>
                    <div className="prasadam-d2-divider"></div>
                </div>

                <div className="prasadam-d2-grid">
                    {[
                        { title: "North Indian", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                        { title: "Special Thalis", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=60" },
                        { title: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=60" },
                        { title: "Beverages", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=60" },
                    ].map((item, index) => (
                        <div key={index} className="prasadam-d2-card">
                            <div className="prasadam-d2-card-img">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                />
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
