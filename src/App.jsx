import { useState } from 'react'
import './css/App.css'
import Nav from './components/nav.jsx'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
