import React, { useCallback, useState } from 'react'
import CallBackTitle from './CallBackTitle'
import CallBackDisplay from './CallBackDisplay'
import CallBackButton from './CallBackButton'

export default function CallBackParent() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(20000)
    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    
    const handleIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
  return (
    <div>
      <CallBackTitle/>
      <CallBackDisplay name="age" Display={age}/>
      <CallBackButton name='age' handleClick={handleAge}/>
      <CallBackDisplay name="salary" Display={salary}/>
      <CallBackButton name='salary' handleClick={handleIncrement}/>
      
    </div>
  )
}
