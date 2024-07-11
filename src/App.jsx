import { useState } from 'react'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/landing/home'
import CreateEvent from './components/createEvent/createEvent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createEvent" element={<CreateEvent/>} />

      </Routes>
     </Router>
    </>
  )
}

export default App
