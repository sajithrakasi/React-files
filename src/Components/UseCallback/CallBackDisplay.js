import React from 'react'

function CallBackDisplay(props) {
    console.log(`hello from ${props.name}`)
  return (
    <div>
      {props.name} --- {props.name}
    </div>
  )
}

export default React.memo(CallBackDisplay)
