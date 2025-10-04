import { useState } from 'react'
import './css/App.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Aboutme from './components/Aboutme.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme}/>
      <Aboutme theme={theme} setTheme={setTheme}/>
      <Skills theme={theme} setTheme={setTheme} />
      <Projects theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
