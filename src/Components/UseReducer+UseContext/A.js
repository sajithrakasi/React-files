import React, { useContext } from 'react'
import { CounterContext } from '../../App'

export default function A() {
    const counter=useContext(CounterContext)
  return (
    <div>
      A
     <button onClick={()=>counter.dispatch('inc')}>+</button>
      <button onClick={()=>counter.dispatch('dec')}>-</button>
      <button onClick={()=>counter.dispatch('reset')}>C</button>
    </div> 
  )
}
