import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

const LayoutAdmin = ({ children }) => {
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
