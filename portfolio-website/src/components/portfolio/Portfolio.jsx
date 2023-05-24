import React from 'react'
import './portfolio.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'

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
        </div>
      
    </div>
    </>
  )
}

export default Portfolio;