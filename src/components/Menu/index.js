import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import "./Menu.css";
import Button from "../Button";

function Menu(params) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo Words That I Know" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/create/category">
        New Category
      </Button>
      <Button as={Link} className="ButtonLink" to="/contact">
        Contact
      </Button>
    </nav>
  );
}

export default Menu;
