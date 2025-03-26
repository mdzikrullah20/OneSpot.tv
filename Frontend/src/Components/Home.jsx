import React from 'react';
import BackImage from '../assets/backimg.jpg';

export default function Home() {
  return (
    <div className='w-screen h-[550px] flex justify-center items-center'>
      <img src={BackImage} alt="Background" className=" h-[100%] w-[100%] object-cover" />
    </div>
  );
}