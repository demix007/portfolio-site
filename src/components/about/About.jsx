import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { VscFolderActive } from 'react-icons/vsc';
import ME from '../../assets/Mydp.jpg';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <img src={ME} alt="me" />
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ years Working</small>
          </article>
          <article className="about__card">
            <HiUsers className="about__icon" />
            <h5>Technologies</h5>
            <small>10+ Technologies Used</small>
          </article>
          <article className="about__card">
            <VscFolderActive className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
        </div>

        <p>
          Full-stack web developer with an unparalleled love for clean code,
          great UI designs, and open-source development. Pair programming and
          remote collaboration are things I enjoy. I am proficient in multiple
          programming languages, frameworks, and technologies. As a full-stack
          developer, I am eager to collaborate with a talented team of
          developers, designers, and support specialists to build a knowledge
          base tool that empowers businesses to deliver better customer
          experiences and streamline their support operations. I want to use my
          creativity to create better software and solve diverse real-world
          challenges.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let&apos;s Talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
