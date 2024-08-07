import React, { FC } from 'react';
interface Props {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: any;
  // width:[]
}

const HomeInput: FC<Props> = ({ placeholder, type, value, onChange }) => {
  return (
    <div className='mt-10 w-[100%]'>
      <input
        type={type}
        // id='first_name'
        className={`outline-none border border-gray-300 border-l-0 border-r-0 border-t-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default HomeInput;
