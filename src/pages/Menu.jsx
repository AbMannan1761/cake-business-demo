function Menu() {
  const cakes = [
    { name: "Classic Vanilla Bean", price: "From $45", desc: "Light, fluffy vanilla sponge layered with silky vanilla bean buttercream.", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600" },
    { name: "Decadent Dark Chocolate", price: "From $55", desc: "Rich chocolate cake with dark chocolate ganache and chocolate curls.", img: "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?auto=format&fit=crop&q=80&w=600" },
    { name: "Lemon Raspberry Delight", price: "From $50", desc: "Zesty lemon cake filled with fresh raspberry compote and lemon cream.", img: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&q=80&w=600" },
    { name: "Salted Caramel Pecan", price: "From $60", desc: "Brown butter cake layers with salted caramel and toasted pecans.", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600" },
    { name: "Red Velvet Dream", price: "From $50", desc: "Classic red velvet with a smooth, tangy cream cheese frosting.", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600" },
    { name: "Matcha Strawberry", price: "From $65", desc: "Earthy matcha sponge paired with fresh strawberry cream.", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="section">
      <h2 className="section-title">Our Signature Cakes</h2>
      <div className="menu-grid">
        {cakes.map((cake, idx) => (
          <div className="menu-item" key={idx}>
            <div className="menu-img-placeholder">
              <img src={cake.img} alt={cake.name} />
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
