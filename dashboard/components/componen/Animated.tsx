import React from 'react'
import Image from 'next/image'
import person from "@/public/img.jpg"
import res from "@/public/IMG_1042.jpg"
import art from "@/public/IMG_1043.jpg"
import hulk from "@/public/IMG_1165.png"
import carD from "@/public/IMG_1046.jpg"
import man from "@/public/IMG_1168.png"
import Header from './Header'
import { MdOutlineExplore } from 'react-icons/md'

const Animated = () => {
  const feature = [
    {id:1, image: person, head: "Image To 3D Cartoon", des: "Enrich your image by turning it to 3D image, conveying your audience and relieving you from describing the image"},
    {id:2, image: res, head: "AI Art Generator", des: "Generate art AI tool, making your conceptual visions come to visual life."},
    {id:3, image: art, head: "Turn Sketch To Art With 3D Cartoonify", des: "Transform your draft into amazing artwork, unlocking a world of inspiration and possibilities."},
    {id:4, image: hulk, head: "Turn Image To 3D Hulk ", des: "Let 3D cartoonify automatically generate image to superhero, relieving you from describing the images."},
    {id:5, image: man, head: "Young To Old", des: "Upgrade the image sharpness and improve visuals with high resolution clarity from Young to Old"},
    {id:6, image: carD, head: "Environment To 3D Image ", des: "Utilize AI-powered selection tools to effortlessly turn your surounding to 3D image"},
    
  ]
  return (
    <div className='relative px-[0.8rem] md:px-[2rem] lg:px-[3rem] pt-[5rem] mb-[2rem] bg-[url(../public/landingpageImage/download.png)] text-[#fff]'>
      <div className="z-10 text-center">
        <Header icons={MdOutlineExplore} details={"Our Cartoons"} clas='' />
        <h2 className='text-[2rem] md:text-[3rem] text-center lg:max-w-[39rem] mx-auto head font-medium'>Explore 3D Cartoon Images</h2>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-x-auto overflow-y-hidden z-30 con">
        <div className="inline-flex  gap-[2rem] ml-[7.5%] mr-[7.5%] apple mt-[4rem] apple">
          {feature.map((item, index) => {
            return (
              <div key={index} className="w-[20rem] sm:w-[25rem]">
                <Image src={item.image} alt='' className='w-full h-[20rem] sm:h-[25rem] rounded-3xl object-cover hover:scale-105 cursor-pointer transition-transform duration-300'/>
                <div className="">
                  <h1 className='font-semibold text-[1.5rem] md:text-[2.3rem] mt-[2rem] md:leading-10'>{item.head}</h1>
                  <p className='mt-[1rem] md:text-[1.3rem] md:leading-6 text-[#cdcdcd]'>{item.des}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Animated