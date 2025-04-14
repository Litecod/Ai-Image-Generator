"use client"

import React, { useEffect, useState } from 'react'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { priceOne, priceTwo, priceThree } from '@/data/price';



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
  }, [priceTag])



  return (
    <div className='px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[2rem] bg-gray-100 rounded-xl h-screen sm-h-auto'>
      <div className="">
        <div className="flex p-[0.5rem] bg-[#1d1d1d] rounded-[20rem] gap-[0.3rem] max-w-[18rem] mx-auto justify-between mt-[2rem] duration-3500 scroll-smooth text-[#fff]">
          <p className={`px-[1rem] py-[0.6rem] rounded-[20rem] ${priceTag === "weekly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("weekly")}>Weekly</p>
          <p className={`px-[1rem] py-[0.6rem] rounded-[20rem] ${priceTag === "monthly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("monthly")}>Monthly</p>
          <p className={`px-[1rem] py-[0.6rem] rounded-[20rem] ${priceTag === "yearly" && "bg-[#fff] text-[#000]"}`} onClick={() => setPriceTag("yearly")}>Yearly</p>
        </div>
      </div>
      <div className="mt-[2rem] ">
        <div className=" p-[1rem] flex justify-between gap-[1rem] flex-wrap">
          {
            price.map((item, index) => {
              return (
                <div key={index} className={`flex flex-col gap-5 border-[0.5px] border-[#fff] hover:bg-[#1e1e1e] hover:text-[#fff] p-[1rem] rounded-xl bg-[#fff] text-[#000]  w-full md:max-w-[22rem] duration-700 mx-auto lg:mx-0`}>
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
  )
}

export default Pricing