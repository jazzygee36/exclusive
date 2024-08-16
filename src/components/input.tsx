import React, { FC, useState } from 'react';
interface Props {
  placeholder: string;
  type: string;
  value: any;
  onChange: any;
}

const HomeInput: FC<Props> = ({ placeholder, type, value, onChange }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleTogglePassword = () => {
    setVisible(!visible);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;

  //   if (type === 'email') {
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailPattern.test(inputValue)) {
  //       console.error('Invalid email format');
  //       return;
  //     }
  //   }

  //   if (onChange) {
  //     onChange(inputValue);
  //   }
  // };

  const VisibilityIcon = (
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
        strokeWidth='2'
        d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='2'
        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  );
  const VisibilityOffIcon = (
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
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
      />
    </svg>
  );

  return (
    <div className='mt-10  relative w-full '>
      <input
        type={type === 'password' && visible ? 'text' : type}
        className={`outline-none border border-gray-300 border-l-0 border-r-0 border-t-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' ? (
        <div
          className=' cursor-pointer absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 focus:outline-none'
          onClick={handleTogglePassword}
        >
          {visible ? VisibilityIcon : VisibilityOffIcon}
        </div>
      ) : null}
    </div>
  );
};

export default HomeInput;
