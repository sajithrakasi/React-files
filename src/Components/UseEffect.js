import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const[time,setTime]=useState(new Date())
    const[val,setVal]=useState("")
    
    useEffect(()=>{
      const interval=setInterval(()=>{
      setTime(new Date())
      },1000)
      
      return()=>{
        clearInterval(interval)}
    },[time])

    useEffect(()=>{
        const timeString=time.toLocaleTimeString()
        if(timeString ==="12:36:10 AM"){
            setVal("happy Birthday")
        }
    })
  return (
    <div>
    <h1>current time{time.toLocaleTimeString()}</h1>
    <h3>{val}</h3>
    </div>
  )
}
