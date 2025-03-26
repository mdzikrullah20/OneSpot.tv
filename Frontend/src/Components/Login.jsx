import React from 'react';

export default function Login() {
  return (
    <div className='flex flex-col'>
      <div className='w-[500px] h-[17rem] absolute top-24 right-8 justify-center items-center rounded-sm  m-10 bg-[#003057] flex flex-col'>
        <h1 className='text-[30px] text-white'>Log in to OneSpot</h1>
        <div>
          <div class="flex items-center w-[27rem] my-2  text-blue-700 before:flex-1 before:border-t before:border-gray-300 before:mr-2 after:flex-1 after:border-t after:border-gray-300 after:ml-2">
             <span className='text-white'>or</span>
          </div>
          <p className='alighin-cente text-white font-sans text-center m-4'>Create New Account</p>
        </div>
        <button className='h-16 w-[27rem] mt-2 m-6 rounded-sm text-white text-bolt bg-blue-500 hover:bg-blue-400 '>Login</button>
      </div>
    </div>
  );
}