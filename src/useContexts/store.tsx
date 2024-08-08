'use client';
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
  // const [added, setAdded] = useState(false);

  const [priceList, setPriceList] = useState<number[]>([]);
  // const obj = { priceList };

  console.log(priceList, 'Price');
  // const handlePriceList = () => {
  //   const extractedPrices = ordersList.map((order: any) => order.item?.price);
  //   setPriceList(extractedPrices);
  // };

  // const SubTotal = useMemo(() => {
  //   return priceList * qty;
  // }, [priceList, qty]);

  // console.log(SubTotal, 'SubTotal');

  const handleUser = () => {
    setUser(true);
  };
  const handleUserLogout = () => {
    setUser(false);
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
  // useEffect(() => {
  //   const extractedPrices = ordersList.map((order: any) => order.item?.price);
  //   setPriceList(extractedPrices);
  // }, [ordersList]);

  return (
    <MyContext.Provider
      value={{
        user,
        handleUser,
        handleUserLogout,
        handleMyCart,
        orders,
        ordersList,
        // SubTotal,
        // added,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
