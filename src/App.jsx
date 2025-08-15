import { useState } from 'react'
import './css/App.css'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Aboutme from './components/Aboutme.jsx'
import Skills from './components/Skills.jsx'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme}/>
      <Aboutme theme={theme} setTheme={setTheme}/>
      <Skills  />
    </>
  )
}

export default App
