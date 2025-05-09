import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6"
import Image from "next/image"
import logo from "@/public/landingpageImage/logo.jpg"

const Footer = () => {
    return (
        <div className="px-[0.8rem] sm:px-[2rem] md:px-[2rem] lg:px-[5rem] bg-gradient-to-br from-gray-950 via-gray-900 to-black py-[3rem]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <div className="flex gap-2 items-center">
                        <Image src={logo} alt="" className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] rounded-full" />
                        <p className="text-[1.3rem] sm:text-[1.7rem] logo font-medium">Cartoonify 3D</p>
                    </div>
                    <p className="mt-[1rem]">Endless Possibilities. Bring your 3D ideal to live</p>
                </div>
            </div>

            <div className="mt-[5rem] flex flex-col sm:flex-row justify-between flex-wrap">
                <div className="flex gap-4 opacity-0">
                    <FaFacebook />
                    <FaInstagram />
                    <FaGithub />
                    <FaDiscord />
                </div>
                <div className=" mt-[2rem] md:mt-0">
                    © 2025 <span className="underline text-[#8a40fc]">Cartoonify 3D</span>. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer