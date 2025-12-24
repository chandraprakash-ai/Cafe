import React from 'react';

const Gallery: React.FC = () => {
    return (
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
    );
};

export default Gallery;
