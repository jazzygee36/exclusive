'use client';
import { BestSellingItems } from '@/utils/productsItem';
import Image from 'next/image';
import React, { FC, useContext } from 'react';
import MyContext from '@/useContexts/store';

const AllBestSellingProducts = () => {
  const context = useContext(MyContext);
  const { handleMyCart } = context;
  return (
    <>
      <div className='h-12 w-full bg-black text-white flex justify-center text-center items-center font-bold mt-16'>
        Best Selling Products
      </div>

      <div className='flex flex-wrap gap-3  justify-between mt-10'>
        {BestSellingItems.map((item) => (
          <div key={item.id} className='w-1/3 lg:w-1/4'>
            <div
              className='row-item'
              //   onMouseEnter={() => setIsHovered(true)}
            >
              <div className='flex justify-between '>
                <div className='flex justify-center items-center  rounded-md bg-[#DB4444] w-[55px] h-[26px] text-center text-white text-[12px]'>
                  -14%
                </div>
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
                      d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
                    />
                  </svg>
                </div>
              </div>

              <div className='item-header flex m-auto  '>
                <Image src={item.img} alt='product' style={{ width: '50%' }} />
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
                    strokeWidth='2'
                    d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
                  />
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </div>
            </div>

            <div
              onClick={() => handleMyCart(item.description)}
              className='cursor-pointer h-7 lg:h-[41px] flex items-center justify-center bg-black text-[16px] text-white text-center'
            >
              add to Cart
            </div>

            <div className='flex flex-col gap-2'>
              <div className='text-[16px] mt-3 font-semibold'>
                {item.description}
              </div>
              <div className='text-[16px] text-[#DB4444]'>{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBestSellingProducts;
