'use client';
import MyContext from '@/useContexts/store';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('MyComponent must be used within a MyProvider');
  }
  const Users = [
    {
      title: 'My Order',
      onClick: () => {},
      icon: (
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
            d='M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4'
          />
        </svg>
      ),
    },
    {
      title: 'Logout',
      icon: (
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
            d='M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z'
          />
        </svg>
      ),
      onClick: () => {
        localStorage.clear();
        router.push('/signup');
        handleUserLogout();
      },
    },
  ];

  const { user, handleUserLogout } = context;

  return (
    <div className=''>
      <div className='h-[48px] w-full bg-[#000000] flex items-center justify-center  text-[#eee] text-sm'>
        <div className=''>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow
        </div>

        {/* <div className='relative left-[15%] cursor-pointer'>English</div> */}
      </div>

      <div className='flex justify-between items-center ml-[8.5%] mr-[8.5%] mt-[47px] mb-[27px]'>
        <div className='font-bold text-[20px] text-[#000000]'>Exclusive</div>
        <ul className='flex items-center gap-16 cursor-pointer'>
          {user && (
            <li
              className='hover:underline'
              onClick={() => router.push('/home')}
            >
              Home
            </li>
          )}

          <li className='hover:underline select-none'>Contact</li>
          <li className='hover:underline select-none'>About</li>
          {/* <li
            className='hover:underline'
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </li> */}
        </ul>
        {user && (
          <div className='flex gap-4 items-center'>
            <form className='max-w-md mx-auto'>
              <div className='relative'>
                <input
                  type='search'
                  id='default-search'
                  className='block h-8 w-[95%] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
              </div>
            </form>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
            <div className='relative'>
              <div className='text-[#DB4444] relatve text-[12px]  font-bold '>
                0
              </div>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='size-6 cursor-pointer relative  '
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </div>
            {user && (
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className=' m-1'>
                  <div className='cursor-pointer'>
                    <svg
                      className='w-6 h-6 text-[#DB4444] dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content menu bg-[#F5F5F5] text-black w-52 rounded-box z-[1] px-4 py-2 shadow'
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
        )}
      </div>
      <hr />
    </div>
  );
}
