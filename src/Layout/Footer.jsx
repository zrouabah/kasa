import React from 'react';
import '../Layout/Footer.scss';
import logoFooter from "../assets/logo-black.png";

function Footer() {
  return (
    <div className='footer'>
      <img src={logoFooter} alt="logo" />
      <div className='footer_text'>
        <p>© 2020 Kasa. </p> 
        <p> All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
