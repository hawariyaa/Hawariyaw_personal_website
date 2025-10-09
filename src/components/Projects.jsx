import React from 'react'
import '../css/projects.css'
import kiray from '../assets/kiray.png'

function Projects({ theme, setTheme }) {
  return (
    <div className={`banner ${theme}`}  id='projects'>
      <h2>Projects</h2>
      <div className="slider" style={{ "--quantity": 4 }}>
        <div className="item" style={{ "--position": 1 }}>
            <img src={kiray} alt="Project 1" />
            <h3>Kiray is a house rental platform.</h3>
        </div>
        <div className="item" style={{ "--position": 2 }}>
            <img src={kiray} alt="Project 2" />
            <h3>Kiray is a house rental platform.</h3>
        </div>
        <div className="item" style={{ "--position": 3 }}>
            <img src={kiray} alt="Project 3" />
            <h3>Kiray is a house rental platform.</h3>
        </div>
        <div className="item" style={{ "--position": 4 }}>
            <img src={kiray} alt="Project 4" />
            <h3>Kiray is a house rental platform.</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects
