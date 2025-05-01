import React from 'react'
import type { IconType } from "react-icons"

type headProps ={
    icons: IconType
    details: string
    clas: string
}

const Header = ({icons: Icon, details, clas}:headProps) => {
  return (
    <div>
        <h1 className=' text-center rounded-[20rem] border border-[#ffffff3e] px-[1rem] py-[0.3rem] mx-auto w-fit flex items-center gap-2'><Icon className={clas}/> {details}</h1>
    </div>
  )
}

export default Header