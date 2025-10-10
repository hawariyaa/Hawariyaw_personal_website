import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import About from '../assets/About.jpg';
import '../css/about.css';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

function Aboutme({ theme }) {
  const rightRef = useRef(null);

  useGSAP(() => {
    gsap.set('h1 span', { display: 'inline-block' });
    const passageText = new SplitText('.passage', { type: 'lines' });

    const playAnimation = () => {
      gsap.fromTo(
        'h1 span',
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3, duration: 2, ease: 'power2.out' }
      );

      gsap.from(
        passageText.lines,
        { y: 30, opacity: 0, duration: 5, ease: 'power1.inOut', stagger: 0.5, delay: 0.5 }
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: rightRef.current,
      start: 'top 80%',
      onEnter: playAnimation,
      onEnterBack: playAnimation, // plays when you enter back
    });

    return () => trigger.kill();
  }, { scope: rightRef });

  // 🔁 Refresh when using navbar jumps
  useEffect(() => {
    const handleHashChange = () => {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={`About-container ${theme}`} id="aboutme">
      <div className="About-left">
        <img src={About} alt="About" />
      </div>

      <div className="About-right" ref={rightRef}>
        <h1>Ab<span>o</span>ut m<span>e</span></h1>
        <p className="passage">
          Hi, I’m Hawariyaw Paulos, a Computer Engineering graduate and an aspiring software developer
          passionate about building efficient and user-focused websites. I enjoy solving real-world
          problems through technology from designing interactive front-end interfaces with React to
          developing reliable back-end systems using Express js and Mongo DB.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
