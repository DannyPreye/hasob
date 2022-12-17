import React from 'react';
import { CiHeart } from 'react-icons/ci';

const Service = ({ service, offer }) => {
  return (
    <div className='flex justify-between font-semibold items-center'>
      <span className='text-primary-light'>{service}</span>
      <span className='text-black'>{offer}</span>
    </div>
  );
};

const handleOnClick = () => {};

const BondCard = ({ title, date, id }) => {
  return (
    <div className='w-[350px] h-[460px] border-[1px] border-green-600 rounded-[10px] p-4 '>
      <div className='flex items-center justify-between'>
        <span className='py-2 font-semibold px-4 text-sm text-primary-light bg-green-200 rounded-[15px]'>
          FGN Savings Bond
        </span>
      </div>

      <div className='mt-3 flex flex-col items-center font-semibold '>
        <h1 className='text-[1.8rem] '>{title}</h1>
        <p className='text-primary-light'>Due {date}</p>
      </div>

      <div>
        <Service service='Minimum' offer='N5,000' />
      </div>

      <div className='flex justify-end gap-4 items-center mt-5'>
        <button
          onClick={handleOnClick}
          className='h-[56px] font-bold rounded-[4px] bg-green-600 text-[1.2rem] text-white w-[60%]'
        >
          Add to cart
        </button>
        <CiHeart className='text-[3rem]' />
      </div>
    </div>
  );
};

export default BondCard;
