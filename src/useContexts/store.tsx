'use client';
import axios from 'axios';
import {
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

interface MyContextType {
  user: boolean;
  handleUser: any;
  handleUserLogout: any;
  // userLogout: boolean;
  handleMyCart: any;
  orders: number;
  ordersList: [];
  loginUser: boolean;
  profile: string;
  // SubTotal: number;
  // added: boolean;
}

interface Des {
  item: [];
  price?: any;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined | any>(undefined);

// Define a provider component
export const MyProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(false);

  const [orders, setOrders] = useState<number>(0);
  const [ordersList, setOrdersList] = useState<Des[]>([]);
  const [loginUser, setLoginUser] = useState(false);
  const [profile, setProfile] = useState('');

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        return;
      }
      const res = await axios.get(
        `https://exclusiveshopping.vercel.app/api/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile(res.data.username);
    } catch (error) {
      return error;
    }
  };

  const handleUser = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
  };
  const handleLoginUsers = () => {
    setLoginUser(!loginUser);
  };

  const handleMyCart = (item: [], id: number) => {
    setOrders((prev) => prev + 1);

    const updatedArray: Des[] = [...ordersList, { item }];
    setOrdersList(updatedArray);
    // setAdded(true )

    // const updatedPrice = [...ordersList, { item }];

    // const updatedPrice

    // setPriceList(updatedPrice);

    // setAdded(true);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <MyContext.Provider
      value={{
        user,
        handleUser,
        handleUserLogout,
        handleMyCart,
        orders,
        ordersList,
        loginUser,
        handleLoginUsers,
        // SubTotal,
        // added,
        profile,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
