"use client"

import CountUp from "react-countup";
import { FaDiscord, FaPeopleGroup, FaPhone } from "react-icons/fa6";
import { RiMobileDownloadLine } from "react-icons/ri";

const CountUps = () => {
    return (
        <div className="px-[0.8rem] md:px-[2rem] lg:px-[rem] mt-[5rem]">
            <div className="text-[#ffffff] flex mx-auto items-center justify-between gap-[2rem] flex-wrap md:gap-0 md:max-w-[40rem] text-[1rem] px-[2rem]  md:px-0 py-[3rem]">
                <div className=" items-center text-center ">
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
            </div>
        </div>
    )
}

export default CountUps;

