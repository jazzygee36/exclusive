import React from 'react';
import CategoriesSlider from './categoriesSlider';
// import FlashSlider from './flashSlider';

const Categories = () => {
  return (
    <div className='ml-3  lg:ml-[8.5%] mr-3 lg:mr-[8.5%]'>
      <div className='flex gap-[10px] items-center mb-[24px] text-[16px]'>
        <div className='h-[40px] w-[20px] bg-[#DB4444] rounded-md'></div>
        <div className='text-[#DB4444]'>Categories</div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[87px] items-center'>
          <div className='text-lg sm:text-sm lg:text-[30px] font-[600]'>
            Browse By Categories
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

      <div className='mt-14'>
        <CategoriesSlider />
      </div>
    </div>
  );
};

export default Categories;
