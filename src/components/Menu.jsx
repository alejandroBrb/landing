import React from 'react';
import { Link } from 'gatsby';
import Icon from '../resources/menu.svg';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <section id="menu">
      <Container>
        <Navbar expand="lg" className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" bsPrefix="btn-menu">
            <Icon className="icon-menu"/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <p className="bold mx-4">
                <Link to="/about" >
                  About
                </Link>
              </p>
            <p className="bold mx-4">
              <Link to="/work">
                Work
              </Link>
            </p>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Menu;
