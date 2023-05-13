import '../Layout/Layout.css'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState,useEffect } from 'react'

const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
    <div className='cotainer contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
          strArray={"Contact Me".split("")}
          idx={12}
          letterClass={letterClass}/>
        </h1>
      </div>
    </div>
    </>
  )
}

export default Contact