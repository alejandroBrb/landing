import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/main.scss";

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alejandro Barba | About</title>
        <html lang={"en"} />
        <meta name="description" content="Personal portafolio" />
      </Helmet>
      <Menu />

      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">Soon...</h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};