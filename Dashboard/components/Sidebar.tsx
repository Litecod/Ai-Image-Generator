"use client"

import Link from 'next/link'
import { MdOutlinePriceChange } from 'react-icons/md'
import { RiAiGenerate2 } from 'react-icons/ri'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className='fixed w-full sm:w-[20%] md:w-[30%] lg:w-[17%] h-screen bg-[#fff] sm:absolute pt-[5rem] z-10 overflow-y-scroll'>
            <div className="flex flex-col gap-4 pt-6 py-[0.7rem] sm:py-auto px-[0.7rem] sm:px-[1rem] text-[15px] b">
                <Link href={"/generate"} className={`w-full px-[1rem] py-[0.5rem] rounded ${pathname.includes("generate") && "bg-black text-white"}`} >
                    <div className="flex gap-2 items-center"><RiAiGenerate2 /><span className='sm:hidden md:block'>Generate</span></div>
                </Link>
                <Link href={"/pricing"} className={`w-full flex justify-between px-[1rem] py-[0.5rem] rounded gap-2 ${pathname.includes("pricing") && "bg-black text-white"}`} >
                    <div className="flex gap-2 items-center"><MdOutlinePriceChange /> <span className='sm:hidden md:block'>Pricing</span></div>
                    <div className=" bg-green-300 px-[0.3rem] py-[0.2rem] rounded text-[0.6rem]">User</div>
                </Link>
            </div>
        </div>

    )
}

export default Sidebar