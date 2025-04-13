"use client"

import Link from 'next/link'
import { MdOutlinePriceChange } from 'react-icons/md'
import { RiAiGenerate2 } from 'react-icons/ri'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import img from "@/public/010.jpg"
import imgTwo from "@/public/020.jpg"
import imgOne from "@/public/000.jpg"

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className='fixed w-full sm:w-[20%] md:w-[30%] lg:w-[17%] max-h-screen bg-[#fff] sm:absolute pt-[5rem] z-10 overflow-x-hidden'>
            <div className="flex flex-col gap-6 pt-6 py-[0.7rem] sm:py-auto px-[0.7rem] sm:px-[1rem] text-[15px] b">
                <Link href={"/generate"} className={`w-full px-[1rem] py-[0.5rem] rounded-[20rem] ${pathname.includes("generate") && "bg-black text-white"}`} >
                    <div className="flex gap-2 items-center"><RiAiGenerate2 /><span className='sm:hidden md:block'>Generate</span></div>
                </Link>
                <Link href={"/pricing"} className={`w-full flex justify-between px-[1rem] py-[0.5rem] rounded-[20rem] gap-2 ${pathname.includes("pricing") && "bg-black text-white"}`} >
                    <div className="flex gap-2 items-center"><MdOutlinePriceChange /> <span className='sm:hidden md:block'>Pricing</span></div>
                    <div className=" bg-green-300 px-[0.3rem] py-[0.2rem] rounded text-[0.6rem]">User</div>
                </Link>
                <div className="md:flex flex-col gap-7 mt-[1rem] hidden">
                    <div className="flex gap-2">
                    <Image src={img} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    <Image src={imgTwo} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    </div>
                    <div className="flex gap-2">
                    <Image src={imgOne} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    <Image src={img} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    </div>
                    <div className="flex gap-2">
                    <Image src={imgTwo} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    <Image src={imgOne} alt='Image' className='w-[7rem] h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar