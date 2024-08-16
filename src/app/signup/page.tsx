'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Signup from '../../assets/signup.svg';
import HomeInput from '@/components/input';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyContext from '@/useContexts/store';
import Loading from '@/components/loading';

import axios from 'axios';
const SignUp = () => {
  const context = useContext(MyContext);
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { handleUser } = context;
  // const [toast, setToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = async () => {
    setLoading(true);

    try {
      setLoading(true);
      if (!username || !email || !password) {
        setErrorMessage('All fields are required');
      }
      setLoading(false);

      const response = await axios.post(
        `https://exclusiveshopping.vercel.app/api/signup`,
        {
          username,
          email,
          password,
        }
      );

      success();
      setLoading(false);
      setErrorMessage(response?.data?.message);

      router.push('/login');
    } catch (err) {
      console.error(err, 'errrrrrrrr');
      setLoading(true);
      error();
      setLoading(false);
    }
  };
  const error = () => toast.error(errorMessage);
  const success = () => toast.success('Successful !');
  return (
    <>
      <div>
        <ToastContainer position='top-right' />
      </div>
      {/* {toast && (
        <div>
          <Toast title={'Check the info you provided'} textColor={'red'} />
        </div>
      )} */}

      <div className='flex justify-center  gap-32 mt-7'>
        <div className='w-[50%] hidden lg:block'>
          <Image src={Signup} alt='signup' />
        </div>
        <div className='flex flex-col  lg:w-[50%] sm:w-[100%] mt-[90.5px] scroll'>
          <div className='lg:w-[75%] sm:w-[100%]'>
            <div className='font-semibold text-[36px]'>Create an account</div>
            <div className='text-[16px] font-medium'>
              Enter your details below
            </div>
            <HomeInput
              placeholder={'User name'}
              type='text'
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              // required={true}
            />
            <HomeInput
              placeholder={'Email'}
              type='email'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            />
            <HomeInput
              placeholder={'Password'}
              type='password'
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              // required={require}
            />

            <div className='mt-12'>
              <Button onClick={handleSignUp} bg={'#DB4444'} textColor={'white'}>
                {loading ? <Loading /> : 'Create Account'}
              </Button>
            </div>
            <div className='text-[16px] font-semibold text-center mt-8'>
              Already have account?
              <span
                className='cursor-pointer hover:underline ml-2'
                onClick={() => router.push('/login')}
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
