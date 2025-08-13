import React, { useRef } from 'react'
import '../css/hero.css'
import herow from '../assets/hero-w.png'
import herob from '../assets/hero-b.jpg'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Hero({ theme, setTheme }) {
//React will put the DOM element into heroRef.current when the component mounts.
  const heroRef = useRef()

  useGSAP(() => {
//gsap.context is a GSAP utility that: Scopes all your GSAP selectors ('#hero', 'h1', '.letter') so they only target elements inside heroRef.current.
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
          stagger: 0.2,
          repeat: 1,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [theme])
// This runs when the component unmounts or when theme changes (because theme is in the dependency array
// ctx.revert() cleans up:Removes any animations that were applied.Restores the DOM elements to their original state (before GSAP touched them).
// so when switching to dark mode all the gsap will be cleaned,and then the gsap will run again
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
