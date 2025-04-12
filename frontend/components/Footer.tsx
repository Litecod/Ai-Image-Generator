import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="px-[0.8rem] sm:px-[2rem] md:px-[2rem] lg:px-[5rem] bg-gray-900 py-[3rem]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <h1 className="text-[1.5rem]">IMAGE GEN</h1>
                    <p>Endless Possibilities. Just Imagine.</p>
                </div>
            </div>

            <div className="mt-[5rem] flex justify-between flex-wrap">
                <div className="flex gap-4">
                    <FaFacebook />
                    <FaInstagram />
                    <FaGithub />
                    <FaDiscord />
                </div>
                <div className=" mt-[2rem] md:mt-0">
                    © 2025 <span className="underline">LiteCode</span>. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer