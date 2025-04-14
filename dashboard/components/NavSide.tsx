"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const NavSide = () => {
    const [click, setClick] = useState(false)
  return (
    <div>
        <Navbar setClick={setClick}/>
        <Sidebar click={click}/>
    </div>
  )
}

export default NavSide