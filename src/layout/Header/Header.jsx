import React from 'react';
import "./header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div>
        <div>
            <h1><NavLink to="/" exact activeClassName="active">Home</NavLink></h1>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
            </ul>
        </nav>
        <button><NavLink to="/contact" activeClassName="active">Contact Me</NavLink></button>
      </div>
    </header>
  )
}

export default Header
