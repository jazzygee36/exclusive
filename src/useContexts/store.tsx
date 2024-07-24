'use client';
import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface MyContextType {
  user: boolean;
  handleUser: any;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined | any>(undefined);

// Define a provider component
export const MyProvider: FC<{ children: ReactNode; key: string }> = ({
  children,
  key,
}) => {
  const [user, setUser] = useState(false);

  const handleUser = () => {
    setUser(true);
  };
  // useEffect(() => {
  //   handleUser();
  // }, [handleUser]);
  return (
    <MyContext.Provider value={{ user, handleUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
