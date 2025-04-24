"use client"

import { useContexts } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { toast } from "sonner";

export default function PaymentSuccess() {
  const { plan, backendUrl, token, imageGen } = useContexts()
  const success = true;
  const payment = "true";

  const verifyPayment = async () => {
    
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + "/api/user/verifyStripe", { success, payment }, { headers: { token } })

      if (response.data.success) {
        toast("Subscription Successful")
      } else {
        toast("faild")
      }
    } catch (error) {
      console.log(error)
    }
    toast("subscription sucessful")
  }

  useEffect(() => {
    verifyPayment()
  }, [token])
  return (
    <div className="min-h-screen h-screen">
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-xl h-full py-[2rem] pt-[4rem]">
        <div className="max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block">
              <IoCheckmarkDoneCircle className="mx-auto h-20 w-20 text-green-400 animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-green-400/10 animate-ping opacity-0"></div>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 sm:text-5xl">
              Payment Successful!
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-300 max-w-lg mx-auto">
              Thank you for your purchase. Your subscription is now active. Start creating stunning 3D characters!
            </p>
            <div className="mt-10 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-20 -z-10"></div>

              <h2 className="text-xl font-medium text-white">Order Details</h2>
              <div className="mt-5 space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Payment Status:</span>
                  <span className="font-medium text-green-400 flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    Completed
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="text-gray-200">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/generate"
                className="relative px-6 py-3 font-medium text-white rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/20 group"
              >
                <span className="relative z-10">Go to Dashboard</span>
                <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300 rounded-lg"></span>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}