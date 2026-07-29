import { Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Sweet Bakes</h2>
      <p style={{ opacity: 0.8 }}>Artisanal cakes baked with love.</p>
      <div className="social-links">
        <a href="#" className="social-icon"><Instagram size={20} /></a>
        <a href="#" className="social-icon"><Mail size={20} /></a>
      </div>
      <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>&copy; {new Date().getFullYear()} Sweet Bakes. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
