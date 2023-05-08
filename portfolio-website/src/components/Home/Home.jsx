import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1> Hi, <br /> I'm
                Al-Haadee,
                <br />
                Full Stack Developer
            </h1>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home;