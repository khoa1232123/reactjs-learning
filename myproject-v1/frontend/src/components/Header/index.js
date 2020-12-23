import React, { useEffect } from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isUserLoggedIn, signout } from '../../redux/actions';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  });

  const signOut = (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  return (
    <header>
      <Navbar>
        <Container>
          <div className="w-100 d-flex">
            <Col xs={6}>my phone number: 0987654321</Col>
            <Col xs={6} className="text-right">
              {auth.authenticate ? (
                <>
                  {auth.user.role === 'admin' ? (
                    <Link to="/admin">Admin</Link>
                  ) : (
                    ''
                  )}
                  <a href="/" className="ml-3" onClick={(e) => signOut(e)}>
                    Logout
                  </a>
                </>
              ) : (
                <Link to="/login" className="ml-3">
                  SignIn
                </Link>
              )}
            </Col>
          </div>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand ml-2">
            MyProject v1
          </Link>
          <Search />
          <Menu />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
