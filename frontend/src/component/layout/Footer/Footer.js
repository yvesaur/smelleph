import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>APP</h4>
        <p>Download Below</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SMELLE.</h1>
        <p>Fragrances that enchant, all day long.</p>

        
      </div>

      <div className="rightFooter">
        <h4>Connect with Us</h4>
        <a href="/">Instagram</a>
        <a href="/">Youtube</a>
        <a href="/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
