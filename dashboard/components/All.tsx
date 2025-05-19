"use client"

import AuthContextProvider from '@/context/AuthContext'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'sonner'
import NavSide from './NavSide'
import { usePathname } from 'next/navigation'

const All = ({ children }: any) => {
    const pathname = usePathname()
    return (
        <div className="">
            <div className="relative z-20  max-w-[1550px] mx-auto">
                <Toaster />
                <ToastContainer />
                {/* flex w-full gap-[1rem] pt-[3.2rem] md:pt-[4rem] */}
                <AuthContextProvider>
                    <div className="">
                        <NavSide />
                        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[76%] xl:w-[80%] sm:float-right rounded-xl sm:overflow-y-scroll con">
                            {children}
                        </div>
                    </div>

                </AuthContextProvider>
            </div>

            <div className={`fixed w-full h-screen z-0 top-0 left-0 ${pathname.includes("generate") ? "backgrounds" : "bg-[#000]"}`}>
                <div className={` w-full h-full  top-0 left-0 bg-gradient-to-br from-[#000000ca] via-[#090909c4] to-[#000000ca]`}></div>
            </div>


        </div>
    )
}

export default All