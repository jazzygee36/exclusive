'use client';
import React from 'react';
import Image from 'next/image';
import Signup from '../../assets/signup.svg';
import HomeInput from '@/components/input';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center gap-32 lg:mt-[60px]'>
      <div className='w-[50%] hidden lg:block '>
        <Image src={Signup} alt='signup' />
      </div>
      <div className='flex flex-col  lg:w-[50%] sm:w-[100%] mt-[90.5px] scroll'>
        <div className='lg:w-[75%] sm:w-[100%]'>
          <div className='font-semibold text-[36px]'>Log in to Exclusive</div>
          <div className='text-[16px] font-medium'>
            Enter your details below
          </div>

          <HomeInput placeholder={'Email'} type={'email'} />
          <HomeInput placeholder={'Password'} type={'password'} />
        </div>
        <div className='flex justify-between items-center mt-10 gap-16'>
          <div className='w-[100%]'>
            <Button title={'Log in'} bg={'#DB4444'} textColor={'white'} />
          </div>
          <div className='text-[#DB4444] font-normal text-[16px] w-[100%] '>
            Forget Password?
          </div>
        </div>

        <div className='text-[16px] font-semibold flex  mt-8'>
          Dont have an account?
          <div
            className='cursor-pointer hover:underline ml-2'
            onClick={() => router.push('/signup')}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
