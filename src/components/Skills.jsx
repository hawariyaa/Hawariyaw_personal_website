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
function Skills() {
    useGSAP(() => {
        gsap.timeline
    })
  return (
    <div>
         <div className="icons">
            <img src={sql} alt="sql"/>
            <img src={css3} alt="css icon"/>
            <img src={html5} alt="html icon"/>
            <img src={js} alt="js icon"/>
            <img src={node} alt="node icon"/>
            <img src={Rec} alt="React icon"/>
            <img src={tailwind} alt="tailwind"/>
        </div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
  )
}

export default Skills