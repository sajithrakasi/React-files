import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Profile() {
  const auth=useAuth()
  const navigate=useNavigate()
  const handleLogout=()=>{
    auth.login()
    navigate('/')
  }
  return (
    <div>
      welcome {auth?.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
