import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

const Navbar = () => {
  return (
    <div className="px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[1rem] bg-[#000] text-[#fff] border-b border-[#ffffff30]">
        <div className="flex justify-between items-center">
           <Image src={logo} alt="" className="w-[4rem] h-[4rem] rounded-full" />
            <Link className="rounded-xl bg-[#000] border border-[#ffffff3e] px-[1.5rem] py-[0.5rem] hover:bg-gray-900 duration-150" href={"/login"}>login</Link>
        </div>
    </div>
  )
}

export default Navbar