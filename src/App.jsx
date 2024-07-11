import { useState } from 'react'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/landing/home'
import CreateEvent from './components/createEvent/createEvent'
import SearchEvent from './components/searchEvent/searchEvent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createEvent" element={<CreateEvent/>} />
        <Route path="/search" element ={<SearchEvent/>} />

      </Routes>
     </Router>
    </>
  )
}

export default App
