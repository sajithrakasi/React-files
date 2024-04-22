import React from 'react'
import UpdatedComponent from './Hoc'

function Counters2(props) {
  return (
    <div>
      <h1 onMouseMove={props.handleInc}>{props.count}</h1>
    </div>
  )
}

export default UpdatedComponent(Counters2)
