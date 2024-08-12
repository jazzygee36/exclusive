'use client';
import Image from 'next/image';
import AboutImg from '../../assets/aboutImg.svg';
import Samson from '../../assets/samson.jpg';
import { useRouter } from 'next/navigation';
export default function About() {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          router.back();
        }}
        className='flex items-center gap-2 cursor-pointer ml-[8.5%] mt-6'
      >
        <div>
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
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h14M5 12l4-4m-4 4 4 4'
            />
          </svg>
        </div>
        back
      </div>
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap gap-6 sm:gap-4 items-center   ml-[8.5%] mr-0 sm:mr-[8.5%] lg:mr-0   mt-[80px] '>
          <div className='w-[100%]'>
            <div className='text-[54px] font-semibold'>Our Story</div> <br />
            <div className='text-[16px] font-normal'>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </div>
            <br />
            <div className='text-[16px] font-normal'>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
          <div className='w-[100%]'>
            <Image src={AboutImg} alt='about' />
          </div>
        </div>
        {/* <div className='flex ml-[8.5%] mr-[8.5%] justify-between mt-36'>
          <Image src={Samson} alt='sam' />
          <Image src={Samson} alt='sam' />
          <Image src={Samson} alt='sam' />
        </div> */}
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-7 mt-[140px]'>
          <div className='text-center'>
            <div className='bg-[#2F2E30] h-[80px] w-[80px] rounded-full m-auto flex justify-center items-center mb-6'>
              <svg
                className='w-[50%] h-[50%] text-white dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='m7.4 3.736 3.43 3.429A5.046 5.046 0 0 1 12.133 7c.356.01.71.06 1.056.147l3.41-3.412a2.32 2.32 0 0 1 .451-.344A9.89 9.89 0 0 0 12.268 2a10.022 10.022 0 0 0-5.322 1.392c.165.095.318.211.454.344Zm11.451 1.54-.127-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.03.023.05.054.078.077.237.194.454.41.651.645.033.038.077.067.11.107l2.926-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.025.03-.058.052-.082.082a4.97 4.97 0 0 1-.633.639c-.04.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.443-4.763a3.037 3.037 0 0 0-1.383-1.1l-.012-.007a2.956 2.956 0 0 0-1-.213H12a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.009.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .488 1.716l.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.319.129.657.2 1 .213.393.015.784-.05 1.15-.192.012-.005.021-.013.033-.018a3.01 3.01 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.349.447l-3.426 3.426c.112.428.166.869.161 1.311a4.954 4.954 0 0 1-.148 1.054l3.413 3.412c.133.134.249.283.347.444A9.88 9.88 0 0 0 22 12.269a9.913 9.913 0 0 0-1.386-5.319ZM16.6 20.264l-3.42-3.421c-.386.1-.782.152-1.18.157h-.135c-.356-.01-.71-.06-1.056-.147L7.4 20.265a2.503 2.503 0 0 1-.444.347A9.884 9.884 0 0 0 11.732 22H12a9.9 9.9 0 0 0 5.044-1.388 2.515 2.515 0 0 1-.444-.348ZM3.735 16.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L3.735 7.4a2.508 2.508 0 0 1-.349-.447 9.889 9.889 0 0 0 0 10.1 2.48 2.48 0 0 1 .35-.453Zm5.101-.758a4.959 4.959 0 0 1-.65-.645c-.034-.038-.078-.067-.11-.107L5.15 18.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.029-.018-.049-.053-.078-.076Zm-.755-6.928c.03-.037.07-.063.1-.1.183-.22.383-.423.6-.609.046-.04.081-.092.128-.13L5.983 5.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707l2.932 2.931Z' />
              </svg>
            </div>
            <div className='font-semibold text-[20px]'>
              FREE AND FAST DELIVERY
            </div>
            <div className=' text-[14px]'>
              Free delivery for all orders over $140
            </div>
          </div>
          <div className='text-center '>
            <div className='bg-[#2F2E30] h-[80px] w-[80px] rounded-full m-auto flex justify-center items-center mb-6'>
              <svg
                className='w-[50%] h-[50%] text-white dark:text-white'
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
                  d='M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z'
                />
              </svg>
            </div>
            <div className='font-semibold text-[20px]'>
              24/7 CUSTOMER SERVICE
            </div>
            <div className=' text-[14px]'>Friendly 24/7 customer support</div>
          </div>
          <div className='text-center'>
            <div className='bg-[#2F2E30] h-[80px] w-[80px] rounded-full m-auto flex justify-center items-center mb-6'>
              <svg
                className='w-[50%] h-[50%] text-white dark:text-white'
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
                  d='M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z'
                />
              </svg>
            </div>
            <div className='font-semibold text-[20px]'>
              MONEY BACK GUARANTEE
            </div>
            <div className=' text-[14px]'>We reurn money within 30 days</div>
          </div>
        </div>
      </div>
    </>
  );
}
