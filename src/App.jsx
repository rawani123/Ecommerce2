import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes}from "react-router-dom"
import './App.css'

import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/login"element={<LoginPage/>}/>
          <Route path="/signup"element={<SignupPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
