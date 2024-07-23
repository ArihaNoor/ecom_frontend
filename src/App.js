import React from 'react'
import {Routes, Route} from "react-router-dom"
import LoginScreen from '../src/Views/User/Auth/Login'
import SignupScreen from '../src/Views/User/Auth/Signup'
import User from './Layout/User'
import Admin from './Layout/Admin'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginScreen />} />
      <Route exact path="/signup" element={<SignupScreen />} />
      <Route exact path="/user/*" element={<User />} />
      <Route exact path="/admin/*" element={<Admin />} />
    </Routes>
  )
}

export default App
