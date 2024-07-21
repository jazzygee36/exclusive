import React, { FC } from 'react';

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <div
      className={`cursor-pointer rounded-md w-[100%] h-[56px] bg-[#DB4444] text-center text-white font-semibold flex items-center justify-center`}
    >
      {title}
    </div>
  );
};

export default Button;
