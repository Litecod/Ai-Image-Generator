"use client"

import React, { useEffect, useState } from 'react'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { priceOne, priceTwo, priceThree } from '@/data/price';
import { MdOutlinePriceChange } from 'react-icons/md';



const Pricing = () => {
    const [priceTag, setPriceTag] = useState("weekly");
    const [price, setPrice] = useState(priceOne)

    useEffect(() => {
        if (priceTag === "yearly") {
            setPrice(priceThree)
        } else if (priceTag === "monthly") {
            setPrice(priceTwo)
        } else {
            setPrice(priceOne)
        }
    },[priceTag])



    return (
        <div className='px-[0.8rem] md:px-[2rem] lg:px-[3rem] mt-[5rem] mb-[2rem]'>
            <div className="">
                <h1 className='text-center rounded-xl border border-[#ffffff3e] px-[1rem] py-[0.3rem] mx-auto max-w-[9rem] flex items-center justify-between'><MdOutlinePriceChange /> Our Pricing</h1>
                <h2 className='text-[2rem] md:text-[3rem] text-center lg:max-w-[25rem] mx-auto'>Get Started with ImagineArt</h2>
                <div className="mt-[4rem]">
                    <div className="flex p-[0.5rem] bg-[#1d1d1d] rounded-xl gap-[0.3rem] max-w-[18rem] mx-auto justify-between mt-[2rem] duration-3500 scroll-smooth">
                        <p className={`px-[1rem] py-[0.6rem] rounded-xl ${priceTag === "weekly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("weekly")}>Weekly</p>
                        <p className={`px-[1rem] py-[0.6rem] rounded-xl ${priceTag === "monthly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("monthly")}>Monthly</p>
                        <p className={`px-[1rem] py-[0.6rem] rounded-xl ${priceTag === "yearly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("yearly")}>Yearly</p>
                    </div>
                </div>
                <div className="mt-[2rem] flex ">
                    <div className="shadow-md  ">
                        <div className=" relative  p-[1rem] flex justify-between gap-[1rem] flex-wrap">
                            {
                                price.map((item, index) => {
                                    return (
                                        <div key={index} className={`flex flex-col gap-5 border-[0.5px] border-[#505050] bg-[#1e1e1e] text-[#fff] p-[1rem] rounded-xl hover:bg-[#fff] hover:text-[#000]  w-full md:max-w-[25rem] xl:max-w-[20.5rem] duration-700 mx-auto lg:mx-0`}>
                                            <h2>{item.name}</h2>
                                            <p>{item.description}</p>
                                            <div className="flex items-center">
                                                <h3 className='text-[3rem] font-medium'>{item.price}$ </h3>
                                                <div className="flex flex-col">
                                                    <p>/month </p>
                                                    <p>Bill {item.name}</p>
                                                </div>
                                            </div>
                                            <p><span>{item.credit}k</span> credit/ {item.name}</p>
                                            <hr />
                                            <button className='w-full py-[0.8rem] border-[2px] border-[#0000004a] bg-gray-800 text-[#fff] rounded-xl'>Get Started</button>
                                            <p>What&#39;s Included</p>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>Up to ~{item.image} Image Generations/year</span>
                                                </div>
                                                {/* <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>Up to ~900 Video Generations/year</span>
                                                </div> */}
                                                <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>General Commercial Terms</span>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>Image Generations Visibility: Public</span>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>{item.corcurrency} concurrent Generations</span>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>{item.piority} concurrent Generations</span>
                                                </div>
                                                {item.style !== "" && <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>{item.style}</span>
                                                </div>}
                                                {item.higher !== "" && <div className="flex gap-2 items-center">
                                                    <IoCheckmarkDoneOutline className=" text-[0.8rem]" />
                                                    <span>{item.higher}</span>
                                                </div>}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing