import React, { useRef } from 'react'
import '../css/hero.css'
import herow from '../assets/hero-w.png'
import herob from '../assets/hero-b.jpg'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Hero({ theme, setTheme }) {
  const heroRef = useRef()

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero image animation
      gsap.from('#hero', {
        x: 350,
        duration: 3,
        ease: 'power1.out'
      })

      // H1 animation
      gsap.from('h1', {
        x: -250,
        duration: 3,
        ease: 'power1.out'
      })

      // H2 letter stagger animation
      gsap.fromTo(
        '.letter',
        { y: 250, opacity: 0 }, // start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power1.out',
          stagger: 0.05,
          repeat: -1,
          repeatDelay: 0.7
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [theme])

  return (
    <div className={`hero-container ${theme}`} ref={heroRef}>
      <div className="hero-left">
        <h1 id='h1'>Hi, I'm Hawariyaw Paulos</h1>
        <h2 id='h2'>
          {"A Full Stack Software Engineer".split("").map((char, i) => (
            <span key={i} className='letter'>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
      <div className="hero-right">
        <img src={theme === 'light' ? herow : herob} alt="hero" id="hero" />
      </div>
    </div>
  )
}

export default Hero
