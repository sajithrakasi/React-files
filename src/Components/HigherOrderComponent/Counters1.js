import React from 'react'
import UpdatedComponent from './Hoc'

function Counters1(props) {
  return (
    <div>
      {props.name}
      <button onClick={props.handleInc}>{props.count}</button>
    </div>
  )
}

export default UpdatedComponent(Counters1)
