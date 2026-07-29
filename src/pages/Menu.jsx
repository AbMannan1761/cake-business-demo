function Menu() {
  const cakes = [
    { name: "Classic Vanilla Bean", price: "From $45", desc: "Light, fluffy vanilla sponge layered with silky vanilla bean buttercream." },
    { name: "Decadent Dark Chocolate", price: "From $55", desc: "Rich chocolate cake with dark chocolate ganache and chocolate curls." },
    { name: "Lemon Raspberry Delight", price: "From $50", desc: "Zesty lemon cake filled with fresh raspberry compote and lemon cream." },
    { name: "Salted Caramel Pecan", price: "From $60", desc: "Brown butter cake layers with salted caramel and toasted pecans." },
    { name: "Red Velvet Dream", price: "From $50", desc: "Classic red velvet with a smooth, tangy cream cheese frosting." },
    { name: "Matcha Strawberry", price: "From $65", desc: "Earthy matcha sponge paired with fresh strawberry cream." }
  ];

  return (
    <div className="section">
      <h2 className="section-title">Our Signature Cakes</h2>
      <div className="menu-grid">
        {cakes.map((cake, idx) => (
          <div className="menu-item" key={idx}>
            <div className="menu-img-placeholder">
              🎂
            </div>
            <div className="menu-info">
              <h3>{cake.name}</h3>
              <div className="menu-price">{cake.price}</div>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{cake.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
