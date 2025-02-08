import React from 'react';
import "./header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className='header'>
      <div className='container '>
        <div className='header__logo'>
          <h1 className='logo-text'>
            <NavLink to="/" exact activeClassName="active">OMKAR</NavLink>
          </h1>
        </div>
        <nav className='header__nav'>
          <ul className='menu-list'>
            <li className='menu'>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </li>
            <li className='menu'>
              <NavLink to="/about" activeClassName="active">About Me</NavLink>
            </li>
            <li className='menu'>
              <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className='menu'>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
            </li>
          </ul>
        </nav>
        <div className='header__contact'><NavLink to="/contact" activeClassName="active">Contact Me</NavLink></div>
      </div>
    </header>
  )
}

export default Header
