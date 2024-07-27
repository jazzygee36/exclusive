import React from 'react';
import FlashSlider from './flashSlider';

const FlashSales = () => {
  return (
    <div className='ml-[8.5%] mr-[8.5%]'>
      <div className='hidden lg:flex gap-[10px] items-center mb-[24px] text-[16px]  '>
        <div className='h-[40px] w-[20px] bg-[#DB4444] rounded-md'></div>
        <div className='text-[#DB4444]'>Todays</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[87px] items-center'>
          <div className='text-[30px] font-[600]'>Flash Sales</div>
          <div className='hidden  sm:hidden lg:flex items-center gap-5'>
            <div className='flex flex-col items-center '>
              <div className='text-[12px]'>Days</div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold text-[32px]'>03</div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='text-[12px]'>Hours</div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold text-[32px]'>03</div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='text-[12px]'>Minutes</div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold text-[32px]'>03</div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='text-[12px]'>Seconds</div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold text-[32px]'>03</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-3'>
          <div className='rounded-full h-[46px] w-[46px] bg-[#F5F5F5]  flex items-center justify-center cursor-pointer'>
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
                strokeWidth='2'
                d='M5 12h14M5 12l4-4m-4 4 4 4'
              />
            </svg>
          </div>

          <div className='rounded-full h-[46px] w-[46px] bg-[#F5F5F5] flex items-center justify-center cursor-pointer'>
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
                strokeWidth='2'
                d='M19 12H5m14 0-4 4m4-4-4-4'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=''>
        <FlashSlider />
      </div>
    </div>
  );
};

export default FlashSales;
