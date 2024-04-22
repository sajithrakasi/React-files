import React, { useEffect, useState } from 'react'

export default function SetTimeOut() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setCount(prev=>prev+1)
      },10)
      return()=>{
        clearTimeout(timeout)
      }
    })
  return (
    <div>
      {count}
    </div>
  )
}
