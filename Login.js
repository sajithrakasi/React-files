import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './Auth'

export default function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[userList,setUserList]=useState([])
  const[errorMessage,setErrorMessage]=useState('')
const auth=useAuth()
const navigate=useNavigate()
useEffect(()=>{
  axios.get('http://localhost:3000/user')
  .then(res=>setUserList(res.data))
},[])

  const handleLogin=(e)=>{
    e.preventDefault()
    const user=userList.find(x=>x.email===email)
    if(user){
      if(user.password===password){
      auth.login(user.name)
    navigate('/')
      }
    else{
      setErrorMessage('incorrect pasword')
    }
    }
  else{
    setErrorMessage('user not found')
  }

}
  return (
    <div>
       <form onSubmit={handleLogin}>
        
        <label>email:</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      
        <label>password:</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
     <button type='submit'>Login</button>
      </form>
      {errorMessage}
    </div>
  )
}
