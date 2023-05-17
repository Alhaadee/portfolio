import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "../Layout/Layout.css";
import './about.css'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eaque qui, laboriosam, assumenda quam quisquam officiis incidunt illum
            laudantium earum labore similique fugit enim doloribus facere totam.
            Quas, ducimus nemo.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, asperiores!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, sapiente.</p>
        </div>
      
    </div>
  );
};

export default About;
