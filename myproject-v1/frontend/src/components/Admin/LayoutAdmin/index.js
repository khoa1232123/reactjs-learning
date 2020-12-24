import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isUserLoggedIn } from '../../../redux/actions';
import Header from '../Header';
import Sidebar from '../Sidebar';

const LayoutAdmin = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  });
  if (auth.user.role !== 'admin') {
    console.log('abc');
    return <Redirect to={'/login'} />;
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
