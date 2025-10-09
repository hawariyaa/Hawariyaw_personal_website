import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import About from '../assets/About.jpg';
import '../css/about.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Aboutme({theme, setTheme}) {
  const rightRef = useRef(null);

  useGSAP(() => {
    // makes transforms behave nicely on spans
    gsap.set('h1 span', { display: 'inline-block' });

    // animate the spans, but trigger on the section
    gsap.from('h1 span', {
      y: -80,
      opacity: 0,
      stagger: 1,
      duration: 2,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: rightRef.current,     // not the spans
        start: 'top center',
        delay:2,
        toggleActions: 'play none none reverse'
      },
    });
    gsap.from('.p', {
      y:60,
      opacity: 0,
      duration:2,
      ease: 'power1.inOut',
      stagger:0.5,
      scrollTrigger:{
        trigger:rightRef.current,
        start: 'top center',
        end: 'top top',
        toggleActions: 'play none none reverse'
      }
      
    });
    
  }, { scope: rightRef });

  return (
    <div className={`About-container ${theme}`} id='aboutme'>
      <div className="About-left">
        <img src={About} alt="About image" />
      </div>
      <div className="About-right" ref={rightRef}>
        <h1>Ab<span>o</span>ut m<span>e</span></h1>
        <p className="p">Hi, I’m Hawi Paul, a Computer Engineering graduate and an aspiring software developer
           passionate about building efficient and user-focused applications. I enjoy solving real-world problems 
           through technology — from designing intuitive front-end interfaces with React to developing reliable back-end systems using Node.js and NestJS.</p>
      </div>
    </div>
  );
}

export default Aboutme;
