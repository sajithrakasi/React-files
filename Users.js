import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {
  const[searchparams,setSearchParams]=useSearchParams()
  const isActive=searchparams.get('filter')==='active'
  return (
    <div>
      
      <Outlet/>
      <button onClick={()=>{setSearchParams({'filter':'active'})}}>Active Users</button>
     <br></br>
      <button onClick={()=>{}}>All Users</button>
      {isActive?'active users only':'all users'}
    </div>
  )
}
