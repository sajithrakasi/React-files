import React, { useState } from 'react'
import MouseMove from './MouseMove'


export default function Toggle() {
    const[toggle1,setToggle1]=useState(true)
  return (
    <div>
      <button onClick={()=>{setToggle1(!toggle1)}}>toggle</button>
      {toggle1 && <MouseMove/>}
    </div>
  )
}
