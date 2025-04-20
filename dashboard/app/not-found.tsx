import Link from "next/link"

const notFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white">
            <div className="text-center space-y-8 px-4">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 overflow-hidden opacity-20 -z-20">
                    <div className="grid grid-cols-12 gap-1 w-full h-full">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-6 w-6 bg-purple-500 rounded-sm opacity-0 animate-fade-in"
                                style={{ animationDelay: `${i * 0.02}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-200">
                    Oops! Page Not Found
                </h2>
                <p className="text-gray-400 max-w-md mx-auto">
                    The page you're looking for might have been moved, deleted, or never existed.
                </p>
                <div className="pt-6 rounded-xl">
                    <Link
                        href="/generate"
                        className="relative rounded-xl inline-flex items-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-500 group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    >
                        <span className="relative z-10">Return Home</span>
                        <span className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 rounded-xl"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default notFound