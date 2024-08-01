'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Frame from '../../assets/Frame.svg';

export function Sliders() {
  return (
    <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel>
        <Image src={Frame} alt='frame' />
        {/* <img src={Frame} alt='frame' /> */}
      </Carousel>
    </div>
  );
}
