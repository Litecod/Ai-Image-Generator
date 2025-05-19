"use client"

import Image from "next/image";
import CountUp from "react-countup";
import { FaDiscord, FaPeopleGroup } from "react-icons/fa6";
import { RiMobileDownloadLine } from "react-icons/ri";
import Right from "@/public/landingpageImage/right.svg"

const CountUps = () => {
    return (
        <div className="px-[0.8rem] md:px-[2rem] lg:px-[rem] mt-[5rem]">
            <div className="text-[#ffffff] flex flex-col md:flex-row mx-auto items-center gap-[3rem] w-full  md:gap-[4rem] md:max-w-[42rem] text-[1rem] sm:px-[2rem]  md:px-0 py-[3rem]">
                <div className="flex max-md:flex-wrap gap-[2rem] max-md:max-w-[22rem] mx-auto max-md:w-full md:gap-[4rem] justify-center">
                    <div className=" flex items-center gap-1">
                        <Image src={Right} alt="image" className="w-[2rem] rotate-y-160" />
                        <div className="items-center text-center">
                            <FaPeopleGroup className=" mx-auto" />
                            <p className="">
                                <span className="text-[#fff]">
                                    <span>
                                        <CountUp start={2} end={30} duration={2} />
                                    </span>
                                    + million
                                </span>
                            </p>
                            <p className="text-center">Active Users</p>
                        </div>
                        <Image src={Right} alt="image" className="w-[2rem]" />
                    </div>
                    <div className=" flex items-center gap-1">
                        <Image src={Right} alt="image" className="w-[2rem] rotate-y-160" />
                        <div className=" items-center text-center ">
                            <RiMobileDownloadLine className=" mx-auto" />
                            <p className=" ">
                                <span className="text-[#fff]">
                                    <span>
                                        <CountUp start={20} end={80} duration={2} />
                                    </span>
                                    + million
                                </span>
                            </p>
                            <p className="text-center">Downloads</p>
                        </div>
                        <Image src={Right} alt="image" className="w-[2rem]" />
                    </div>
                </div>
                <div className=" flex items-center gap-1">
                    <Image src={Right} alt="image" className="w-[2rem] rotate-y-160" />
                    <div className=" items-center text-center ">
                        <FaDiscord className=" mx-auto" />
                        <p className=" ">
                            <span className="text-[#fff]">
                                <span>
                                    <CountUp start={2} end={120} duration={2} />
                                </span>
                                + thousand
                            </span>
                        </p>
                        <p className="text-center">Discord Members</p>
                    </div>
                    <Image src={Right} alt="image" className="w-[2rem]" />
                </div>
            </div>
        </div>
    )
}

export default CountUps;

