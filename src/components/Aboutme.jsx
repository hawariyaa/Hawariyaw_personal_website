import React from 'react'
import About from '../assets/About.jpg'
import '../css/about.css'

function Aboutme() {
  return (
    <div className="About-container">
        <div className="About-left">
          <img src={About} alt="About image"/>
        </div>
        <div className="About-right">
          <h1>About-me</h1>
          <p>skna;kdnva;kdvna;kdslkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
          <p>alkdnva;ddddddddddddddddddddddddddddddd;aaaaaaaaaaaaaaaaaudddddddddddddddddddddddddddu</p>
          <button>Contact me</button>
        </div>
    </div>
  )
}

export default Aboutme