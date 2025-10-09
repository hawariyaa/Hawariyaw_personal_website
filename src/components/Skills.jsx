import React from 'react'
import '../css/skills.css'
import Rec from '../assets/React.jpg'
import node from '../assets/nodejs.jpg'
import js from '../assets/js.jpg'
import html5 from '../assets/html5.jpg'
import css3 from '../assets/css3.jpg'
import sql from '../assets/sql.jpg'
import tailwind from '../assets/tailwind.png'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Skills({theme, setTheme}) {
  useGSAP(() => {
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.icons',  // element that triggers animation
      start: 'top 80%',   // when top of .icons hits 80% of viewport  // optional when animation ends
      toggleActions: 'play none none reset', // play on enter, reset on leave
      // markers: true, // uncomment to debug positions
    },
    yoyo: false
  });

  t1.to('.img1', {
      x:-160,        
      rotation: -360,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img1', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img1', {
    x: -600,
    rotation:-1080,
    duration:2,
    ease: 'power1.inOut'
  })
  
  t1.to('.img2', {
      x:-260,        
      rotation: -360,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img2', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img2', {
    x:-630,
    rotation:-720,
    duration:2,
    ease: 'power1.inOut'
  })
  
  t1.to('.img3', {
      x:-360,        
      rotation: -360,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img3', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img3', {
    x:-650,
    rotation:-720,
    duration:2,
    ease: 'power1.inOut'
  })
  
  t1.to('.img4', {
      x:-460,        
      rotation: -720,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img4', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img4', {
    x: -670,
    rotation:-1080,
    duration:2,
    ease: 'power1.inOut'
  })
 
  t1.to('.img5', {
      x:-560,        
      rotation: -720,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img5', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img5', {
    x: -680,
    rotation:-1080,
    duration:2,
    ease: 'power1.inOut'
  })
  
  t1.to('.img6', {
      x:-640,        
      rotation: -720,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img6', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img6', {
    x: -690,
    rotation:-790,
    duration:2,
    ease: 'power1.inOut'
  })
  
  t1.to('.img7', {
      x:-760,        
      rotation: -1080,
      duration:3,
      ease: 'power1.inOut',
  })
  .to('.img7', {
      y:334,        
      duration:1,
      ease: 'bounce.out',
  })
  .to('.img7', {
    x: -700,
    rotation:-720,
    duration:2,
    ease: 'power1.inOut'
  })
}, []);

        
        
    
  return (
    <div className={`skills ${theme === 'dark' ? 'dark' : 'light'}`} id='skills'>
         <h2>Skills</h2>
         <div className='icons'>
            <img src={sql} alt="sql" className="img1"/>
            <img src={css3} alt="css icon" className="img2"/>
            <img src={html5} alt="html icon" className="img3"/>
            <img src={js} alt="js icon" className="img4"/>
            <img src={node} alt="node icon" className="img5"/>
            <img src={Rec} alt="React icon" className="img6"/>
            <img src={tailwind} alt="tailwind" className="img7"/>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
    </div>
  )
}

export default Skills