import React from 'react';

import { AiOutlineArrowRight, AiOutlinePlayCircle } from 'react-icons/ai';
import { hand } from '../assets';

const Home = () => {
  return (
    <main className='relative font-roboto'>
      <span className='w-[3.5rem] h-[20px] absolute left-0 top-0 bg-primary-light' />
      <span className='w-[3.5rem] h-[20px] absolute right-0 top-0 bg-green-300' />

      <div className='container mx-auto  flex'>
        <div className='mt-10'>
          <h1 className='flex flex-col font-bold text-[3rem]'>
            <span>Subscribe to FGN </span>
            <span>Saving Bond</span>
          </h1>
          <p className='text-primary-light text-[1.5rem]'>
            Loan and get paid with interest
          </p>
          <div className='flex gap-5 mt-10'>
            <button className='flex font-bold  items-center justify-center gap-3 text-white h-[50px] px-4  text-[1.2rem]  rounded-[4px] bg-green-600 '>
              Get Started
              <AiOutlineArrowRight />
            </button>
            <p className='cursor-pointer flex items-center text-[1.2rem] text-primary-light gap-2'>
              <AiOutlinePlayCircle className='text-[1.5rem]' />
              See Video
            </p>
          </div>
        </div>

        <div className='w-[60%] h-[80vh] relative'>
          <img src={hand} alt='' className='absolute bottom-0 left-0' />
        </div>
      </div>
    </main>
  );
};

export default Home;
