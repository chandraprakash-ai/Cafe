import React from 'react';
import './NaramGaram.css';

const Menu: React.FC = () => {
    const menuItems = [
        { name: 'Paneer Tikka', price: '₹240', desc: 'Spiced paneer cubes grilled to perfection.' },
        { name: 'Masala Dosa', price: '₹120', desc: 'Crispy rice crepe filled with spiced potato mix.' },
        { name: 'Veg Biryani', price: '₹180', desc: 'Aromatic basmati rice cooked with fresh vegetables.' },
        { name: 'Chole Bhature', price: '₹140', desc: 'Spicy chickpea curry paired with fried bread.' },
        { name: 'Dal Makhani', price: '₹190', desc: 'Creamy black lentils simmered overnight.' },
        { name: 'Hakka Noodles', price: '₹160', desc: 'Stir-fried noodles with crunchy veggies.' },
    ];

    return (
        <section className="menu-section container" id="menu">
            <h2 className="section-title">Our Popular Menu</h2>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div className="menu-card" key={index}>
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <span className="menu-price">{item.price}</span>
                    </div>
                ))}
            </div>
            <div className="menu-footer">
                <button className="btn btn-brown">View Full Menu</button>
            </div>
        </section>
    );
};

export default Menu;
