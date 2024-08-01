'use client';
import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface MyContextType {
  user: boolean;
  handleUser: any;
  handleUserLogout: any;
  // userLogout: boolean;
  handleMyCart: any;
  orders: number;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined | any>(undefined);

// Define a provider component
export const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(false);
  // const [userLogout, setUserLogout] = useState(true);
  const [orders, setOrders] = useState(0);
  // console.log('oreders', orders);

  const handleUser = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
  };

  const handleMyCart = () => {
    setOrders((prev) => prev + 1);
  };

  return (
    <MyContext.Provider
      value={{ user, handleUser, handleUserLogout, handleMyCart, orders }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
