import React from "react";
import { BsGoogle } from "react-icons/bs";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "@/utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";


const OAuth = () => {

    const auth = getAuth(app);
    const navigate = useRouter()

    const handleGoogleClick = async () => {
        
    }
    return (
        <div>
            <button
                onClick={handleGoogleClick}
                className="group cursor-pointer relative w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-700 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                aria-label="Continue with Google"
            >
                <FcGoogle className="w-6 h-6" />
                <span className="text-white font-medium">
                    Continue with Google
                </span>
                <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>
    );
};

export default OAuth;
