import React from "react";
import Wave from "../../images/wave.svg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import YouTube from "@iconscout/react-unicons/icons/uil-youtube";
import "./Footer.css";
import CssHover from "../../cssHover/CssHover";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>microsoft779@gmail.com</span>
        <div className="f-icons">
          <a className="btn" href="#">
            <Insta color="var(--black)" size="3rem" />
          </a>
          <a className="btn" href="#">
            <Facebook color="var(--black)" size="3rem" />
          </a>
          <a className="btn" href="#">
            <Github color="var(--black)" size="3rem" />
          </a>
          <a className="btn" href="#">
            <YouTube color="var(--black)" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
