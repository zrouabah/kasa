import React from 'react';
import { NavLink } from "react-router-dom";
import '../Sass/NavBar.scss';
import logo from "../assets/logo-kasa.jpg";

function NavBar() {
  return (
    <nav className='NavBar'>
      <NavLink to="/">
      <div className='NavBar_logo'> 
        <img src={logo} alt="logo" />
      </div>
      </NavLink>
      <NavLink to ="/">Accueil</NavLink>
      <NavLink to="/about">
      <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default NavBar;
