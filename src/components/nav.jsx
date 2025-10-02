import React from 'react'
import { useState } from 'react'
import '../css/nav.css'
import profile from '../assets/profile.jpg'
import logo from '../assets/logoha.png'
import day from '../assets/day.png'
import night from '../assets/night.png'
import menuiconb from '../assets/menuicon-b.png'
import menuiconw from '../assets/menuicon-w.png'
import closeicon from '../assets/closeicon.png'

const Nav = ({theme, setTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const openMenu = () => {
     setMenuOpen(!menuOpen)
  }
  
  //we can only use hooks inside a function component like this one, hooks can't be nested in loops, conditions, or nested functions
  // hooks are called in the exact same order on every render
  return (
    // Syntax	Used in	Purpose {variable}	JSX / JSX expressions	Inserts JavaScript directly into JSX
    // ${variable}	Template literals	Inserts values into strings using backticks ` `
    <nav className={`nav-container ${theme}`}>
       <div className="nav-left">
          <img src={profile} alt="profile logo" className="logoimg" />
          <img src={logo} alt="logo"/>
       </div>
       <div className={`infos ${theme}`}>
         <i class="fa-brands fa-github"></i>
         <i class="fa-brands fa-linkedin"></i>
       </div>
       <div className={`nav-right  ${menuOpen ? 'open' : ''}`}>
          <ul className={`nav-links ${theme}`}>
            <li>About-me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li className={`${theme}`}>Get in touch</li>
            <li><img src={theme  === 'light' ? night : day} alt="night mode" onClick={toggle}/></li>          
          </ul>
       </div>
       <img src={theme === 'light'
          ? menuOpen
            ? closeicon
            : menuiconb
          : menuOpen
            ? closeicon
            : menuiconw
       }
       className="menu"
       onClick={openMenu}/>
   </nav>
  )
}

export default Nav