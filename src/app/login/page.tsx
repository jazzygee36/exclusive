'use client';
import { useState, useContext } from 'react';
import Image from 'next/image';
import Signup from '../../assets/signup.svg';
import HomeInput from '@/components/input';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyContext from '@/useContexts/store';
import Loading from '@/components/loading';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const context = useContext(MyContext);

  const { handleUser } = context;

  const handleLogin = () => {
    setLoading(true);
    if (userName.length && password.length) {
      localStorage.setItem(userName, password);
      setLoading(false);
      router.push('/home');
      success();

      handleUser();
    } else {
      setLoading(true);
      error();
      setLoading(false);
    }
  };
  const error = () => toast.error('Check the info provided !');
  const success = () => toast.success('Successful !');
  return (
    <>
      <div>
        <ToastContainer position='top-right' />
      </div>

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

            <HomeInput
              placeholder={'User name'}
              type={'text'}
              value={userName}
              onChange={(e: any) => setUserName(e.target.value)}
            />
            <HomeInput
              placeholder={'Password'}
              type={'password'}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center mt-10 gap-16'>
            <div className='w-[100%]'>
              <Button bg={'#DB4444'} textColor={'white'} onClick={handleLogin}>
                {loading ? <Loading /> : 'Login'}
              </Button>
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
    </>
  );
};

export default Login;
