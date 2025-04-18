'use client';
import { BsXCircle } from 'react-icons/bs';
import Link from 'next/link';

export default function PaymentCanceled() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BsXCircle className="mx-auto h-16 w-16 text-red-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Payment Canceled
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Your payment was not completed. No charges have been made to your account.
          </p>
          <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <h2 className="text-lg font-medium text-gray-900">Need Help?</h2>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>If you encountered any issues, please try again.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/pricing" className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              Return to Select Price <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}