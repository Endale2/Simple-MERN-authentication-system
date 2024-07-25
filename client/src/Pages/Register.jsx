import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import { useState } from 'react';

function Register() {
    const navigate =useNavigate()
    const [data, setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const registerUser=async(e)=>{
        e.preventDefault();
        const {name, email, password}=data
        try{
          const {data}=await axios.post('/register',{name, email, password})

          if(data.error){
          toast.error(data.error)
          } else {
            setData({})
            toast.success("You registered in successfully")
            navigate("/login")
          }
        }
       
        catch(err){
       console.log(err)
        }

    }
  return (
    <div>
      <p>Register here</p>
      <form onSubmit={registerUser}>
        <label>name: </label>
        <input type="text" placeholder=" enter your name here ...."  value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        <label>email: </label>
        <input type="email" placeholder=" enter your email here ...."  value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <label>password: </label>
        <input type="password" placeholder=" enter your password here ...."  value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
        <button type="submit" >Register</button>
      </form>
    </div>

  )
}

export default Register
