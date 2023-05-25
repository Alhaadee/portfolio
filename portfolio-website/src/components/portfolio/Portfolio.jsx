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
        
        <div className='project-card'>
        <img className='project-img' src="src\assets\project-screenshots\fantasyLeague_homepage.png" alt="fantasy league image" />
        <div className='middle'><h3>Fantasy Football League</h3></div>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
       
      
    </div>
    </>
  )
}

export default Portfolio;