"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import LoginPage from './Login';
import { useContexts } from '@/context/AuthContext';

const NavSide: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const { token } = useContexts();

  const isAuthenticated = token !== "";

  return (
    <div>
      {!isAuthenticated ? (
        <div >
          <LoginPage />
          <Navbar setClick={setClick} />
          <Sidebar click={click} />
        </div>
      ) : (
        <div>
          <Navbar setClick={setClick} />
          <Sidebar click={click} />
        </div>
      )}
    </div>
  );
};

export default NavSide;