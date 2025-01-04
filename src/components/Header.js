import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Brisphere</Link>
      </h1>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
