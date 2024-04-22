import React from 'react'
import { userContext,passwordContext } from '../../App'
import { useContext } from 'react'
export default function F() {
    const user=useContext(userContext)
    const password=useContext(passwordContext)
  return (
    <div>
      name:{user.name} age:{user.age}
      pwd:{password}
    </div>
  )
}
