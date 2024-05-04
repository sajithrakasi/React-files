import React from 'react'
import {Link, Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div>
      <input type='search' placeholder='search'/>
    <nav>
      <Link to='NewProduct'>NewProduct</Link>
      <Link to='OfferProduct'>OfferProduct</Link>
    </nav>
    <Outlet/>
    </div>
  )
}
