import React from 'react'
import '../css/footer.css'

function Footer({theme, setTheme}) {
  return (
    <div className={`footer ${theme}`} id='footer'>
         <p>Email:hawipaul308@gmail.com</p>
         <p>phone:+251 989985951 </p>
        <div className="social-icons">
         <i class="fa-brands fa-github"></i>
         <i class="fa-brands fa-linkedin"></i>
        </div>
        <div>
                  <ul className={`nav-links ${theme}`}>
                    <li><a href="#aboutme">About-me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>       
                  </ul>
        </div>
        <p>Thank you for checking out!</p>
       <p className='legal'>© 2025 Hawariyaw Paulos. All rights reserved.</p>
    </div>
  )
}

export default Footer