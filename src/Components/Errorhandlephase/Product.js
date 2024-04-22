import React from 'react'

export default function Product(props) {
    if(props.name==="Iphone"){
        throw new Error('there is some problem')
    }
  return (
    <div>
      {props.name}
    </div>
  )
}
