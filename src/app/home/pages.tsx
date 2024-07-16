import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';
import Image from 'next/image';
import Frame from '../../assets/Frame.svg';
import { SalesList } from '../../utils/salesList';
import FlashSales from './flashSales';

const HomePage = () => {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
};

export default HomePage;
