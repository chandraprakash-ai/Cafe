import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Prasadam1.css';

const Prasadam: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scoping class
    useEffect(() => {
        document.body.classList.add('corner-cafe-root');
        return () => {
            document.body.classList.remove('corner-cafe-root');
        };
    }, []);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    return (
        <div className="corner-cafe-root">
            <Helmet>
                <title>The Corner Cafe | Heritage & Coffee</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <a href="#" className="logo">The Corner Cafe</a>
                    <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
                        {/* <li><a href="#about" onClick={closeNav}>Our Story</a></li> */}
                        {/* <li><a href="#menu" onClick={closeNav}>Menu</a></li> */}
                        {/* <li><a href="#gallery" onClick={closeNav}>Ambience</a></li> */}
                        <li><a href="#contact" className="btn-nav" onClick={closeNav}>Visit Us</a></li>
                    </ul>
                    <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="fade-in">Where Every Flavour Tells a <span className="italic-accent">Story</span></h1>
                    <p className="fade-in-delay">Handcrafted coffee, artisanal eats, and a timeless atmosphere in the heart of the city.</p>
                    <div className="hero-buttons fade-in-delay-2">
                        {/* <a href="#menu" className="btn btn-primary">View Our Menu</a> */}
                        {/* <a href="#about" className="btn btn-outline">Read Our Story</a> */}
                    </div>
                </div>
            </header>

            {/* About Section
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
            */}

            {/* Menu Section 
            <section id="menu" className="section menu-section">
                <div className="container">
                    <div className="menu-grid">
                        <div className="menu-category">
                            <h3>Espresso Bar</h3>

                            <div className="menu-item">
                                <h4>Corner House Blend</h4>
                                <div className="price">$4.50</div>
                            </div>
                            <div className="menu-description">Notes of dark chocolate, cinnamon, and toasted almond.</div>

                            <div className="menu-item">
                                <h4>Salted Caramel Latte</h4>
                                <div className="price">$5.25</div>
                            </div>
                            <div className="menu-description">House-made caramel sauce, sea salt, double shot.</div>

                            <div className="menu-item">
                                <h4>Classic Flat White</h4>
                                <div className="price">$4.00</div>
                            </div>
                            <div className="menu-description">Smooth micro-foam poured over ristretto.</div>

                            <div className="menu-item">
                                <h4>Spiced Cold Brew</h4>
                                <div className="price">$5.00</div>
                            </div>
                            <div className="menu-description">Steeped for 18 hours with cardamom and orange peel.</div>
                        </div>

                        <div className="menu-category">
                            <h3>From the Kitchen</h3>

                            <div className="menu-item">
                                <h4>Avocado & Dukkah Toast</h4>
                                <div className="price">$12.00</div>
                            </div>
                            <div className="menu-description">Sourdough, lemon zest, egyptian spice blend.</div>

                            <div className="menu-item">
                                <h4>Smoked Salmon Bagel</h4>
                                <div className="price">$14.50</div>
                            </div>
                            <div className="menu-description">Cream cheese, capers, dill, red onion.</div>

                            <div className="menu-item">
                                <h4>Warm Banana Bread</h4>
                                <div className="price">$6.00</div>
                            </div>
                            <div className="menu-description">Served with espresso butter and walnuts.</div>

                            <div className="menu-item">
                                <h4>Rustic Quiche</h4>
                                <div className="price">$9.00</div>
                            </div>
                            <div className="menu-description">Spinach, feta, and sun-dried tomatoes.</div>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* Gallery Section (Full Width)
            <section id="gallery" className="gallery-section">
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" alt="Coffee Art" />
                        <div className="gallery-overlay"><span>The Craft</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" alt="Cafe Seating" />
                        <div className="gallery-overlay"><span>The Space</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" alt="Pastries" />
                        <div className="gallery-overlay"><span>The Taste</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2071&auto=format&fit=crop" alt="Friends gathering" />
                        <div className="gallery-overlay"><span>The People</span></div>
                    </div>
                </div>
            </section>
            */}

            {/* Footer */}
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
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Prasadam;
