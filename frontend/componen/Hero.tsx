import { HiOutlineSparkles } from "react-icons/hi";
import Scroller from "./Scroller"
import Link from "next/link";


const Hero = () => {
    return (
        <div className="px-[0.8rem] md:px-[2rem] lg:px-[3rem] relative">
            <div className=" mt-[2rem]">
                <Scroller />
            </div>
            <div className="absolute w-full px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[20%] md:py-[10%] text-center top-0 left-0 text-[#fff] bg-[#000000a6] h-full">
                <div className=" w-full mx-auto max-w-[900px] ">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#00000038] text-[3rem] sm:text-[3rem] md:text-[4rem] font-semibold">3D Cartoon Generator</h1>
                    <p className="mt-[1.5rem] md:mt-[0]">Ever wondered what you, your pet, or even your breakfast would look like as a cartoon? Now you can find out! Upload any photo and let our cartoonizer work its magic. It&#39;s time to add some fun and animation to your images!</p>
                    <Link href="https://ai-image-generator-dasboard.vercel.app" className="cursor-pointer">
                        <div className="bg-gradient-to-r from-[#4802b1] to-[#7800f0] max-w-[16rem] md:max-w-[17rem] mx-auto rounded-[20rem] mt-[2rem] border-[4px] border-[#00000034]">
                            <button className="border-animate w-full rounded-[20rem] ">
                                <div className="py-[0.3rem] flex gap-2 items-center px-[2rem] rounded-[20rem] text-[0.9rem] md:text-[1rem]">
                                    <HiOutlineSparkles className="md:text-[1.7rem] star" /> Get Started
                                </div>
                            </button>
                        </div>
                    </Link>


                </div>
            </div>

        </div>
    )
}

export default Hero;
