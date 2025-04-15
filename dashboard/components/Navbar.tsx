"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { useContexts } from "@/context/AuthContext";

interface NavbarProps {
  setClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setClick }: NavbarProps) => {
  const { user, token } = useContexts();
  const isAuthenticated = token === "";
  return (
    <div className="fixed w-full px-[0.8rem] md:px-[2rem] lg:px-[1.5rem] py-[1rem] bg-[#fff] text-[#000] z-20 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="Cartoonify 3D Logo"
            className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] rounded-full"
            width={48} 
            height={48}
          />
          <p className="text-[1.3rem] sm:text-[1.7rem] logo font-medium">Cartoonify 3D</p>
        </div>
        {isAuthenticated ? (
          <Link
            className="rounded-xl bg-[#fff] border border-[#06060699] px-[0.8rem] text-[0.8rem] sm:text-[1rem] sm:px-[1.5rem] py-[0.5rem] hover:bg-gray-100 duration-150"
            href="/login"
          >
            login
          </Link>
        ) : (
          <img
            src={user?.photoURL || "/default-avatar.png"} 
            alt="User profile"
            className="rounded-full w-[2.2rem] h-[2.2rem] sm:w-[3rem] sm:h-[3rem]"
          />
        )}
        <div
          className="p-[0.8rem] bg-gray-200 rounded-xl cursor-pointer sm:hidden"
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
  )
}

export default Navbar;