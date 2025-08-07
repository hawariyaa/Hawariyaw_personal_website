import { useState } from 'react'
import './css/App.css'
import Nav from './components/nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
    </>
  )
}

export default App
