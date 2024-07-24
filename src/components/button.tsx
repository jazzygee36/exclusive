import React, { FC } from 'react';

interface Props {
  title: string;
  bg: any;
  border?: string;
  textColor: any;
  onClick?: () => void;
}

const Button: FC<Props> = ({ title, bg, border, textColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` border border-${border} cursor-pointer rounded-md w-[100%] h-[56px] bg-[${bg}] text-center text-${textColor} font-semibold flex items-center justify-center`}
    >
      {title}
    </div>
  );
};

export default Button;
