'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/login'); // Redirect to login if no token
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
