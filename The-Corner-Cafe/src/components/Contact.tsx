import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact-form" className="section" style={{ backgroundColor: 'var(--cream-bg)' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Reserve a Table</h2>
                    <div className="divider"></div>
                    <p style={{ marginTop: '20px', color: '#666' }}>For groups larger than 6, please give us a call directly.</p>
                </div>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <input type="text" placeholder="Name" style={inputStyle} />
                            <input type="email" placeholder="Email" style={inputStyle} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <input type="tel" placeholder="Phone" style={inputStyle} />
                            <select style={inputStyle}>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                                <option>6 People</option>
                            </select>
                        </div>
                        <input type="datetime-local" style={inputStyle} />
                        <textarea placeholder="Special Requests" rows={4} style={inputStyle}></textarea>
                        <button type="button" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>Book Table</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: '#fff'
} as React.CSSProperties;

export default Contact;
