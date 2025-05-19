"use client"

import Link from 'next/link'
import { MdOutlinePhotoCameraBack, MdOutlinePriceChange } from 'react-icons/md'
import { RiAiGenerate2 } from 'react-icons/ri'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import img from "@/public/super.png"
import shrek from "@/public/shrek.png"
import moana from "@/public/moana.png"
import mario from "@/public/mario.png"
import sponge from "@/public/sponge.png"
import gta from "@/public/GTA.png"
import { useContexts } from '@/context/AuthContext'
import { CiLogout } from "react-icons/ci";
import { toast } from 'sonner'


interface NavbarProps {
    click?: boolean;
}



const Sidebar = ({ click }: NavbarProps) => {
    const { imageGen, setToken, setPrefix, token } = useContexts();
    const pathname = usePathname()
    const router = useRouter()

    const logout = () => {

        toast("Are you sure you want to log out?", {
            action: {
                label: "Yes, log out",
                onClick: () => {
                    setToken("")
                    localStorage.removeItem("token")
                    toast("Just Logged Out ")
                    router.push("/generate")
                },
            },
            cancel: {
                label: "Cancel",
                onClick: () => toast.dismiss(),
            },
            duration: 10000,
        });
    }
    const handleShrek = () => {
        setPrefix("Generate a shrek cartoon ogre with green skin, large round belly, and big long ears  based on following prompt")
        toast("Seclected Shrek")
    }
    const handleSuperhero = () => {
        setPrefix("Generate a legendary superhero at dawn on the Hall of Justice steps. if is a man generate a god-like alien in blue/red with a flowing cape superman, if is a woman generate a Amazonian warrior wielding a golden lasso, a brooding dark knight in armored tactical suit based on following prompt")
        toast("Seclected Super Heros")
    }
    const handleMoana = () => {
        setPrefix("generate a 3D Moana movie cartoon character, if is a woman it should be a little bit big, wearing an acient cloth a top rap around her upper boady and a skirt but if its a man it should have a big body, big chubby face with small eyes, big hand, big and short legs, with big belly and tatoo allow his body, where a leaf skit like base on the following prompt")
        toast("Seclected Moana")
    }
    const handleMario = () => {
        setPrefix("generate a 3D mario movie cartoon character, with a rounded nose and a cap with the symbol letter M and red in colour base on the following prompt")
        toast("Seclected Mario")
    }
    const handleSponge = () => {
        setPrefix("Generte a 3D cheerful yellow sea sponge with square pants, wide blue eyes, and buck teeth, tiny legs and tiny hands based on following prompt")
        toast("Seclected Sponge Bob")
    }
    const handleGta = () => {
        setPrefix("generate a 3D image of a 90s gangster wearing a bandana and oversized Lakers jersey, pixelated HUD elements, and a 'Groove Street' tag on the wall based on following prompt")
        toast("Seclected GTA")
    }
    const handleDefault = () => {
        setPrefix("Create a 3D rendered image of a stylized cartoon character based on following prompt")
        toast("Seclected Default")
    }
    return (
        <div className="max-w-[1550px] w-full absolute sm:fixed z-10 sm:-z-0 con">
            <div className={` w-full max-h-screen sm:min-h-screen sm:w-[20%] md:w-[30%] lg:w-[24%] xl:w-[20%] pt-[5rem] duration-150 ${click === false ? "mt-[-450px] sm:mt-0 opacity-0 sm:opacity-100" : "opacity-100 mt-0"} ${pathname.includes("generate") ? "max-sm:bg-[#000] bg-trasparent" : "bg-[#000]"}`}>
                <div className="flex flex-col gap-6 pt-6 py-[0.7rem] sm:py-auto px-[0.7rem] sm:px-[1rem] text-[15px] b">
                    <Link href={"/generate"} className={`w-full px-[1rem] py-[0.5rem] rounded-xl ${pathname.includes("generate") && "text-white bg-gray-900 border border-gray-700"}`} >
                        <div className="flex gap-2 items-center"><RiAiGenerate2 /><span className='sm:hidden md:block'>Generate</span></div>
                    </Link>
                    <Link href={"/pricing"} className={`w-full flex justify-between px-[1rem] py-[0.5rem] rounded-xl gap-2 ${pathname.includes("pricing") && "bg-gray-900 border border-gray-700 text-white"}`} >
                        <div className="flex gap-2 items-center"><MdOutlinePriceChange /> <span className='sm:hidden md:block'>Pricing</span></div>
                        <div className=" bg-green-600 px-[0.3rem] py-[0.2rem] rounded text-[0.6rem]">User</div>
                    </Link>
                    <button onClick={handleDefault} className={`w-full px-[1rem] py-[0.5rem] rounded-xl text-white bg-gray-900 border border-gray-700 cursor-pointer`} >
                        <div className="flex gap-2 items-center"><MdOutlinePhotoCameraBack /><span className='sm:hidden md:block'>Generate Default</span></div>
                    </button>
                    <div className="flex flex-row sm:flex-col gap-2 sm:gap-7 mt-[1rem] ">
                        <div className="flex gap-2 w-[33.3%] sm:w-full">
                            <Image onClick={handleSuperhero} src={img} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                            <Image onClick={handleShrek} src={shrek} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                        </div>
                        <div className="flex gap-2 w-[33.3%] sm:w-full">
                            <Image onClick={handleMoana} src={moana} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                            <Image onClick={handleMario} src={mario} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                        </div>
                        <div className="flex gap-2 w-[33.3%] sm:w-full">
                            <Image onClick={handleSponge} src={sponge} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                            <Image onClick={handleGta} src={gta} alt='Image' className='w-[50%] max-sm:object-cover sm:w-[3.5rem] md:w-[7rem] h-[7rem] sm:h-[8rem] rounded-xl cursor-pointer md:object-cover' />
                        </div>
                    </div>
                    <button onClick={logout} className={`w-full sm:w-[16%] botom md:w-[25%] lg:w-[20%] xl:w-[17%] sm:absolute bottom-0 px-[1rem] py-[0.5rem] rounded-xl text-white bg-gray-900 border border-gray-700 cursor-pointer ${!token && "hidden"}`} >
                        <div className="flex gap-2 items-center"><CiLogout /><span className='sm:hidden md:block'>Logout</span></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar