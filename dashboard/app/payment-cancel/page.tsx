'use client';
import { BsQuestionCircle, BsXCircle } from 'react-icons/bs';
import Link from 'next/link';

export default function PaymentCanceled() {
  return (
    <div className="min-h-screen h-screen">
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black py-[2rem] h-full">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block">
            <BsXCircle className="mx-auto h-20 w-20 text-red-500/90 drop-shadow-lg" />
            <div className="absolute inset-0 rounded-full bg-red-500/10 blur-md -z-10 animate-pulse"></div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-300">
            Payment Canceled
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-300 max-w-lg mx-auto">
            Your payment was not completed. No charges have been made to your account.
          </p>
          <div className="mt-10 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">
            <h2 className="text-lg font-medium text-white flex items-center justify-center gap-2">
              <BsQuestionCircle className="text-red-400" />
              Need Help?
            </h2>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>If you encountered any issues, please try again.</p>
              <p className="text-sm text-gray-400">Contact support if the problem persists.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/pricing"
              className="relative overflow-hidden rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 hover:shadow-red-500/20 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Return to Select Price
                <span className="transition-all duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-0 bg-white/10 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}