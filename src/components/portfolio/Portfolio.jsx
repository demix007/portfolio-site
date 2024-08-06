import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './portfolio.css';
import CountryFinder from '../../assets/country_finder.png';
import CarRentals from '../../assets/car_rentals.png';
import CRYPTO from '../../assets/crypto.png';
import Bdcx from '../../assets/bdcx.png';
import CharizInteriors from '../../assets/chariz-interiors.png';
import CharizFurnitures from '../../assets/chariz-furnitures.png';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Bdcx,
      title: 'BDCX Web Application',
      description:
        'This React Application provides a platform which allows users ( Bureau De Change ) to onboard their businesses. Users are able to buy and sell foreign currencies. The web app is well crafted with beautiful and consistent designs with full APIs integrations',
      technologies: [
        'ReactJS',
        'Redux',
        'Tailwind',
        'AntD',
        'Axios',
        'JWT',
        'Context API',
      ],
      demo: 'https://bdcx-frontend.project-demo.app/',
    },
    {
      id: 2,
      image: CharizInteriors,
      title: 'Chariz Interiors',
      description:
        'This is a cutting-edge eCommerce platform designed to provide users with a seamless online shopping experience. Built with React, this website showcases a modern, responsive design and intuitive user interface, making it easy for customers to browse and purchase various items for interior design and also book consultations.',
      technologies: [
        'React',
        'Redux',
        'Tailwind',
        'MUI',
        'Axios',
        'Context API',
        'AntD',
      ],
      demo: 'https://lacharizinteriors.com/',
    },
    {
      id: 3,
      image: CharizFurnitures,
      title: 'Chariz Furnitures',
      description:
        'This react application serves as an eCommerce platform designed to provide users with a seamless online shopping experience for their furniture items. Built with React, this website showcases a modern, responsive design and intuitive user interface, making it easy for customers to browse and purchase various household and office furnitures.',
      technologies: [
        'React',
        'Redux',
        'Tailwind',
        'MUI',
        'Axios',
        'Context API',
      ],
      demo: 'https://chariz-furniture.web.app/',
    },
    {
      id: 4,
      image: CarRentals,
      title: 'Car Rentals',
      description:
        'This project is based on an app to book an appointment to try a dream car. App users are able to reserve their dream cars, as well as view the reservations. New cars can also be added and deleted from the app. Postgres database was used as database, Rails to create backend API, and React & Redux for frontend UI',
      technologies: ['React', 'Rails', 'PostgreSQL', 'Bootstrap', 'CSS'],
      source: 'https://github.com/demix007/car-rentals-backend',
      demo: 'https://cars-rental-front-end.vercel.app/',
    },
    {
      id: 5,
      image: CRYPTO,
      title: 'React Crypto API',
      description:
        'This is a react API project that displays the top 6 cryptocurrencies by market capitalization. The data is fetched from the CoinGecko API. The project is built with React, HTML, and CSS.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/react-crypto-api',
      demo: 'https://react-crypto-api-sand.vercel.app/',
    },
    {
      id: 6,
      image: CountryFinder,
      title: 'Global Country Finder',
      description:
        'This project is a react web application which has accessible data for different countries around the world. These data include region, name, population, sub-region, capital and more.Countries can be searched or filtered by region.',
      technologies: ['React', 'Redux', 'Bootstrap', 'CSS'],
      source: 'https://github.com/demix007/global-country-finder',
      demo: 'https://global-country-finder-363j.vercel.app/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id, image, title, description, technologies, source, demo,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-description">
                <p>{description}</p>
              </div>
              <div className="portfolio__item-technologies">
                {technologies.map((tech) => (
                  <small key={uuidv4()}>{tech}</small>
                ))}
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={source}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
};

export default Portfolio;
