"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@/public/landingpageImage/logo.jpg"
import { useContexts } from "@/context/AuthContext"

const Navbar = () => {
  const {setLogin} = useContexts()
  return (
    <div className="px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[1rem] bg-[#000] text-[#fff] border-b border-[#ffffff30] w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="" className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] rounded-full" />
          <p className="text-[1.3rem] sm:text-[1.7rem] logo font-medium">Cartoonify 3D</p>
        </div>
        <Link className="rounded-xl bg-[#000] border border-[#ffffff3e] px-[1.5rem] py-[0.5rem] hover:bg-gray-900 duration-150 cursor-pointer" href="/generate" onClick={() => setLogin(true)} >login</Link>
      </div>
    </div>
  )
}

export default Navbar