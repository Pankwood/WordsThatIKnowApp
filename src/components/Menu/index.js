import React from "react";
import Logo from "../../assets/img/Logo.gif";
import { Link } from "react-router-dom";
import "./Menu.css";
import Button from "../Button";

function Menu(params) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Words That I Know" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/create/video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
