import React, { useEffect, useState } from 'react'

export default function Dependency() {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[name,setName]=useState('')

useEffect(()=>{
    console.log('component is mounted')
},[name,count])



  return (
    <div>
      <button onClick={()=>{setCount(count1+1)}}>clicked {count1} times</button>
      <button onClick={()=>{setCount1(count1+1)}}>clicked {count} times</button>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  )
}
