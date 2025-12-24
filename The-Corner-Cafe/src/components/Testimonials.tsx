import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="section-header">
                    <h2>What People Are Saying</h2>
                    <div className="divider"></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div style={{ padding: '30px', backgroundColor: 'var(--cream-bg)', borderRadius: '4px', textAlign: 'center' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#555' }}>"The best coffee in the city, hands down. The atmosphere is just magical."</p>
                        <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--wood-dark)' }}>Sarah Jenkins</h5>
                    </div>
                    <div style={{ padding: '30px', backgroundColor: 'var(--cream-bg)', borderRadius: '4px', textAlign: 'center' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#555' }}>"I come here every weekend to read and relax. The staff makes you feel like family."</p>
                        <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--wood-dark)' }}>Michael Chen</h5>
                    </div>
                    <div style={{ padding: '30px', backgroundColor: 'var(--cream-bg)', borderRadius: '4px', textAlign: 'center' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#555' }}>"The Avocado Toast is to die for! Highly recommend checking this place out."</p>
                        <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--wood-dark)' }}>Emma Wilson</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
