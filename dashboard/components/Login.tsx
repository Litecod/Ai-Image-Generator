"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import logo from "@/public/logo.jpg";
import { useContexts } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { google, user, token, setToken } = useContexts();

  const googleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await google();
      if (user?.uid) {
        setToken(user.uid);
        localStorage.setItem("token", user.uid);
      }
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="absolute w-full top-0 left-0 min-h-screen flex items-center justify-center bg-[#ffffff56] bg-cover bg-center p-4 z-30">
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl bg-gray-900/80 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Branding */}
          <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-purple-900/50 to-blue-900/30">
            <div className="text-center space-y-6">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
                className="mx-auto rounded-full"
                priority
              />
              <h1 className="text-3xl font-bold text-white">Welcome to Cartoonify 3D</h1>
              <p className="text-gray-300 text-lg max-w-md">
                Transform your photos into stunning 3D cartoons with our AI-powered platform.
              </p>
              <div className="pt-6">
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-gray-900/70">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Sign In</h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}