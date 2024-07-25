'use client';
import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface MyContextType {
  user: boolean;
  handleUser: any;
  handleUserLogout: any;
  userLogout: boolean;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined | any>(undefined);

// Define a provider component
export const MyProvider: FC<{ children: ReactNode; key: string }> = ({
  children,
  key,
}) => {
  const [user, setUser] = useState(false);
  const [userLogout, setUserLogout] = useState(true);

  const handleUser = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
  };

  return (
    <MyContext.Provider
      value={{ user, handleUser, handleUserLogout, userLogout }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
