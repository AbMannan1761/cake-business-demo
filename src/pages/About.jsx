function About() {
  return (
    <div className="section">
      <h2 className="section-title">About the Baker</h2>
      <div className="about-container">
        <div className="about-image">
          <div style={{ width: '100%', height: '400px', backgroundColor: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
            Baker Photo Here
          </div>
        </div>
        <div className="about-text">
          <p>
            Hi there! I'm the one-person team behind Sweet Bakes. What started as a simple hobby baking for friends and family has blossomed into a passion project I love sharing with the world on Instagram.
          </p>
          <p>
            Every cake that leaves my kitchen is made from scratch with the highest quality ingredients. I believe that a cake shouldn't just look stunning—it should taste absolutely incredible, too. 
          </p>
          <p>
            When I'm not covered in flour or piping intricate buttercream designs, you can usually find me experimenting with new flavor combinations or exploring local markets for fresh, seasonal ingredients to incorporate into my next creation.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
            Thank you for supporting my sweet dream!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
