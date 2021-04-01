import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title no-select">
            {"Hi I'm "}
            <span className="text-color-main">{"Alejandro Barba,"}</span>
            <br />
            {"a "}
            <span className="text-color-main">{"Software Engineer"}</span>
            {" based in Guadalajara, Mx"}
          </h1>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
