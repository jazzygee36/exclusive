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
  const {
    user,
    profile,
    handleUserLogout,
    orders,
    loginUser,
    handleLoginUsers,
    token,
  } = context;

  // if (!context) {
  //   throw new Error('MyComponent must be used within a MyProvider');
  // }
  const Users = [
    {
      title: 'My Order',
      onClick: () => {
        router.push('/orders');
      },
      icon: (
        <svg
          className='w-4 h-4 text-gray-800 dark:text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4'
          />
        </svg>
      ),
    },
    {
      title: 'Logout',
      icon: (
        <svg
          className='w-4 h-4 text-gray-800 dark:text-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z'
          />
        </svg>
      ),
      onClick: () => {
        localStorage.clear();
        router.push('/login');
        handleUserLogout();
        handleLoginUsers();
      },
    },
  ];

  return (
    <div className=''>
      <div className='h-[48px] w-full px-2 text-center bg-[#000000] flex items-center justify-center  text-[#eee] text-sm'>
        <div className=''>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow
        </div>

        {/* <div className='relative left-[15%] cursor-pointer'>English</div> */}
      </div>
      <div className='sm:flex sm:flex-col lg:flex lg:flex-row justify-between ml-3  lg:ml-[8.5%] mr-3 lg:mr-[8.5%] mt-[47px] mb-2 lg:mb-[27px]'>
        <div className='flex justify-between  items-center sm:gap-0 lg:gap-32 '>
          <div
            // onClick={() => router.push('/home')}
            className='font-bold text-md lg:text-[20px] text-[#000000] cursor-pointer   '
          >
            Exclusive
          </div>
          <ul className='flex items-center gap-4 text-md lg:text-[20px]   sm:gap-2 lg:gap-16  cursor-pointer'>
            {/* {pathname === '/home'
            ? null
            : user && ( */}
            <li
              className='hover:underline'
              onClick={() => router.push('/home')}
            >
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
          {profile && (
            <div className='dropdown dropdown-end sm:block lg:hidden'>
              <div tabIndex={0} role='button' className=' m-1'>
                <div className='text-sm  text-white  cursor-pointer font-semibold flex gap-1 items-center'>
                  <div className='rounded-[100%]  bg-[#DB4444] capitalize py-1 px-2'>
                    {`${profile?.[0]} `}
                  </div>
                  <div>
                    <svg
                      className='w-4 h-4 text-gray-800 dark:text-white'
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
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m19 9-7 7-7-7'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu rou bg-[#fefefe] text-black w-40 rounded-box z-[1] px-4 py-2 shadow'
              >
                {Users.map((user) => (
                  <div
                    onClick={user.onClick}
                    className='flex gap-3 items-center mb-4 cursor-pointer'
                    key={user.title}
                  >
                    <div className=''>{user.icon}</div>
                    <div className='text-[10px] font-semibold'>
                      {user.title}
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className=' '>
          <Search />
        </div>
      </div>
    </div>
  );
}
