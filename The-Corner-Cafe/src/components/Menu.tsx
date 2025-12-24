import React from 'react';

const Menu: React.FC = () => {
    return (
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
    );
};

export default Menu;
