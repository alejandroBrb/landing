import React, { useState } from "react";
import { Link } from "gatsby";
import Icon from "../resources/close.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <label
        htmlFor="menu-toggle"
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-icon"></span>
      </label>
      <div className={`menu-overlay ${isOpen ? "open" : "closed"}`}>
        <nav className="menu-items">
          <Link to="/about" className="menu-link">
            About
          </Link>
          <Link to="/work" className="menu-link">
            Work
          </Link>
        </nav>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          <Icon className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
