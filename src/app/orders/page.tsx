'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import OrderTable from './orderTable'


const Orders = () => {
  const router = useRouter();
  return <div className='ml-[8.5%] mr-[8.5%] '>
       <div
        onClick={() => {
          router.back();
        }}
        className='flex items-center gap-2 cursor-pointer  mt-6 '
      >
        <div>
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 12h14M5 12l4-4m-4 4 4 4'
            />
          </svg>
        </div>
        back
      </div>

      <OrderTable/>

      {/* <div className='flex justify-between mt-16 font-bold'>
        {OrderTitle.map((tag) => (
          <div className='font-bold' key={tag.title}>
            {tag.title}
            </div>
        ))}
        
         </div>
         <div className='flex justify-between mt-16 font-bold'>
        {OrderList.map((list) => (
          <div className='font-bold' key={list.title}>
            {list.title}
            </div>
        ))}
        
         </div> */}

       

         <div className='w-[40%] m-auto flex flex-col justify-center border py-8 px-8 mt-16'> 
          <div className='font-semibold'> Cart Total</div>
          <div className='flex justify-between mb-5 mt-5 font-normal'> 
            <div>Subtotal </div>
            <div>N900 </div>

          </div>
          <hr/>
          <div className='flex justify-between mb-5 mt-5 font-normal'> 
            <div>Shipping fee </div>
            <div>N500 </div>


          </div>
          <hr/>

          <div className='flex justify-between mb-5 mt-5 font-bold'> 
            <div>Total </div>
            <div>N9500 </div>

          </div>
          <div className='w-[80%] items-center m-auto mt-5 px-5'>
            <Button
              title={'Process to checkout'}
              bg={'#DB4444'}
              textColor={'white'}
              onClick={() => {
                router.push('/products');
              }}
            />
          </div>

          </div>

  </div>;
};

export default Orders;
