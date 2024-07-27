import React, { Children, FC } from 'react';

interface Props {
  children: React.ReactNode;
  bg: any;
  border?: string;
  textColor: any;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, bg, border, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` border border-${border} cursor-pointer rounded-md w-[100%] h-[56px] bg-[${bg}] text-center text-${textColor} font-semibold flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
