import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='topnav container-fluid'>
        <div  className='col ms-5'>
          <NavLink exact to='/'><p style={{fontFamily: "Amaranth", fontSize: "30px", color: "#FCB00F"}}>Home</p></NavLink>
        </div>
        <div className='col'>
          <NavLink to='/cart'><p style={{fontFamily: "Amaranth", fontSize: "30px", color: "#FCB00F"}}>Cart</p></NavLink>
        </div>
          <NavLink to='/history'><p style={{fontFamily: "Amaranth", fontSize: "30px", color: "#FCB00F"}}>History</p></NavLink>

    </div>
  )
}

export default Navbar