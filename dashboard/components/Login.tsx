
"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "@/public/logo.jpg";
import { useContexts } from "@/context/AuthContext";
import { toast } from "sonner";
import img from "@/public/000.jpg"

export default function LoginPage() {
  const { google } = useContexts();

  const googleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await google();
      toast.success("login Successful")
    } catch (error) {
      toast.error("Couldn't login",);
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="absolute w-full top-0 left-0 min-h-screen flex items-center justify-center bg-[#ffffff56] bg-cover bg-center p-4 z-30">

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-4xl bg-gray-900/80 border-[10px] border-gray-900/80 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col p-6 lg:p-8 gap-[1rem] sm:gap-[3rem] bg-gradient-to-b from-gray-900/80 to-purple-800/80 rounded-xl">
            <div className="flex gap-2 items-center">
              <Image
                src={logo}
                alt="Cartoonify 3D Logo"
                className="w-[2rem] sm:w-[2.5rem] h-[2rem] sm:h-[2.5rem] rounded-full"
              />
              <p className="text-[1.3rem] sm:text-[1.4rem] logo font-medium">Cartoonify 3D</p>
            </div>

            <Image className="w-full max-w-[10rem] sm:max-w-[12rem] mx-auto rounded-xl" src={img} alt="Image"></Image>

            <div className="flex flex-col gap-[0.5rem] sm:gap-[1.5rem]">
              <button className="rounded-xl py-[0.3rem] px-[0.8rem] bg-[#fff] text-gray-500 max-w-[8rem]">Image Studio</button>
              <p>Transform your photos into stunning 3D cartoons with our AI-powered platform.</p>
            </div>
          </div>


          {/* Right side - Login Form */}
          <div className="flex flex-col items-center justify-center p-6 lg:p-8 bg-gray-900/70">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Welcome to Cartoonify 3D</h2>
                <p className="mt-2 text-gray-400">
                  Continue with your Google account
                </p>
              </div>

              <button
                onClick={googleClick}
                className="group cursor-pointer relative w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                aria-label="Continue with Google"
              >
                <FcGoogle className="w-6 h-6" />
                <span className="text-white font-medium">
                  Continue with Google
                </span>
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900/70 text-gray-400">
                    Secure authentication
                  </span>
                </div>
              </div>
              <div className="items-center text-center flex flex-col gap-[0.5rem]">
                <p>By proceeding, you agree to our <span>Terms of use</span></p>
                <p>Click on continue with Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}