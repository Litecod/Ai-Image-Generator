import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.jpg"

const Navbar = () => {
  return (
    <div className="fixed w-full px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[1rem] bg-[#fff] text-[#000] z-20 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="" className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] rounded-full" />
          <p className="text-[1.3rem] sm:text-[1.7rem] logo font-medium">Cartoonify 3D</p>
        </div>
        <Link className="rounded-xl bg-[#fff] border border-[#06060699] px-[1.5rem] py-[0.5rem] hover:bg-gray-100 duration-150" href={"/login"}>login</Link>
      </div>
    </div>
  )
}

export default Navbar