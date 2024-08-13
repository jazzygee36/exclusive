'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: any) => {
  // Create a wrapper component
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/login'); // Redirect to login if no token
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Set a displayName for the HOC
  Wrapper.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return Wrapper;
};

export default withAuth;
