import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
     e.preventDefault()
     axios.post('http://localhost:3000/user',{name,email,password})
     .then(res=>{console.log(res)})
     .catch(err=>{console.log(err)})
     navigate('/Login')
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
      
        <label>email:</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      
        <label>password:</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
     <button type='submit'>Signup</button>
      </form>
     
    </div>
  )
}
