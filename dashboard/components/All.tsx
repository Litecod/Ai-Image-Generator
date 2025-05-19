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
        <div className="ele">
            <div className="ele z-20  max-w-[1550px] mx-auto">
                <Toaster />
                <ToastContainer />
                {/* flex w-full gap-[1rem] pt-[3.2rem] md:pt-[4rem] */}
                <AuthContextProvider>
                    <div className="ele">
                        <NavSide />
                        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[76%] xl:w-[80%] sm:float-right rounded-xl sm:overflow-y-scroll con">
                            {children}
                        </div>
                    </div>

                </AuthContextProvider>
            </div>

            <div className={`absoulute w-full h-screen z-0 top-0 left-0 ${pathname.includes("generate") ? "bg-[url(@/public/backgrounds.png)]" : "bg-[#000]"}`}>
                <div className={`absoulute w-full h-screen z-10 top-0 left-0 bg-[#000000ac]`}></div>
            </div>


        </div>
    )
}

export default All