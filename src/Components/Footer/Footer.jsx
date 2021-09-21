import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterLeft">
        <div className="FooterLeftTop">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.4621 28C37.4621 33.2258 33.2258 37.4621 28 37.4621C22.7742 37.4621 18.5379 33.2258 18.5379 28C18.5379 22.7742 22.7742 18.5379 28 18.5379C33.2258 18.5379 37.4621 22.7742 37.4621 28Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.7586 6.75862C34.7586 8.93653 33.7285 10.8738 32.1289 12.1099C37.8761 13.599 42.401 18.1238 43.8901 23.8711C45.1262 22.2715 47.0635 21.2414 49.2414 21.2414C52.9741 21.2414 56 24.2673 56 28C56 31.7327 52.9741 34.7586 49.2414 34.7586C47.0635 34.7586 45.1262 33.7285 43.8901 32.1289C42.401 37.8762 37.8762 42.401 32.1289 43.8901C33.7285 45.1262 34.7586 47.0635 34.7586 49.2414C34.7586 52.9741 31.7327 56 28 56C24.2673 56 21.2414 52.9741 21.2414 49.2414C21.2414 47.0635 22.2715 45.1262 23.8711 43.8901C18.1238 42.401 13.599 37.8762 12.1099 32.1289C10.8738 33.7285 8.93653 34.7586 6.75862 34.7586C3.02594 34.7586 0 31.7327 0 28C0 24.2673 3.02594 21.2414 6.75862 21.2414C8.93653 21.2414 10.8738 22.2715 12.1099 23.8711C13.599 18.1238 18.1238 13.599 23.8711 12.1099C22.2715 10.8738 21.2414 8.93653 21.2414 6.75862C21.2414 3.02594 24.2673 0 28 0C31.7327 0 34.7586 3.02594 34.7586 6.75862ZM28 15.4483C21.0679 15.4483 15.4483 21.0679 15.4483 28C15.4483 34.9321 21.0679 40.5517 28 40.5517C34.9321 40.5517 40.5517 34.9321 40.5517 28C40.5517 21.0679 34.9321 15.4483 28 15.4483Z"
              fill="white"
            />
            <path
              d="M35.7134 7.16934C35.6783 7.83983 35.5577 8.48767 35.3622 9.10217C40.6383 11.1591 44.8409 15.3618 46.8979 20.6378C47.5124 20.4424 48.1602 20.3217 48.8307 20.2866C46.5861 14.2271 41.773 9.41397 35.7134 7.16934Z"
              fill="white"
            />
            <path
              d="M35.3622 46.8979C40.6383 44.841 44.8409 40.6383 46.8979 35.3622C47.5124 35.5577 48.1602 35.6783 48.8307 35.7134C46.5861 41.773 41.773 46.5861 35.7134 48.8307C35.6783 48.1602 35.5577 47.5124 35.3622 46.8979Z"
              fill="white"
            />
            <path
              d="M9.10217 35.3622C11.1591 40.6383 15.3618 44.841 20.6378 46.8979C20.4424 47.5124 20.3217 48.1602 20.2866 48.8307C14.2271 46.5861 9.41397 41.773 7.16934 35.7134C7.83983 35.6783 8.48767 35.5577 9.10217 35.3622Z"
              fill="white"
            />
            <path
              d="M9.10217 20.6378C11.1591 15.3618 15.3618 11.1591 20.6378 9.10217C20.4424 8.48767 20.3217 7.83983 20.2866 7.16934C14.2271 9.41397 9.41397 14.2271 7.16934 20.2866C7.83983 20.3217 8.48767 20.4424 9.10217 20.6378Z"
              fill="white"
            />
          </svg>
          <p>© 2021 The Knowledge Kit All rights reserved</p>
        </div>
        <div className="FooterLeftBottom">
          <p>Pankaj Singh</p>
          <p>IIT Bombay,Powai</p>
          <p>Mumbai,Maharastra</p>
          <p>contact.iitb@gmail.com</p>
        </div>
      </div>
      <div className="FooterRight">
        <div className="FooterRightTop">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <LinkedInIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
        </div>
        <div className="FooterRightBottom">
          <p>Other Products</p>
          <ul>
            <li>Decile Project</li>
            <li>UDAAN</li>
            <li>Fashion App</li>
            <li>Edtech</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
