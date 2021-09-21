import React from "react";
import Media from "react-media";
import { Link } from "react-scroll";
import Logo from "../../Images/logo.png";
import HamburgerBox from "./Hamburger";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src={Logo} alt="Logo" />
        <p>The Knowledge Kit</p>
      </div>
      <Media query={{ maxWidth: 900 }}>
        {(matches) =>
          matches ? (
            <HamburgerBox />
          ) : (
            <>
              <div className="HeaderLinks">
                <li>
                  <Link
                    activeClass="active"
                    to="Section1"
                    spy={true}
                    smooth={true}
                  >
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
            </>
          )
        }
      </Media>
    </div>
  );
}

export default Header;
