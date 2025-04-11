import { reviewss } from '@/data/reviews'
import Image from 'next/image'
import React from 'react'
import { BiSolidHappyHeartEyes } from 'react-icons/bi'
import star from "@/public/star.png"

const Reviews = () => {
    return (
        <div className='px-[0.8rem] md:px-[2rem] lg:px-[5rem] pt-[3rem] pb-[3rem] bg-[url(@/public/download.png)] gray-200'>
            <div className="">
                <h1 className='text-center rounded-xl border border-[#ffffff3e] px-[1rem] py-[0.3rem] mx-auto max-w-[14.5rem] flex items-center justify-between'><BiSolidHappyHeartEyes className='text-yellow-400' /> What Our Clients Says</h1>
                <h2 className='text-[2rem] md:text-[3rem] text-center lg:max-w-[35rem] mx-auto'>Join 1M+ users creating art using Imagine</h2>
                <div className="mt-[2rem] flex justify-between gap-[3rem] flex-wrap">
                    {reviewss.map((item, index) => {
                        return (
                            <div key={index} className=" w-full md:max-w-[22rem] 2xl:max-w-[20.5rem] md:mx-auto lg:mx-0 p-[1rem] rounded-xl bg-[#000] shadow-sm shadow-[#ffffff2d]">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Image src={item.image} alt='Image' />
                                        <div className="">
                                            <p className='font-semibold'>{item.name}</p>
                                            <p className='font-meduim'>{item.job}</p>
                                        </div>
                                    </div>
                                    <Image src={star} alt="image" className='w-[5rem]'/>
                                </div>
                                <div className="mt-3">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reviews