import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='topnav'>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/cart'>Orders</NavLink>
        <NavLink to='/history'>History</NavLink>
    </div>
  )
}

export default Navbar