'use client';
import Image from 'next/image';
import FlashBanner from '../../assets/flashbanner.png';
import { useRouter } from 'next/navigation';
import { FlashItems } from '@/utils/productsItem';
import AllBestSellingProducts from './allBestSellingProducts';
import MyContext from '@/useContexts/store';
import React, { FC, useContext } from 'react';

// import '../home/Sliders.css';

const AllProducts = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  const { handleMyCart } = context;
  return (
    <div className='pt-8  ml-3  lg:ml-[8.5%] mr-3 lg:mr-[8.5%]'>
      <div
        onClick={() => {
          router.back();
        }}
        className='mb-5 cursor-pointer'
      >
        back
      </div>
      <div className='flex  justify-center '>
        <Image src={FlashBanner} alt='banner' />
      </div>
      <div className='flex flex-wrap gap-3  justify-between mt-10 lg:mt-5'>
        {FlashItems.map((item) => (
          <div className='w-1/3 lg:w-1/4' key={item.id}>
            <div className='flex flex-col '>
              <div className='row-item'>
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
                  <Image
                    src={item.img}
                    alt='product'
                    style={{ width: '50%' }}
                  />
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
                className='cursor-pointer h-7 lg:h-[41px] flex items-center justify-center bg-black text-sm lg:text-[16px]  text-white text-center'
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
          </div>
        ))}
      </div>
      <AllBestSellingProducts />
    </div>
  );
};

export default AllProducts;
