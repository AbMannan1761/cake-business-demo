function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.8 }}>
          Have a custom cake in mind or want to place an order? Fill out the form below and I'll get back to you as soon as possible!
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" className="form-control" placeholder="Jane Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="form-control" placeholder="jane@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date (Optional)</label>
            <input type="date" id="date" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message / Cake Details</label>
            <textarea id="message" className="form-control" rows="5" placeholder="Tell me about your dream cake..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
