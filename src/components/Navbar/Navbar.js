import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import logoImg from '../../assets/react_transp.png'


function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">

        <img src={logoImg} alt="logo" style={{width: "60px"}}/>

        </NavLink>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
