import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1> Hi, <br /> I'm
                Al-Haadee
                <br />
                
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home;