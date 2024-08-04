'use client';
import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface MyContextType {
  user: boolean;
  handleUser: any;
  handleUserLogout: any;
  // userLogout: boolean;
  handleMyCart: any;
  orders: number;
  ordersList: [];
}

interface Des {
  item: [];
}
// Create the context with a default value
const MyContext = createContext<MyContextType | undefined | any>(undefined);

// Define a provider component
export const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(false);

  const [orders, setOrders] = useState<number>(0);
  const [ordersList, setOrdersList] = useState<Des[]>([]);
  console.log(ordersList, 'ordersList');
  console.log(orders, 'Ordersssssssssss');

  const handleUser = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
  };

  const handleMyCart = (item: []) => {
    setOrders((prev) => prev + 1);

    const updatedArray: Des[] = [...ordersList, { item }];
    setOrdersList(updatedArray);
    // setOrdersList(item);
  };

  return (
    <MyContext.Provider
      value={{
        user,
        handleUser,
        handleUserLogout,
        handleMyCart,
        orders,
        ordersList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
