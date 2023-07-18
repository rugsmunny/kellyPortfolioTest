import React, { useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import cookbook from '../../assets/images/portfolio/cook-book.png';
import webshop from '../../assets/images/portfolio/Webshop.png';
import calendar from '../../assets/images/portfolio/Calendar.png';
import flickr from '../../assets/images/portfolio/flickr.png';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project Cookbook',
      description:
        'This is a recipe book web application developed using the Spring framework, JS and MySQL, together with a team of 4 people. Soon ready to be launched..',
      image: cookbook,
      url: 'https://github.com/Juhniel/RecipeBookSpring',
    },
    {
      name: 'Project Webshop',
      description:
        'This is my final project for an advanced JS course, where I created a webshop using React and Firebase.',
      image: webshop,
      url: 'https://kelly96e.github.io/java22-avjs-slutprojekt-shkelqim-gashi/',
    },
    {
      name: 'Project Calendar',
      description:
        'This is my final project for a Java course, where I developed a weekly calendar application using Java and the Swing framework.',
      image: calendar,
      url: 'https://github.com/kelly96E/JAVA22-java1-slutprojekt-shkelqim-gashi',
    },
    {
      name: 'Project Flickr',
      description:
        'I created a Flickr photo search web app for my final project in JavaScript course, showcasing my skills in dynamic user interface design and using APIs.',
      image: flickr,
      url: 'https://kelly96e.github.io/java22-js-slutprojekt-shkelqim-gashi/',
    },
  ]);

  const renderPortfolio = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={project.image}
                className="portfolio-image"
                alt={project.name}
              />
              <div className="content">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <div>{renderPortfolio(projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
