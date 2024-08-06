import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './portfolio.css';
import SpaceTravelers from '../../assets/spacetravelers.png';
import Bookstore from '../../assets/bookstore.png';
import AwesomeBooks from '../../assets/awesome_books.png';
import CountryFinder from '../../assets/country_finder.png';
import Leaderboard from '../../assets/leaderboard.png';
import CarRentals from '../../assets/car_rentals.png';
import CRYPTO from '../../assets/crypto.png';
import RealEstate from '../../assets/real-estate.png';
import Education from '../../assets/education.png';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: Education,
      title: 'Education Website',
      description: 'This site showcases an education website with well crafted UI and multiple pages. The project is built with React, HTML, and CSS.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/education-website',
      demo: 'https://education-website-pied.vercel.app/',
    },
    {
      id: 1,
      image: RealEstate,
      title: 'Real Estate',
      description: 'This application is React application that displays a list of houses for sale and rental. The project is built with React, HTML, and CSS.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/real-estate',
      demo: 'https://real-estate-website-hazel-seven.vercel.app/',
    },
    {
      id: 1,
      image: SpaceTravelers,
      title: 'Space Travelers Hub',
      description: 'Space Travelers Hub is a cutting-edge React application that empowers users to effortlessly book and cancel rocket reservations. Leveraging API integration.',
      technologies: ['React', 'Redux', 'CSS'],
      source: 'https://github.com/demix007/Space-travelers-hub',
      demo: 'https://space-travelers-hub-eta.vercel.app/',
    },
    {
      id: 2,
      image: CarRentals,
      title: 'Car Rentals',
      description: 'This project is based on an app to book an appointment to try a dream car. App users are able to reserve their dream cars, as well as view the reservations. New cars can also be added and deleted from the app. Postgres database was used as database, Rails to create backend API, and React & Redux for frontend UI',
      technologies: ['React', 'Rails', 'PostgreSQL', 'Bootstrap', 'CSS'],
      source: 'https://github.com/demix007/car-rentals-backend',
      demo: 'https://cars-rental-front-end.vercel.app/',
    },
    {
      id: 3,
      image: CRYPTO,
      title: 'React Crypto API',
      description: 'This is a react API project that displays the top 6 cryptocurrencies by market capitalization. The data is fetched from the CoinGecko API. The project is built with React, HTML, and CSS.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/react-crypto-api',
      demo: 'https://react-crypto-api-sand.vercel.app/',
    },
    {
      id: 4,
      image: AwesomeBooks,
      title: 'Awesome Books',
      description: 'Awesome Books is a professional JavaScript application that enables users to efficiently add and remove books from a list, providing a seamless experience for book management.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/Awesome-Books-ES6',
      demo: 'https://awesome-books-es-6-chi.vercel.app/',
    },
    {
      id: 5,
      image: Bookstore,
      title: 'Bookstore',
      description: 'Book Store is a React app for seamless book and author management, seamlessly integrating with an API. Users can efficiently add and remove books with ease, ensuring a smooth experience for book enthusiasts.',
      technologies: ['React', 'Redux', 'CSS'],
      source: 'https://github.com/demix007/bookstore-app',
      demo: 'https://bookstore-cyan.vercel.app/',
    },
    {
      id: 6,
      image: Leaderboard,
      title: 'Leaderboard App',
      description: 'Here, I set up a JavaScript project for the Leaderboard list app, using webpack and ES6. I developed the app following a wireframe, and consumed the Leaderboard API using JavaScript async and await.',
      technologies: ['React', 'HTML', 'CSS'],
      source: 'https://github.com/demix007/Leaderboard',
      demo: 'https://demixleaderboard.netlify.app/',
    },
    {
      id: 7,
      image: CountryFinder,
      title: 'Global Country Finder',
      description: 'This project is a react web application which has accessible data for different countries around the world. These data include region, name, population, sub-region, capital and more.Countries can be searched or filtered by region.',
      technologies: ['React', 'Redux', 'Bootstrap', 'CSS'],
      source: 'https://github.com/demix007/global-country-finder',
      demo: 'https://global-country-finder-363j.vercel.app/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id,
            image,
            title,
            description,
            technologies,
            source,
            demo,
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
                <a href={source} className="btn" target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};
export default Portfolio;
