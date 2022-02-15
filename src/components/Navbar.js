import React from 'react'

function Navbar() {
  return (
    <div className='topnav'>
        <a href='/' className='active'>Home</a>
        <a href='/cart'>Orders</a>
        <a href='/history'>History</a>
    </div>
  )
}

export default Navbar