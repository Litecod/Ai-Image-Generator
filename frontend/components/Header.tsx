import React from 'react'

type headProps ={
    icons: any,
    details: string
}

const Header = ({icons, details}:headProps) => {
  return (
    <div>
        <h1 className='text-center rounded-[20rem] border border-[#ffffff3e] px-[1rem] py-[0.3rem] mx-auto w-fit flex items-center gap-2'>{icons} {details}</h1>
    </div>
  )
}

export default Header