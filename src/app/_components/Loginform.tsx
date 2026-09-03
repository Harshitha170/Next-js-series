"use client";
import React from 'react'

const Loginform = () => {
  return (
    <form className='space-x-4'>
        <div>
            <label className='block text-sm font-medium text-gray-100'>Email</label>
            <input type="email" name="email" placeholder="Enter your email" required className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'/>
    </div>
    </form>
  );
};

export default Loginform;
