//This is  a server component -- by default we have created -- no user interaction 
import Loginform from '@/app/_components/Loginform';
import React from 'react'
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='max-w-md-auto bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6'>Login</h1>
      <Loginform />
      <p className='mt-4 text-center'>Dont have an account ? <Link href="/register" className='text-blue-600 hover:underline'>Register</Link></p>
    </div>
  )
}

export default LoginPage;
