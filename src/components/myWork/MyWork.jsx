import React from "react";
import fantasyImg from "/src/assets/project-screenshots/fantasyLeague_homepage.png"
import adventureImg from "/src/assets/project-screenshots/adventure_game_overview.png"
import portfolioImg from "/src/assets/project-screenshots/portfolio_pic.png"
import ecommerceImg from "/src/assets/project-screenshots/ecommerce_drawing.png"
import tictactoeImg from "/src/assets/project-screenshots/ticTacToe_img.png"
import "./myWork.css";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";

const MyWork = () => {
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
          <h3>Click on each project to see the source code and find out more!</h3>
        </div>
        <section className="projects">
          <div className="project-card">
            <img
              className="project-img"
              src={fantasyImg}
              alt="fantasy league image"
            />
            <div className="middle">
              <a
                className="project-link"
                href="https://github.com/Alhaadee/fantasy_league_project"
                target="_blank"
              >
                <h3>Fantasy Football League</h3>
              </a>
            </div>
            <p>
              Capstone Project from Bright Network Coding Bootcamp. Worked as a group in an
              AGILE way of working to create a RESTful API with Java, Spring
              Boot and PostgreSQL and the website using React.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              src={tictactoeImg}
              alt="fantasy league image"
            />
            <div className="middle">
              <a
                className="project-link"
                href="https://github.com/Alhaadee/tictactoe_frontend_project"
                target="_blank"
              >
                <h3>TicTacToe</h3>
              </a>
            </div>
            <p>
              Used React to develop a webpage to play tic-tac-toe with API
              requests during the Bright Network Bootcamp.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              id="portfolio-picture"
              src={portfolioImg}
              alt="Portfolio"
            />
            <div className="middle">
              <a
                className="project-link"
                href="https://github.com/Alhaadee/portfolio"
                target="_blank"
              >
                <h3>Adventure Game API</h3>
              </a>
            </div>
            <p>
              This website was created with a focus on React and CSS which was then deployed using Github Pages.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              src={ecommerceImg}
              alt="fantasy league image"
            />
            <div className="middle">
              <a
                className="project-link"
                href="https://github.com/Alhaadee/ecommerce_project"
                target="_blank"
              >
                <h3>Ecommerce Site</h3>
              </a>
            </div>
            <p>
              Created RESTful API for an eCommerce site, using Spring Boot, JPA
              and PostgreSQL. Also used Mockito and AssertJ for unit tests.
              Currently working on learning React Query and Bootstrap to create
              the front-end.
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-img"
              src={adventureImg}
              alt="fantasy league image"
            />
            <div className="middle">
              <a
                className="project-link"
                href="https://github.com/Alhaadee/adventure_game_api_project"
                target="_blank"
              >
                <h3>Adventure Game API</h3>
              </a>
            </div>
            <p>
              Created RESTful API for a text-based game using Spring Boot and a
              PostgreSQL database during the Bright Network Bootcamp. The game
              was played by making various HTTP requests using Postman.
            </p>
          </div>
          
        </section>
      </div>

    </>
  );
};

export default MyWork;
