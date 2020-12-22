import React from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <div className="w-100 d-flex">
            <Col xs={6}>my phone number: 0987654321</Col>
            <Col xs={6} className="text-right">
              <span className="mr-3">SignIn</span>
              <Link to="/admin">Admin</Link>
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
