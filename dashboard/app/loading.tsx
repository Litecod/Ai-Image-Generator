"use client";

import React from 'react';

const Loading = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="text-center space-y-8">
                <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-ping-slow"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-purple-300 opacity-70 animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-purple-400 opacity-50 animate-spin-slow-reverse"></div>
                    <div className="absolute inset-6 rounded-full bg-purple-600 animate-pulse"></div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-purple-800 animate-pulse">Cartoonify 3D</h2>
                    <p className="text-purple-600 animate-bounce">Welcome to Cartoonify 3D</p>
                </div>

                <div className="w-64 h-2 bg-purple-100 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-progress"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;