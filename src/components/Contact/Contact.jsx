import '../Layout/Layout.css'
import './contact.css'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dgpbz4t",
      "template_id",
      refForm.current,
      "08N4IqDBsvgsBIXuY"

     
    ).then(
      () => {
        alert('Message Successfully sent')
        window.location.reload(false)
      }, () => {
        alert('Failed to send, please try again')
      }
    )

    
  }
  

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
        <form ref={refForm} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Name' required className='name'/>
          <input type="email" name='email' placeholder='Email' required className='email'/>
          <input type="text" name='subject' placeholder='Subject' required className='subject'/>
          <textarea placeholder='Message' name='message' required className='text'></textarea>
          <input type="submit" className='flat-button' value="SEND"/>
        </form>

      </div>
      </div>
      
    </div>
    <span className='tags bottom-tags' id='bottom-tags'>&lt;/body&gt;</span>
    </>
  )
}

export default Contact