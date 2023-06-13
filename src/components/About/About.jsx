import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "../Layout/Layout.css";
import "./about.css";
import { useState, useEffect } from "react";

import React from "react";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About me".split("")}
            idx={12}
          />
        </h1>
        <p>
          I am a Mechanical Engineering master’s graduate who has always been a
          keen problem-solver. While studying, I enjoyed collaborating on
          numerous group design projects and realised the tangible impact of
          code through learning Matlab.  
        </p>
        <p>
        This sparked my interest to pursue further self-learning with Python and subsequently Join the Bright
          Network Full-Stack Bootcamp.
        </p>
        <p>
        I have continued to improve my skills and I now wish to be a software engineer with an organisation that holds
        collaboration and self-development as values.
        </p>
        <a className='flat-button cv-button' href="src\assets\CV - Al-Haadee.pdf" target="_blank">Read my CV</a>
      </div>
      
      
    </div>
    <span className='tags bottom-tags' id='bottom-tags'>&lt;/body&gt;</span>
    </>
  );
};

export default About;
