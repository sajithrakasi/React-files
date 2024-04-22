import React, { useEffect, useState } from 'react'

export default function Mounting() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('component is mounted')
    })
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>count</button>
      clicked {count} times
    </div>
  )
}
