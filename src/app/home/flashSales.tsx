import React from 'react';

const FlashSales = () => {
  return (
    <div className='ml-[8.5%] mr-[8.5%]'>
      <div className='flex gap-[10px] items-center mb-[24px] text-[16px]'>
        <div className='h-[40px] w-[20px] bg-[#DB4444] rounded-md'></div>
        <div className='text-[#DB4444]'>Today's</div>
      </div>
      <div className='flex gap-[87px] items-center'>
        <div className='text-[30px] font-[600]'>Flash Sales</div>
        <div className='flex items-center gap-5'>
          <div className='flex flex-col items-center '>
            <div className='text-[12px]'>Days</div>
            <div className='flex gap-2 items-center'>
              <div className='font-bold text-[32px]'>03</div>
              {/* <div className='text-[#DB4444] font-bold'>:</div> */}
            </div>
          </div>
          <div className='flex flex-col items-center '>
            <div className='text-[12px]'>Hours</div>
            <div className='flex gap-2 items-center'>
              <div className='font-bold text-[32px]'>03</div>
              {/* <div className='text-[#DB4444] font-bold'>:</div> */}
            </div>
          </div>
          <div className='flex flex-col items-center '>
            <div className='text-[12px]'>Minutes</div>
            <div className='flex gap-2 items-center'>
              <div className='font-bold text-[32px]'>03</div>
              {/* <div className='text-[#DB4444] font-bold'>:</div> */}
            </div>
          </div>
          <div className='flex flex-col items-center '>
            <div className='text-[12px]'>Seconds</div>
            <div className='flex gap-2 items-center'>
              <div className='font-bold text-[32px]'>03</div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[40px]'>Box</div>
    </div>
  );
};

export default FlashSales;
