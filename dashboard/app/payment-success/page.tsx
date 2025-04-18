'use client';
import { IoCheckboxOutline } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    // You can verify the payment with your backend here
    useEffect(() => {
        if (sessionId) {
            // Call your API to verify payment
            console.log('Verifying payment for session:', sessionId);
        }
    }, [sessionId]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-2xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <IoCheckboxOutline className="mx-auto h-16 w-16 text-green-600" />
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Payment Successful!
                    </h1>
                    <p className="mt-6 text-lg leading-7 text-gray-600">
                        Thank you for your purchase. Your subscription has been activated Create Beautiful 3D Character,
                    </p>
                    <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-green-100">
                        <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <p>Payment Status: <span className="font-medium text-green-600">Completed</span></p>
                            <p>Transaction ID: <span className="font-mono">{sessionId}</span></p>
                            <p>Date: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/dashboard"
                            className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Go to Dashboard
                        </Link>
                        <Link href="/subscriptions" className="text-sm font-semibold text-gray-900">
                            View Subscription <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}