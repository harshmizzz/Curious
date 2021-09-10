import React from "react";
import { Link } from "react-scroll";
import Logo from "../../Images/logo.png";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={Logo} alt="Logo" />
        <p>The Knowledge Kit</p>
      </div>
      <div className="HeaderLinks">
        <li>
          <Link activeClass="active" to="Section1" spy={true} smooth={true}>
            Vision
          </Link>
        </li>
        <li>
          <Link to="Section2" spy={true} smooth={true}>
            Community
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Join Us
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
