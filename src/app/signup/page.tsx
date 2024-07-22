'use client';
import React from 'react';
import Image from 'next/image';
import Signup from '../../assets/signup.svg';
import HomeInput from '@/components/input';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const router = useRouter();
  return (
    <div className='flex  gap-32 mt-[60px]'>
      <div className='w-[50%] '>
        <Image src={Signup} alt='signup' />
      </div>
      <div className='flex flex-col  w-[50%] mt-[90.5px] scroll'>
        <div className='w-[75%]'>
          <div className='font-semibold text-[36px]'>Create an account</div>
          <div className='text-[16px] font-medium'>
            Enter your details below
          </div>
          <HomeInput placeholder={'Name'} type={'text'} />
          <HomeInput placeholder={'Email'} type={'email'} />
          <HomeInput placeholder={'Password'} type={'password'} />
          <div className='mt-12'>
            <Button title={'Create Account'} />
          </div>
          <div className='text-[16px] font-semibold text-center mt-8'>
            Already have account? &ensp;{' '}
            <span
              className='cursor-pointer hover:underline'
              onClick={() => router.push('/login')}
            >
              Log in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
