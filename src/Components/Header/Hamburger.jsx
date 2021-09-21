import React, { useState } from "react";
import "./Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
function HamburgerBox() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} color="#0E538CCC" />
      <div className={isOpen ? "hamburgerOpen" : "hamburgerItems"}>
        <li>
          <Link activeClass="active" to="Section1" spy={true} smooth={true}>
            Introduction
          </Link>
        </li>
        <li>
          <Link to="Section2" spy={true} smooth={true}>
            How it Works
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Features
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Community
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

export default HamburgerBox;
