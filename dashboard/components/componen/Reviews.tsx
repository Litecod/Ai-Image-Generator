import { reviewss } from '@/data/reviews'
import { reviewsv } from '@/data/review'
import Image from 'next/image'
import React from 'react'
import { BiSolidHappyHeartEyes } from 'react-icons/bi'
import star from "@/public/landingpageImage/star.png"
import Header from './Header'

const Reviews = () => {
    return (
        <div className='px-[0.8rem] md:px-[2rem] lg:px-[5rem] pt-[3rem] pb-[3rem] bg-[url(../public/landingpageImage/download.png)] gray-200'>
            <div className="">
                <Header icons={BiSolidHappyHeartEyes } clas='text-yellow-500' details='What Our Clients Says'/>
                <h2 className='text-[2rem] md:text-[3rem] text-center lg:max-w-[35rem] mx-auto head font-medium'>Join 1M+ users creating 3D animate using Cartoonify</h2>
                <div className="mt-[2rem] hid justify-between gap-[3rem] flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3">
                    {reviewsv.map((item, index) => {
                        return (
                            <div key={index} className=" w-full md:max-w-[22rem] lg:max-w-[24rem] 2xl:max-w-[23.5rem] md:mx-auto lg:mx-0 p-[1rem] rounded-xl bg-[#000] border border-gray-900">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Image src={item.image} alt='Image' className='w-[3rem] h-[3rem] object-cover rounded-full' />
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
                <div className="mt-[2rem] hidd justify-between gap-[3rem] flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3">
                    {reviewss.map((item, index) => {
                        return (
                            <div key={index} className=" w-full md:max-w-[22rem] lg:max-w-[24rem] 2xl:max-w-[23.5rem] md:mx-auto lg:mx-0 p-[1rem] rounded-xl bg-[#000] border border-gray-900">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Image src={item.image} alt='Image' className='w-[3rem] h-[3rem] object-cover rounded-full' />
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