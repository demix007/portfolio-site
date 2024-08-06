import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello, I &apos;m</h5>
      <h1>Ayodeji Abidemi</h1>
      <h5 className="text-light">Fullstack Web Developer</h5>
      <CTA />
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
      <HeaderSocials />
    </div>
  </header>
);

export default Header;
