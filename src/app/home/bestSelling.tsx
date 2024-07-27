import React from 'react';
import BestSellingSlider from './bestSellingSlider';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const BestSelling = () => {
  const router = useRouter();

  return (
    <div className='ml-3  lg:ml-[8.5%] mr-3 lg:mr-[8.5%]'>
      <div className='flex gap-[10px] items-center mb-[24px] text-[16px]'>
        <div className='h-[40px] w-[20px] bg-[#DB4444] rounded-md'></div>
        <div className='text-[#DB4444]'>This Month</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[87px] items-center justify-between'>
          <div className='text-lg sm:text-sm lg:text-[30px] font-[600]'>
            Best Selling Products
          </div>
        </div>
        <div className='w-[25%] sm:w-25% lg:w-[25%]'>
          <Button
            bg={'#DB4444'}
            textColor={'white'}
            onClick={() => {
              router.push('/products');
            }}
          >
            {' '}
            View All{' '}
          </Button>
        </div>
      </div>

      <div className='mt-14'>
        <BestSellingSlider />
      </div>
    </div>
  );
};

export default BestSelling;
