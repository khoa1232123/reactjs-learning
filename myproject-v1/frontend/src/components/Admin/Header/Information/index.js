import React, { useState } from 'react';

const Information = () => {
  const [show, setShow] = useState(false);
  return (
    <li
      className={`nav-item dropdown no-arrow cursor-pointer ${show && 'show'}`}
      onClick={() => setShow(!show)}
    >
      <span className="nav-link dropdown-toggle">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          Douglas McGee
        </span>
        <img
          className="img-profile rounded-circle"
          src="/img/undraw_profile.svg"
          alt="profile"
        />
      </span>
      <div
        className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
          show && 'show'
        }`}
        aria-labelledby="userDropdown"
      >
        <a className="dropdown-item" href="/">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          Profile
        </a>
        <a className="dropdown-item" href="/">
          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
          Settings
        </a>
        <a className="dropdown-item" href="/">
          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          Activity Log
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </div>
    </li>
  );
};

export default Information;
