import React from 'react';
import { SalesLists } from '../../utils/salesList';
import Frame from '../../assets/Frame.svg';
import Image from 'next/image';

const SalesList = () => {
  return (
    <div className=' lg:flex lg:flex-row sm:flex sm:flex-col ml-3 gap-2 sm:gap-2 lg:gap-2  lg:ml-[8.5%] mr-3 lg:mr-[8.5%] justify-between mb-8 lg:mb-[140px]'>
      <div className='hidden  mt-[40px]   lg:flex lg:flex-col sm:flex sm:flex-row '>
        {SalesLists.map((sales: any, index: any) => {
          return (
            <div
              key={index}
              className='hover:text-blue-800 text-sm lg:text-base sm:text-sm pb-4 cursor-pointer font-poppins  hover:underline'
            >
              {sales.list}
            </div>
          );
        })}
      </div>
      <div className='mt-6 lg:mt-[40px]'>
        <Image src={Frame} alt='frame' />
      </div>
    </div>
  );
};

export default SalesList;
