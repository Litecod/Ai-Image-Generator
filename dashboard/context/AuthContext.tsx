"use client";

import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  UserCredential,
  User
} from 'firebase/auth';
import { auth } from '@/utils/firebase';
import axios from 'axios';

type AuthContextType = {
  google: () => Promise<void>;
  fetchUser: () => Promise<void>;
  user: User | null;
  token: string;
  setToken: React.Dispatch<SetStateAction<string>> | React.Dispatch<SetStateAction<string>>;
  backendUrl: string,
  imageGen: number,
  userId: string,
  setImageGen: any,
  uusername: string,
  userprice: number,
  userperiod: string,
  usercredit: number,
  userStartDate: string,
  status: string,
  isTrial: boolean,
  endDate: string,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [imageGen, setImageGen] = useState<number>(0);
  const [userId, setUserId] = useState("")
  const [uusername, setUusername] = useState("")
  const [userprice, setUserprice] = useState(0)
  const [userperiod, setUserperiod] = useState("")
  const [usercredit, setUsercredit] = useState(0)
  const [userStartDate, setUserStartDate] = useState("")
  const [status, setStatus] = useState("")
  const [isTrial, setisTrial] = useState(true)
  const [endDate, setEndDate] = useState("")
  const backendUrl = "https://ai-image-generator-backend-two.vercel.app"


  useEffect(() => {
    const handleRefresh = () => {
      console.log('App refreshed or loaded');
      fetchUser();
    };
    handleRefresh();
    const beforeUnloadHandler = () => {
      console.log('User is refreshing the page');
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [])


  const fetchUser = async () => {

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${backendUrl}/api/user/getUsers`, {},
        {
          headers: { token },
        }
      );
      if (response.data.success) {
        setImageGen(response.data.userInfo.subscription.image)
        setUserId(response.data.userInfo._id)
        setUusername(response.data.userInfo.subscription.plan)
        setUserprice(response.data.userInfo.subscription.price)
        setUserperiod(response.data.userInfo.subscription.period)
        setUsercredit(response.data.userInfo.subscription.credits)
        setUserStartDate(response.data.userInfo.subscription.startDate)
        setStatus(response.data.userInfo.subscription.status)
        setisTrial(response.data.userInfo.subscription.isTrial)
        setEndDate(response.data.userInfo.subscription.endDate)
      }
      return response.data;
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };


  const google = async (): Promise<void> => {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, googleAuthProvider);
      if (!resultsFromGoogle.user) {
        throw new Error("No user returned from Google sign-in");
      }

      const { data } = await axios.post(backendUrl + "/api/user/google", {
        username: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Google sign-in successful:", data);
      console.log(resultsFromGoogle.user)

      console.log(data.token)
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        fetchUser()
      } else {
        localStorage.removeItem("token");
        setToken("");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!token && storedToken !== null) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    google,
    user,
    token,
    setToken,
    backendUrl,
    fetchUser,
    imageGen,
    userId,
    setImageGen,
    uusername,
    userprice,
    userperiod,
    usercredit,
    userStartDate,
    status,
    isTrial,
    endDate
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useContexts = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useContexts must be used within an AuthContextProvider');
  }
  return context;
};