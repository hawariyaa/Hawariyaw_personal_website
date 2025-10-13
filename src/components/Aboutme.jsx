import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import About from '../assets/About.jpg';
import '../css/about.css';

gsap.registerPlugin(ScrollTrigger,SplitText);

function Aboutme({ theme }) {
  const rightRef = useRef(null);
 
  useGSAP(() => {
  const heroSplit = new SplitText('.passage', {type:'lines'});
  gsap.from(heroSplit.lines, {
    y: 60,
    opacity: 0,
    duration: 2,
    stagger:0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: rightRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
}, { scope: rightRef });

  return (
    <div className={`About-container ${theme}`} id="aboutme" >
      <div className="About-left">
        <img src={About} alt="About" />
      </div>

      <div className="About-right" ref={rightRef}>
        <h1>
          Ab<span>o</span>ut m<span>e</span>
        </h1>
        <p className="passage">
          Hi, I’m Hawariyaw Paulos, a Computer Engineering graduate and an aspiring software
          developer passionate about building efficient and user-focused websites. I enjoy solving
          real-world problems through technology — from designing interactive front-end interfaces
          with React to developing reliable back-end systems using Express.js and MongoDB.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
