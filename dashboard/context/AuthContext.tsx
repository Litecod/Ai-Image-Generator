"use client"

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  UserCredential, 
  User 
} from 'firebase/auth';
import { auth } from '@/utils/firebase';

type AuthContextType = {
  google: () => Promise<UserCredential>;
  user: User | null;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const google = (): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

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
    setToken
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