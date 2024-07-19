import React from 'react';

import { SalesList } from '../../utils/salesList';
import FlashSales from './flashSales';
import Slider from './slider';

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
          <Slider />
        </div>
      </div>
      <FlashSales />
    </div>
  );
};

export default HomePage;
