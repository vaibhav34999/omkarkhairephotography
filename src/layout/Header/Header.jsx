import React, { useState } from 'react';
import "./header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {

  const [active, setActive] = useState(false)
  return (

    <>
    <header className={`header ${active ? 'open' : ''}`}>
      <div className='container'>
        <Logo/>
        <Navbar
          setActive={setActive} 
          active={active}
        />
        <ContactBtn
          setActive={setActive} 
          active={active}
        />
        <Hamburger 
          active={active} 
          setActive={setActive}
        />

      </div>
      <div className={`mob-menu ${active ? "open" : ""}`}>
        <Navbar 
          setActive={setActive} 
          active={active}
        />
        <ContactBtn
          setActive={setActive} 
          active={active}
        />
      </div>
    </header>

    </>
  )
}

export default Header


const Logo = () => {
  return(
  <div className='logo'>
    <h1 className='logo-text'>
      <NavLink to="/" exact className="logo-anchor" activeClassName="active">OMKAR</NavLink>
    </h1>
  </div>
  )
}

const Navbar = ({setActive, active}) => {
  return(
  <nav className='navbar'>
    <ul className='menu-list'>
      <li className='li'>
        <NavLink to="/" exact activeClassName="active" className='menu' onClick={()=>setActive(!active)}>Home</NavLink>
      </li>
      <li className='li'>
        <NavLink to="/about" activeClassName="active" className='menu' onClick={()=>setActive(!active)}>About Me</NavLink>
      </li>
      <li className='li'>
        <NavLink to="/portfolio" activeClassName="active" className='menu' onClick={()=>setActive(!active)}>Portfolio</NavLink>
      </li>
      <li className='li'>
        <NavLink to="/services" activeClassName="active" className='menu' onClick={()=>setActive(!active)}>Services</NavLink>
      </li>
    </ul>
  </nav>
  )
}


const ContactBtn = ({setActive, active}) => {
  return(
  <div className='contact-btn'>
    <NavLink 
      to="/contact" 
      activeClassName="active" 
      className='btn-text' 
      onClick={()=>setActive(!active)}
    >
      Contact Me
    </NavLink>
  </div>
  )
}


const Hamburger = ({active, setActive}) => {
  return(
    <div className={`hamburger ${active ? "open" : ""}`}>
      <div className={`hamburger-icon`} onClick={()=>setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>
  )
}