import { useState } from 'react'

 function UseCounter( initialValue=0,incValue) {
    const[count,setCount]=useState(initialValue)
    const handleinc=()=>{
        setCount(count+incValue)
    }
    const handledec=()=>{
        setCount(count-incValue)
    }
    const handleres=()=>{
      setCount(incValue)
    }
  return[count,handleinc,handledec,handleres]
}
export default UseCounter