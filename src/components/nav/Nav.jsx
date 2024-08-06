import React, { useState } from 'react';
import './nav.css';
import { FcHome } from 'react-icons/fc';
import { FiUserCheck } from 'react-icons/fi';
import { BiBook } from 'react-icons/bi';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { AiOutlineContacts } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
        aria-label="Home"
        role="button"
      >
        <FcHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
        aria-label="about"
        role="button"
      >
        <FiUserCheck />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        aria-label="experience"
        role="button"
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
        aria-label="services"
        role="button"
      >
        <MdOutlineCleaningServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
        aria-label="contact"
        role="button"
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
