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

const CategoriesSlider = () => {
  const filteredItems = [
    {
      id: 1,
      img: GamePad,
      title: 'Phone',
    },
    {
      id: 2,
      img: Keyboard,
      title: 'Phone',
    },
    {
      id: 3,
      img: TvStand,
      title: 'Phone',
    },
    {
      id: 4,
      img: Chair,
      title: 'Phone',
    },
    {
      id: 5,
      img: GamePad,
      title: 'Phone',
    },
    {
      id: 6,
      img: GamePad,
      title: 'Phone',
    },
    {
      id: 7,
      img: GamePad,
      title: 'Phone',
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
                <div key={item.id} className='row-item-category'>
                  <Link href={`/`} className='link'>
                    <div className='item-header flex flex-col items-center m-auto'>
                      <Image
                        src={item.img}
                        alt='product'
                        style={{ width: '50%' }}
                      />
                      <div className='text-[16px] mt-3 '>{item.title}</div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoriesSlider;
