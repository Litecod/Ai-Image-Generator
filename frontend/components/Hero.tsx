import Scroller from "./Scroller"


const Hero = () => {
    return (
        <div className="px-[0.8rem] md:px-[2rem] lg:px-[3rem] relative">
            <div className=" mt-[2rem]">
                <Scroller />
            </div>
            <div className="absolute w-full px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[30%] md:py-[10%] text-center top-0 left-0 text-[#fff] bg-[#000000a6] h-full">
                <div className=" w-full mx-auto max-w-[900px] ">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#00000038] text-[2rem] sm:text-[3rem] md:text-[4rem] font-semibold">Imagine AI Art Generator</h1>
                    <p className="mt-[1.5rem] md:mt-[0]">Create AI Art and turn your imaginations into reality with Imagine&#39;s AI Art Generator and produce stunning visuals to cover up your artistic thoughts.</p>
                    <button className="mx-auto w-[10rem] bg-gradient-to-r from-[#4802b1] to-[#7800f0] rounded-xl py-[0.5rem] mt-[1rem]">Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Hero;
