'use client';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import OrderTable from './orderTable';
import withAuth from '@/components/hooks/protectedRoutes';

const Orders = () => {
  const router = useRouter();
  return (
    <div className='ml-[1%] lg:ml-[8.5%] mr-[1%] lg:mr-[8.5%] '>
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
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h14M5 12l4-4m-4 4 4 4'
            />
          </svg>
        </div>
        back
      </div>

      <OrderTable />

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
    </div>
  );
};

export default withAuth(Orders);
