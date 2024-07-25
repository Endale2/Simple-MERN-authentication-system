import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NavBar from './Components/NavBar'
import Dashboard from './Pages/Dashboard.jsx'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './userContex/userContext.jsx';


axios.defaults.baseURL="http://localhost:5000/";
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
   <NavBar />
   <Toaster position="bottom-right" toastOptions={{duration:2000}} />
   <Routes>
    <Route   path="/" element={ <Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Dashboard" element={<Dashboard />} />
   </Routes>
   </UserContextProvider>
  )
}

export default App
