import React from 'react';
import Information from './Information';
import Search from './Search';

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>
      <Search />

      <ul className="navbar-nav ml-auto">
        <Information />
      </ul>
    </nav>
  );
};

export default Header;
