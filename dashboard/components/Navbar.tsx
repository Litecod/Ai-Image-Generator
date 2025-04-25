"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaCrown } from "react-icons/fa";
import { useContexts } from "@/context/AuthContext";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import { useEffect } from "react";
import img from "@/public/profile.png"

interface NavbarProps {
  setClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setClick }: NavbarProps) => {
  const { user, token, imageGen } = useContexts();
  const isAuthenticated = token === "";

  useEffect(() => {

  },[])
  return (
    <div className="fixed w-full mx-auto max-w-[1550px] px-[0.8rem] md:px-[2rem] lg:px-[1.5rem] py-[1rem] text-[#fff] bg-[#000] z-20 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="Cartoonify 3D Logo"
            className="w-[2rem] sm:w-[2.5rem] h-[2rem] sm:h-[2.5rem] rounded-full"
            width={48}
            height={48}
          />
          <p className="text-[1.1rem] sm:text-[1.5rem] logo font-medium">Cartoonify 3D</p>
        </div>
        <div className=" flex gap-[0.3rem] sm:gap-[1rem]">
          {isAuthenticated ? (
            <Link
              className="rounded-xl bg-[#fff] border border-[#06060699] px-[0.8rem] text-[0.8rem] sm:text-[1rem] sm:px-[1.5rem] py-[0.5rem] hover:bg-gray-100 duration-150"
              href="/login"
            >
              login
            </Link>
          ) : (

            <div className="flex items-center gap-[0.3rem] sm:gap-[1rem]">
              <button className="flex items-center gap-[0.2rem] sm:gap-[0.3rem] text-gray-200 border border-gray-600 py-[0.4rem] sm:py-[0.3rem] px-[0.4rem] sm:px-[0.7rem] rounded-xl hover:bg-gray-800 duration-150 text-[1rem]">{imageGen} <BsFillSuitDiamondFill /></button>
              <Link href={"/pricing"} className="sm:flex items-center gap-[0.3rem] text-[#8a40fc] py-[0.3rem] px-[0.7rem] rounded-xl hover:bg-gray-800 duration-150 bg-[#170039] hidden"><FaCrown /> <span className="hidden sm:block">Upgrade</span></Link>
              <img
                src={user?.photoURL || "../public/profile.png"}
                alt="User profile"
                className="rounded-full w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem]"
              />

            </div>

          )}
          <div
            className="p-[0.6rem] md:p-[0.8rem] bg-black rounded-xl cursor-pointer border border-gray-600 sm:hidden"
            onClick={() => setClick && setClick((prev: boolean) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setClick && setClick((prev: boolean) => !prev);
              }
            }}
          >
            <HiOutlineSquare3Stack3D className="w-5 h-5" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;