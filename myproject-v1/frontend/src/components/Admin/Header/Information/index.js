import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../../../redux/actions';

const Information = () => {
  const [show, setShow] = useState(false);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const signOut = (e) => {
    e.preventDefault();
    dispatch(signout());
  };
  return (
    <li
      className={`nav-item dropdown no-arrow cursor-pointer ${show && 'show'}`}
      onClick={() => setShow(!show)}
    >
      <span className="nav-link dropdown-toggle">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          {auth.user.firstName}
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
        <a className="dropdown-item" href="/" onClick={(e) => signOut(e)}>
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </div>
    </li>
  );
};

export default Information;
