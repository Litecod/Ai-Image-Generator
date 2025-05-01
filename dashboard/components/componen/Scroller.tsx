"use client"

import { imageScroll, imageScrollTwo, imageScrollThree } from "@/public/landingpageImage/image"
import Image from "next/image"


const Scroller = () => {

    return (
        <div>
            <div className="overflow-x-hidden scroll ">
                <div className="gap-2 inline-flex animate-infinite">
                    {[...imageScroll, ...imageScroll].map((image, index) => {

                        return (
                            <div key={index} className="relative w-[18rem] h-[11rem] im">
                                <Image src={image.img} alt="image" className="w-full h-full object-cover rounded-xl" />
                            </div>

                        )
                    })}
                </div>
                <div className="gap-2 inline-flex animate-infinit mt-[0.5rem]">
                    {[...imageScrollTwo, ...imageScrollTwo].map((image, index) => {

                        return (
                            <div key={index} className="relative w-[18rem] h-[11rem] im">
                                <Image src={image.img} alt="image" className="w-full h-full object-cover rounded-xl" />
                            </div>

                        )
                    })}
                </div>
                <div className="gap-2 inline-flex animate-infinite mt-[0.5rem]">
                    {[...imageScrollThree, ...imageScrollThree].map((image, index) => {

                        return (
                            <div key={index} className="relative w-[18rem] h-[11rem] im">
                                <Image src={image.img} alt="image" className="w-full h-full object-cover rounded-xl" />
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Scroller