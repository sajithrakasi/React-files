import React from 'react'

function CallBackButton(props) {
    console.log(`button for ${props.name}`)
  return (
    <div>
      <button onClick={props.handleClick}>click </button>
    </div>
  )
}

export default React.memo(CallBackButton)
