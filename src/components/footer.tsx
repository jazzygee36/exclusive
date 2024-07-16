export default function Footer() {
  return (
    <div className='bg-[#000000] w-full h-full  pb-[24px] pt-[80px] '>
      <div className=' flex justify-between  text-white ml-[8.5%] mr-[8.5%]'>
        <div className='flex flex-col  gap-5 cursor-pointer'>
          <div className='text-[14px]'>Exclusive</div>
          <div className='text-[12px]'>Subscribe</div>
          <div className='text-[10px]'>Get 10% off your first order</div>
          <input
            type='text'
            placeholder='Enter your email'
            className='bg-transparent border rounded-sm placeholder:text-xs'
          />
        </div>
        <div className='flex flex-col  gap-5 cursor-pointer'>
          <div className='text-[14px]'>Support</div>
          <div className='text-[12px]'>Ikorodu Lagos. 08136668316</div>
          <div className='text-[10px]'> exclusive@gmail.com</div>
          <div className='text-[10px]'> 08136668316</div>
        </div>
        <div>
          <h3 className='text-[14px]'>Account</h3>
        </div>
        <div>
          <h3 className='text-[14px]'>Quick Link</h3>
        </div>
        <div>
          <h3 className='text-[14px]'>Download App</h3>
        </div>
      </div>
      <hr className='mt-[60px] ' />
      <div className='text-[10px] text-white text-center mt-4'>
        Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
}
