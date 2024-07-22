import React from 'react';
import FlashSales from './flashSales';
import Categories from './categories';
import BestSelling from './bestSelling';
import SpeakerFrame from '../../assets/hufa.svg';
import Image from 'next/image';
import SalesList from './salesList';
import ExploreProduct from './exploreProduct';
import NewArrival from './newArrival';

const HomePage = () => {
  return (
    <div>
      <SalesList />
      <FlashSales />
      <hr className='mb-16 mt-16  ml-[8.5%] mr-[8.5%]' />
      <Categories />
      <hr className='mb-16 mt-16  ml-[8.5%] mr-[8.5%]' />
      <BestSelling />
      <div className='flex justify-center'>
        <Image
          src={SpeakerFrame}
          alt='speaker'
          className='mt-[140px] flex justify-center ml-[8.5%] mr-[8.5%] mb-[71px]'
        />
      </div>
      <ExploreProduct />
      <NewArrival />
    </div>
  );
};

export default HomePage;
