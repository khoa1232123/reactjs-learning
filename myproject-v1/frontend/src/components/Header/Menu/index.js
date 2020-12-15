import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/shop" className="nav-link">
        Shop
      </Link>
      <Link to="/abouts" className="nav-link">
        About Us
      </Link>
    </Nav>
  );
};

export default Menu;
