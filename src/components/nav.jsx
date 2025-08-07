import React from 'react'
import { useState } from 'react'
import '../css/nav.css'
import profile from '../assets/profile.jpg'
import logo from '../assets/logoha.png'
import day from '../assets/day.png'
import night from '../assets/night.png'

const Nav = () => {

  //we can only use hooks inside a function component like this one, hooks can't be nested in loops, conditions, or nested functions
  // hooks are called in the exact same order on every render
  return (
    <nav className="nav-container">
       <div className="nav-left">
          <img src={profile} alt="profile logo" className="logoimg" />
          <img src={logo} alt="logo"/>
       </div>
       <div>
          <ul className="nav-links">
            <li>Aboutme</li>
            <li>Skills</li>
            <li>Projects</li>
            <li >Get in touch</li>
            <li><img src={night} alt="night mode"/></li>
          </ul>
       </div>
   </nav>
  )
}

export default Nav