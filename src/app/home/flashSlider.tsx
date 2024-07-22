'use client'; // for nextjs 13.4 user
import Link from 'next/link';
import React from 'react';
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import GamePad from '../../assets/gamepad.svg';
import Keyboard from '../../assets/keyboard.svg';
import TvStand from '../../assets/tvstand.svg';
import Chair from '../../assets/chair.svg';
import './Sliders.css';
import Image from 'Next/Image';
import Button from '@/components/button';

const FlashSlider = () => {
  const filteredItems = [
    {
      id: 1,
      img: GamePad,
      description: 'HAVIT HV-G92 Gamepad',
      price: '$120',
    },
    {
      id: 2,
      img: Keyboard,
      description: 'AK-900 Wired Keyboard',
      price: '$960',
    },
    {
      id: 3,
      img: TvStand,
      description: 'IPS LCD Gaming Monitor',
      price: '$380',
    },
    {
      id: 4,
      img: Chair,
      description: 'S-Series Comfort Chair ',
      price: '$375',
    },
    {
      id: 5,
      img: GamePad,
      description: 'HAVIT HV-G92 Gamepad',
      price: '$120',
    },
    {
      id: 6,
      img: GamePad,
      description: 'IPS LCD Gaming Monitor',
      price: '$380',
    },
    {
      id: 7,
      img: GamePad,
      description: 'IPS LCD Gaming Monitor',
      price: '$380',
    },
  ];

  // const slideLeft = () => {
  //   let slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 235;
  // };

  // const slideRight = () => {
  //   let slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 235;
  // };
  return (
    <>
      <div className='trending'>
        <div className='container'>
          {/* <div className="title-btns">
            <h3></h3>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div> */}
          <div className='row-container' id='slider'>
            {filteredItems.map((item) => (
              <div className='flex flex-col'>
                <div key={item.id} className='row-item'>
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
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
                        />
                      </svg>
                    </div>
                  </div>
                  <Link href={`/`} className='link'>
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
                          stroke-width='2'
                          d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
                        />
                        <path
                          stroke='currentColor'
                          stroke-width='2'
                          d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                      </svg>
                    </div>
                    {/* <div className='item-description'>
                    <p>{item.description}</p>
                    <p className='item-price'>{item.price}$</p>
                  </div> */}
                  </Link>
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
          <div className='w-[20%] items-center m-auto mt-16'>
            <Button title={'View All Products'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FlashSlider;