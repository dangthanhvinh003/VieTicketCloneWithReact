import { useState } from 'react'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/landing/home'
import CreateEvent from './components/createEvent/createEvent'
import Login from './components/login/login'
import SignUp from './components/signup/signUp'
import ChangeProfile from './components/changeProfile/changeProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createEvent" element={<CreateEvent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/users/:id" element={<ChangeProfile />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
