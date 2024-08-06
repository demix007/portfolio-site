import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaGitlab } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
    <a
      href="https://linkedin.com/in/ayodejiabidemi"
      target="_blank"
      rel="noreferrer"
      aria-label="Linkedin"
    >
      <BsLinkedin />
    </a>
    <a
      href="https://github.com/demix007"
      target="_blank"
      rel="noreferrer"
      aria-label="Github"
    >
      <FaGithub />
    </a>
    <a
      href="https://gitlab.com/ayodejiabidemi007"
      target="_blank"
      rel="noreferrer"
      aria-label="Gitlab"
    >
      <FaGitlab />
    </a>
  </div>
);

export default HeaderSocials;
