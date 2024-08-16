'use client';
import MyContext from '@/useContexts/store';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Search from './search';
import axios from 'axios';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const context = useContext(MyContext);
  const { user, profile, handleUserLogout, orders, loginUser } = context;

  // if (!context) {
  //   throw new Error('MyComponent must be used within a MyProvider');
  // }

  return (
    <div className=''>
      <div className='h-[48px] w-full px-2 text-center bg-[#000000] flex items-center justify-center  text-[#eee] text-sm'>
        <div className=''>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow
        </div>

        {/* <div className='relative left-[15%] cursor-pointer'>English</div> */}
      </div>

      <div className='flex justify-between  items-center ml-3  lg:ml-[8.5%] mr-3 lg:mr-[8.5%] mt-[47px] mb-2 lg:mb-[27px]'>
        <div
          // onClick={() => router.push('/home')}
          className='font-bold text-md lg:text-[20px] text-[#000000] cursor-pointer '
        >
          Exclusive
        </div>
        <ul className='flex items-center gap-4 text-md lg:text-[20px]   sm:gap-2 lg:gap-16  cursor-pointer'>
          {/* {pathname === '/home'
            ? null
            : user && ( */}
          <li className='hover:underline' onClick={() => router.push('/home')}>
            Home
          </li>
          {/* )} */}

          {/* {pathname != '/signup' && pathname != '/login' ? null : ( */}
          <li
            onClick={() => router.push('/about')}
            className='hover:underline select-none'
          >
            About
          </li>
          {/* )} */}

          {/* {pathname != '/signup' && pathname != '/login' ? null : ( */}
          <li
            className='hover:underline select-none'
            onClick={() => router.push('/contact')}
          >
            Contact
          </li>

          {!profile && (
            <li
              className='hover:underline select-none'
              onClick={() => router.push('/signup')}
            >
              Sign up
            </li>
          )}
        </ul>
        <div>
          <div className='hidden lg:block'>
            <Search />
          </div>
        </div>
      </div>
      <div className=' sm:block lg:hidden'>
        <Search />
      </div>
      <hr />
    </div>
  );
}
