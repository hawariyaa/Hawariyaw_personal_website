import React from 'react'
import '../css/projects.css'
import kiray from '../assets/kiray.png'

function Projects() {
  return (
    <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects">
            <div className="each-project">
                <img src={kiray} alt=""/>
                <h2>Kiray</h2>
                <p>Kiray is a Full-stack web app built to solve the rental problem in ethiopia, where people can 
                    rent different items, not just house and cars, book the products and also pay online through
                    online payment method chapa.
                </p>
            </div>
            <div className="each-project">
                <img src={kiray} alt=""/>
                <h2>Kiray</h2>
                <p>Kiray is a Full-stack web app built to solve the rental problem in ethiopia, where people can 
                    rent different items, not just house and cars, book the products and also pay online through
                    online payment method chapa.
                </p>
            </div>
            <div className="each-project">
                <img src={kiray} alt=""/>
                <h2>Kiray</h2>
                <p>Kiray is a Full-stack web app built to solve the rental problem in ethiopia, where people can 
                    rent different items, not just house and cars, book the products and also pay online through
                    online payment method chapa.
                </p>
            </div>
            <div className="each-project">
                <img src={kiray} alt=""/>
                <h2>Kiray</h2>
                <p>Kiray is a Full-stack web app built to solve the rental problem in ethiopia, where people can 
                    rent different items, not just house and cars, book the products and also pay online through
                    online payment method chapa.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projects