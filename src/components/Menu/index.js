import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import "./Menu.css";
import Burger from "./components/Nav/Burger";

function Menu(params) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Words That I Know" />
      </Link>
      <Burger />
    </nav>
  );
}

export default Menu;
