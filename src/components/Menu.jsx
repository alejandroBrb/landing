import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  return (
    <section id="menu">
      <Container>
        <Navbar expand="lg" className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-toogle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <p className="bold mx-4">
                <Link to="/about" >
                  About me
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
