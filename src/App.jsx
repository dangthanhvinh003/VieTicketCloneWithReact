import { useState } from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateEvent from './components/createEvent/createEvent'
import Login from './components/login/login'
import SignUp from './components/signup/signUp'
import ChangeProfile from './components/changeProfile/changeProfile'
import HomePage from './components/home-page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users/:id" element={<ChangeProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
