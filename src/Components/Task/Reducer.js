import React, { useReducer, useState } from 'react'

export default function Reducer() {
    const[isrunning,setIsRunning]=useState(false)
    const[isrunning1,setIsRunning1]=useState(false)
const initialState={
    firstCounter:0,
    secondCounter:0
}
const reducer=(state,action)=>{
    switch(action){
        case 'inc':return{...state,firstCounter:state.firstCounter+1}
    
        case 'dec':return{...state,firstCounter:state.firstCounter-1}
    
        case 'inc1':return{...state,secondCounter:state.secondCounter+1}
    
        case 'dec1':return{...state,secondCounter:state.secondCounter-1}
        
        case'reset':return initialState

        default:return state
    }
}
const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h4>shopping cart</h4>
    {isrunning&&<div> product A-quantity:{count.firstCounter}
      <button onClick={()=>{dispatch('reset');setIsRunning(false)}}>remove</button>
      <button onClick={()=>{dispatch('dec')}}>decrease</button></div>}
     
      <br></br>
      {isrunning1&&<div>   product B-quantity:{count.secondCounter}<button onClick={()=>{dispatch('reset');setIsRunning1(false)}}>remove</button>
<button onClick={()=>{dispatch('dec1')}}>decrease</button></div>}
   

<br></br>

<button onClick={()=>{dispatch('inc');setIsRunning(true)}}>Add product A</button>
<button onClick={()=>{dispatch('inc1');setIsRunning1(true)}}>Add product B</button>
    </div>
  )
}
