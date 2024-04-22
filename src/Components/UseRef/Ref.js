import React, { useEffect, useRef } from 'react'

export default function Ref() {
    const inputRef=useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef}/>
    </div>
  )
}
