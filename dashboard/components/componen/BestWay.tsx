import React from 'react'
import Image from 'next/image'
import boy from "@/public/IMG_1166.png"
import { GiDiamondTrophy } from "react-icons/gi";
import Header from './Header'

const BestWay = () => {
    return (
        <div className='relative px-[0.8rem] md:px-[2rem] lg:px-[3rem] pt-[5rem] mb-[2rem] bg-[url(../public/landingpageImage/download.png)] text-[#fff] md:overflow-x-hidden lg:overflow-visible'>
            <div className="max-w-[84rem] mx-auto max-sm:overflow-hidden">
                <div className="z-10 text-center">
                    <Header icons={GiDiamondTrophy} details={"How to use"} clas='' />
                    <h2 className='text-[2rem] md:text-[3rem] text-center lg:max-w-[39rem] mx-auto head font-medium'>Easily Turn Your Images into 3D Cartoon</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-[3rem] md:mt-[8rem] items-center">
                    <div className=" md:w-[45%]">
                        <h1 className='font-semibold text-[1.5rem] md:text-[2.3rem] md:mt-[2rem] md:leading-10 max-md:hidden'>Turning your image into a 3D cartoon</h1>
                        <p className='md:text-[1.2rem] text-[#cdcdcd] mt-[1rem] max-md:text-center'>Click on the "Upload" button and select the photo you want to cartoonize from your device. We support popular image formats like JPEG and PNG. Explore our range of unique cartoon filters and styles. Preview how each style looks on your image and select the one that best suits your vision. Once you're happy with the result, simply click the "Download" button to save your newly created cartoon image to your device.It's that easy! No complicated software or artistic skills required</p>
                    </div>
                    <div className="relative md:w-[55%] flex gap-[1rem] max-md:mt-[5rem]">
                        <Image src={boy} alt='Image' className='max-sm:w-[10rem] max-md:w-[22rem] md:w-[10rem] lg:w-[22rem] h-[20rem] sm:h-[25rem] object-cover rounded-2xl ' />
                        <Image src={boy} alt='Image' className='max-sm:float-right w-[17rem] sm:w-[22rem] h-[20rem] sm:h-[25rem] object-cover rounded-2xl ' />
                        <Image src={boy} alt='Image' className=' absolute z-10 w-[17rem] sm:w-[23rem] xl:w-[25rem] h-[24rem] sm:h-[29rem] object-cover rounded-2xl top-[-2rem] sm:left-[22%] md:left-0 lg:left-[16%] xl:left-[22%]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestWay