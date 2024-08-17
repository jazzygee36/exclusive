'use client';
import MyContext from '@/useContexts/store';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
interface Props {
  username: string;
}
export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const context = useContext(MyContext);

  const { profile, handleUserLogout, orders, loginUser, handleLoginUsers } =
    context;

  if (!context) {
    throw new Error('MyComponent must be used within a MyProvider');
  }
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
    <div className='    '>
      {/* {user && ( */}
      <div className='flex gap-2 items-center  '>
        <form className='w-full mx-auto'>
          <div className='relative'>
            <input
              type='search'
              id='default-search'
              className='block h-8 w-[100%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='What are you looking for?'
            />

            <div className='absolute end-0 inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
          </div>
        </form>

        <div className='relative'>
          <div className='text-[#DB4444] relatve text-[12px]  font-bold '>
            {orders}
          </div>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6 cursor-pointer relative  '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
        </div>
        {profile && (
          <div className='dropdown dropdown-end hidden lg:block'>
            <div tabIndex={0} role='button' className=' m-1 '>
              <div className='text-sm  text-white  cursor-pointer font-semibold flex gap-1 items-center'>
                <div className='rounded-[100%]  bg-[#DB4444] capitalize py-1 px-2'>
                  {`${profile?.[0]}`}
                </div>
                <div>
                  <svg
                    className=' w-4 h-4 text-gray-800 dark:text-white'
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
                  <div className='text-[10px] font-semibold'>{user.title}</div>
                </div>
              ))}
            </ul>
          </div>
        )}
        {/* {profile} */}
      </div>
    </div>
  );
}
