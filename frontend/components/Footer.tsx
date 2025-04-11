import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="px-[0.8rem] sm:px-[2rem] md:px-[2rem] lg:px-[5rem] bg-gray-900 py-[3rem]">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <h1 className="text-[1.5rem]">IMAGE GEN</h1>
                    <p>Endless Possibilities. Just Imagine.</p>
                </div>
                <div className="flex  flex-col md:flex-row gap-[2rem] ">
                    <div className="flex flex-col sm:flex-row justify-between gap-[2rem]">
                        <div className="flex flex-col gap-5 md:hidden lg:flex mt-[3rem] md:mt-0">
                            <p className="font-semibold ">Features</p>
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-300 text-[0.9rem]">AI Image Generator</p>
                                <p className="text-gray-300 text-[0.9rem]">AI Image Generator</p>
                                <p className="text-gray-300 text-[0.9rem]">AI Image Generator</p>
                                <p className="text-gray-300 text-[0.9rem]">AI Image Generator</p>
                                <p className="text-gray-300 text-[0.9rem]">AI Image Generator</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-[1rem] md:mt-0">
                            <p className="font-semibold">Tools</p>
                            <div className="flex flex-col gap-4">

                                <p className="text-gray-300 text-[0.9rem]">Text to Image</p>
                                <p className="text-gray-300 text-[0.9rem]">Image cartoon Character</p>
                                <p className="text-gray-300 text-[0.9rem]">AI Image </p>
                                <p className="text-gray-300 text-[0.9rem]">Image Remixe</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[2rem] justify-between">
                        <div className="flex flex-col gap-5 mt-[1rem] md:mt-0">
                            <p className="font-semibold">Company</p>
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-300 text-[0.9rem]">Api</p>
                                <p className="text-gray-300 text-[0.9rem]">Affiliate</p>
                                <p className="text-gray-300 text-[0.9rem]">Contact Us </p>
                                <p className="text-gray-300 text-[0.9rem]">Carrer</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-[1rem] md:mt-0">
                            <p className="font-semibold">Legal</p>
                            <div className="flex flex-col gap-4">

                                <p className="text-gray-300 text-[0.9rem]">Private Policy</p>
                                <p className="text-gray-300 text-[0.9rem]">Terms and Commision</p>
                            </div>
                        </div>
                    </div>
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