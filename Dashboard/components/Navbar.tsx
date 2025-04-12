import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

const Navbar = () => {
  return (
    <div className="px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[1rem] bg-[#fff] text-[#000] border-b border-[#000]">
      <div className="flex justify-between items-center">
        <Image src={logo} alt="" className="w-[4rem] h-[4rem] rounded-full" />
        <Link className="rounded-xl bg-[#fff] border border-[#ffffff3e] px-[1.5rem] py-[0.5rem] hover:bg-gray-100 duration-150" href={"/login"}>login</Link>
      </div>
    </div>
  )
}

export default Navbar