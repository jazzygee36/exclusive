'use client';
import MyContext from '@/useContexts/store';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

import { useContext, useMemo, useState } from 'react';

const OrderTable = () => {
  const router = useRouter();

  const context = useContext(MyContext);
  const { ordersList } = context;
  // const [quantity, setQuantity] = useState(1);
  // const [price, setPrice] = useState(0);

  // const SubTotal = useMemo(() => {
  //   return quantity * price;
  // }, [quantity, price]);
  const [qty, setQty] = useState(2);
  const [priceList, setPriceList] = useState<number>(0);

  // console.log(priceList, 'Price');

  const SubTotal = useMemo(() => {
    return priceList * qty;
  }, [priceList, qty]);

  if (!context) {
    throw new Error('MyComponent must be used within a MyProvider');
  }
  return (
    <div>
      <div className='overflow-x-auto mt-16'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          {ordersList.map((orders: any) => {
            console.log(orders.item.price, orders.price, 'orders');
            return (
              <tbody>
                <tr key={orders.id}>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle h-12 w-12 rounded bg-gray-400'>
                        {/* <img src='' alt='Avatar Tailwind CSS Component' /> */}
                      </div>
                    </div>
                    <div>
                      <div className='font-semibold'>
                        <td>{orders.item?.description}</td>
                      </div>
                      {/* <div className='text-sm opacity-50'>United States</div> */}
                    </div>
                  </div>
                  <td>{orders.item?.price}</td>

                  <td>
                    <div className='flex items-center gap-4 justify-center border-2 w-16 rounded-md'>
                      <div> 2 </div>
                      <div>
                        <div className='cursor-pointer'>+</div>
                        <div className='cursor-pointer'>-</div>
                      </div>
                    </div>
                  </td>
                  <td>{SubTotal}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className='w-[90%] lg:w-[40%] m-auto flex flex-col justify-center border py-8 px-8 mt-16'>
        <div className='font-semibold'> Cart Total</div>
        <div className='flex justify-between mb-5 mt-5 font-normal'>
          <div>Subtotal </div>
          <div>N900 </div>
        </div>
        <hr />
        <div className='flex justify-between mb-5 mt-5 font-normal'>
          <div>Shipping fee </div>
          <div>N500 </div>
        </div>
        <hr />

        <div className='flex justify-between mb-5 mt-5 font-bold'>
          <div>Total </div>
          <div>N9500 </div>
        </div>
        <div className='w-[80%] items-center m-auto mt-5 px-5'>
          <Button
            bg={'#DB4444'}
            textColor={'white'}
            onClick={() => {
              router.push('/products');
            }}
          >
            Process to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
