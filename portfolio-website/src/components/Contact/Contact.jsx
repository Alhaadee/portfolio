import '../Layout/Layout.css'
import './contact.css'
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

        <div className='form-container'>
        <form>
          <input type="text" name='name' placeholder='Name' required className='name'/>
          <input type="email" name='email' placeholder='Email' required className='email'/>
          <input type="text" name='subject' placeholder='Subject' required className='subject'/>
          <textarea placeholder='Message' name='message' required className='text'></textarea>
          <input type="submit" className='flat-button' value="SEND"/>
        </form>

      </div>
      </div>
      
    </div>
    </>
  )
}

export default Contact