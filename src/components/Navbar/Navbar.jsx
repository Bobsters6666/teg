import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" className="logo" />

        <ul className={`ul ${isMenuOpen ? "show" : "hidden"}`}>
          <li>
            <a>How it Works</a>
          </li>
          <li>
            <a>Benefits</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>

          <FontAwesomeIcon
            icon={faTimes}
            className="exit"
            onClick={toggleMenu}
          />
        </ul>

        <ul className="nav-right-section">
          <li>
            <a>Support</a>
          </li>
          <button>Contact Us</button>
        </ul>

        <FontAwesomeIcon
          icon={faHamburger}
          className="hamburger"
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
