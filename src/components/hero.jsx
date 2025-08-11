import React from 'react'
import '../css/hero.css'
import herow from '../assets/hero-w.png'
import herob from '../assets/hero-b.jpg'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

function Hero({theme, setTheme}) {
  useGSAP(() => {
    gsap.from('#hero', {
       x:350,
       duration:3,
       ease:'power1.out'
    }, [theme])
  })
  useGSAP(() => {
    gsap.from('h1', {
        x:-250,
        duration:3,
        ease:'power1.out'
    })
  })
  useGSAP(() => {
    gsap.from('h2', {
      x:-250,
      duration:4,
      ease:'power1.out'
    })
  })
  return (
    <div className={`hero-container ${theme}`}>
       <div className="hero-left">
          <h1 id='h1'>Hi, I'm Hawariyaw paulos</h1>
          <h2 id='h2'>A Full Stack Software Engineer</h2>
       </div>
       <div className="hero-right">
          <img src={theme === 'light' ? herow : herob} alt="hero photo" id="hero"/>
       </div>
    </div>
  )
}

export default Hero