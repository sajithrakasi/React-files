import React, { useState } from 'react'
import UseDocumentTitle from './UseDocumentTitle'

export default function Click1() {
    const[count,setCount]=useState(0)

    UseDocumentTitle(count) 
    
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>incre</button>
      <button onClick={()=>{setCount(count-1)}}>decre</button>
    </div>
  )
}
