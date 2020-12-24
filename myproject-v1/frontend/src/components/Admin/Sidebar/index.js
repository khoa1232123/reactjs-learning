import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/admin"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Frontend</span>
        </Link>
      </li>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link to="/admin" className="nav-link pb-0">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/products" className="nav-link pb-0">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Products</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/categories" className="nav-link pb-0">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Categories</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
