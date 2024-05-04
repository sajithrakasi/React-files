import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from './Auth'
export default function Navbar() {
  const auth=useAuth()
  return (
    <div>
      <nav className='header-nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Service'>Service</NavLink>
      <NavLink to='/Products'>Products</NavLink>
      <NavLink to='/Users'>Users</NavLink>
      <NavLink to='/Profile'>Profile</NavLink>
      {!auth.user &&<NavLink to='/Login'>Login</NavLink>}
      {!auth.user &&<NavLink to='/Signup'>Signup</NavLink>}
 
  </nav> 
   </div>
  )
}
