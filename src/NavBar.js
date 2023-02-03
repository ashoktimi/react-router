import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
        <NavLink to="soda">SODA</NavLink>
        <NavLink to="chips">CHIPS</NavLink>
        <NavLink to="sardines">FRESH SARDINES</NavLink>
    </nav>
  );
}

export default NavBar;
