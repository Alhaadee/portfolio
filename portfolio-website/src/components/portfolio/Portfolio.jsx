import React from "react";
import "./portfolio.css";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone-portfolio">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"My Work".split("")}
              idx={12}
            />
          </h1>
         <section className="projects">
         <div className="project-card">
            <img
              className="project-img"
              src="src\assets\project-screenshots\fantasyLeague_homepage.png"
              alt="fantasy league image"
            />
            <div className="middle">
              <a className="project-link" href="https://github.com/Alhaadee/fantasy_league_project">
                <h3>Fantasy Football League</h3>
              </a>
            </div>
            <p>
              Capstone Project from Coding Bootcamp. Worked as a group in an
              AGILE way of working to create a RESTful API with Java, Spring
              Boot and PostgreSQL and the website using React.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              src="src\assets\project-screenshots\fantasyLeague_homepage.png"
              alt="fantasy league image"
            />
            <div className="middle">
              <a className="project-link" href="https://github.com/Alhaadee/fantasy_league_project">
                <h3>Fantasy Football League</h3>
              </a>
            </div>
            <p>
              Capstone Project from Coding Bootcamp. Worked as a group in an
              AGILE way of working to create a RESTful API with Java, Spring
              Boot and PostgreSQL and the website using React.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              src="src\assets\project-screenshots\fantasyLeague_homepage.png"
              alt="fantasy league image"
            />
            <div className="middle">
              <a className="project-link" href="https://github.com/Alhaadee/fantasy_league_project">
                <h3>Fantasy Football League</h3>
              </a>
            </div>
            <p>
              Capstone Project from Coding Bootcamp. Worked as a group in an
              AGILE way of working to create a RESTful API with Java, Spring
              Boot and PostgreSQL and the website using React.
            </p>
          </div>
         </section>
        
        </div>
      </div>
    </>
  );
};

export default Portfolio;
