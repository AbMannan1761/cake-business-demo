import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>Artisanal Cakes for Every Occasion</h1>
          <p>Handcrafted with love, premium ingredients, and a touch of magic. Let's make your celebration unforgettable.</p>
          <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Fresh from the Oven</h2>
        <div className="menu-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="menu-item" style={{ boxShadow: 'none' }}>
            <div className="menu-img-placeholder" style={{ backgroundColor: '#e8d5c8', color: '#b87a5d' }}>🍰</div>
            <div className="menu-info" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem' }}>Custom Designs</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Tailored to your exact vision</p>
            </div>
          </div>
          <div className="menu-item" style={{ boxShadow: 'none' }}>
            <div className="menu-img-placeholder" style={{ backgroundColor: '#e8d5c8', color: '#b87a5d' }}>✨</div>
            <div className="menu-info" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem' }}>Premium Ingredients</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Only the finest chocolate & vanilla</p>
            </div>
          </div>
          <div className="menu-item" style={{ boxShadow: 'none' }}>
            <div className="menu-img-placeholder" style={{ backgroundColor: '#e8d5c8', color: '#b87a5d' }}>🎉</div>
            <div className="menu-info" style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem' }}>Any Occasion</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Weddings, Birthdays & more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
