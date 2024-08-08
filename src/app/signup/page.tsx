'use client';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Signup from '../../assets/signup.svg';
import HomeInput from '@/components/input';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import MyContext from '@/useContexts/store';
import Loading from '@/components/loading';
import Toast from '@/components/toast';

const SignUp = () => {
  const context = useContext(MyContext);
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { handleUser } = context;
  // const [toast, setToast] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    if (userName.length && email.length && password.length) {
      localStorage.setItem(userName, password);
      setLoading(false);
      success();
      router.push('/home');
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
              type={'text'}
              value={userName}
              onChange={(e: any) => setUserName(e.target.value)}
              // required={true}
            />
            <HomeInput
              placeholder={'Email'}
              type={'email'}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              // required={true}
            />
            <HomeInput
              placeholder={'Password'}
              type={'password'}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              // required={require}
            />

            <div className='mt-12'>
              <Button bg={'#DB4444'} textColor={'white'} onClick={handleSignUp}>
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
