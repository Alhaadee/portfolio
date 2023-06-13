import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = "I'm Al-Haadee".split("");
  const firstWord = "Hi,".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  }, [])
  

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>  <AnimatedLetters 
                letterClass={letterClass} 
                strArray={firstWord}
                idx={12}/> 
                <br />
                <AnimatedLetters 
                letterClass={letterClass} 
                strArray={nameArray}
                idx={15}/>
                <br />
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to="/portfolio/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
    <span className='tags bottom-tags' id='bottom-tags'>&lt;/body&gt;</span>
    </>
  )
}

export default Home;