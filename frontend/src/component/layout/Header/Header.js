import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#5C3F61",
  logo,
  logoWidth: "20vmax",
  navColor1: "#D995E6",
  logoHoverSize: "10px",
  logoHoverColor: "#5C3F61",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#5C3F61",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#5C3F61",
  searchIconColorHover: "#5C3F61",
  cartIconColorHover: "#5C3F61",
  cartIconMargin: "1vmax",
};

const Header = () => {
  const handleNavbarClick = () => {
    window.location.reload();
  };

  return <ReactNavbar {...options} handleNavbarClick={handleNavbarClick} />;
};

export default Header;

