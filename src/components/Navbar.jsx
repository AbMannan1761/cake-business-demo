import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Sweet Bakes</div>
      <div className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/menu" className={({isActive}) => isActive ? "active" : ""}>Menu</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About Me</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
      </div>
      <div className="nav-mobile-toggle">
        <Menu size={24} color="var(--primary-color)" />
      </div>
    </nav>
  );
}

export default Navbar;
