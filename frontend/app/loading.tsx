"use client"

import React from 'react'

const loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
            <div className="text-center space-y-8">
                <div className="relative mx-auto w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-300/30 animate-ping-slow"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-purple-300/50 animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-purple-400/60 animate-spin-slow-reverse"></div>
                    <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400 animate-pulse">
                        Cartoonify 3D
                    </h2>
                    <p className="text-purple-300/80 animate-bounce">Welcome to Cartoonify 3D</p>
                </div>
                <div className="w-64 h-1.5 bg-purple-900/30 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-progress"></div>
                </div>
            </div>
        </div>
    )
}

export default loading