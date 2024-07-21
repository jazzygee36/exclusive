import React from 'react';
import { SalesLists } from '../../utils/salesList';
import Frame from '../../assets/Frame.svg';
import Image from 'next/image';

const SalesList = () => {
  return (
    <div className=' lg:flex lg:flex-row sm:flex sm:flex-col ml-[8.5%] mr-[8.5%] justify-between mb-[140px]'>
      <div className='mt-[40px] flex  lg:flex lg:flex-col sm:flex sm:flex-row '>
        {SalesLists.map((sales: any, index: any) => {
          return (
            <div
              key={index}
              className='text-[16px] sm:text-sm pb-4 cursor-pointer font-poppins  hover:underline'
            >
              {sales.list}
            </div>
          );
        })}
      </div>
      <div className='mt-[40px]'>
        <Image src={Frame} alt='frame' />
      </div>
    </div>
  );
};

export default SalesList;
