import React, { useEffect, useState } from 'react'
import style from './State.css'

export default function State() {
    const[duration,setDuration]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    const[seconds,setSeconds]=useState(0)
    const[isTimerCompleted,SetIsTimerCompleted]=useState(false)
    const handleChange=(e)=>{
      setDuration(e.target.value)
      setSeconds(e.target.value)
    }
    useEffect(()=>{
        let interval
        if(isRunning && seconds>0){
            interval=setInterval(()=>{
                setSeconds(prev=>prev-1)
            },1000)
        }
        else if(seconds===0 && isRunning){
          SetIsTimerCompleted(true)
          setIsRunning(false)
        }
        return()=>{
            clearInterval(interval)
        }
    },[isRunning,seconds])

const progressWidth=(seconds/duration)*100

  return (
    <div>
      {isTimerCompleted?(<h1>happy birthday</h1>):(
        <div className='container'>
          <div className='progressbar'style={{width:progressWidth+'%'}}>
    </div>
      </div>
    )} 
      <br></br>

     <input type='number' value={duration} onChange={handleChange} disabled={isRunning}/>
          
      {isRunning?(<button onClick={()=>{
            setIsRunning(false)}}>Stop</button>)
            :(<button onClick={()=>{
                setIsRunning(true)}}>Start</button>)
      }
      <button onClick={()=>{setSeconds(duration);SetIsTimerCompleted(false)}}>Reset</button>
     
    </div>
  )
}
