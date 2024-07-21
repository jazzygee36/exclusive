import React from 'react';
import Image from 'next/image';
import Frame from '../../assets/Frame.svg';
import { SalesList } from '../../utils/salesList';
import FlashSales from './flashSales';
import Categories from './categories';
import BestSelling from './bestSelling';
import SpeakerFrame from '../../assets/hufa.svg';

const HomePage = () => {
  return (
    <div>
      <div className='flex ml-[8.5%] mr-[8.5%] justify-between mb-[140px]'>
        <div className='mt-[40px]'>
          {SalesList.map((sales, index) => {
            return (
              <ul
                key={index}
                className='pb-4 cursor-pointer font-poppins text-[16px] hover:underline'
              >
                <li className=''>{sales.list}</li>
              </ul>
            );
          })}
        </div>
        <div className='mt-[40px]'>
          <Image src={Frame} alt='frame' />
        </div>
      </div>
      <FlashSales />
      <hr className='mb-16 mt-16  ml-[8.5%] mr-[8.5%]' />
      <Categories />
      <hr className='mb-16 mt-16  ml-[8.5%] mr-[8.5%]' />
      <BestSelling />
      <div className='flex justify-center'>
        <Image
          src={SpeakerFrame}
          alt='speaker'
          className='mt-[140px] flex justify-center ml-[8.5%] mr-[8.5%] '
        />
      </div>
    </div>
  );
};

export default HomePage;
