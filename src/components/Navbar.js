// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/">Box App</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Add Box</Link>
        <Link className="nav-link" to="/list">Box List</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

