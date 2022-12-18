import React, { useContext } from 'react';
import { CiHeart } from 'react-icons/ci';
import { emblem } from '../assets';

import { UserContext } from './UserContext';

const Offer = ({ title, service }) => (
  <div className='flex justify-between font-semibold items-center'>
    <span className='text-primary-light'>{title}</span>
    <span className='text-black'>{service}</span>
  </div>
);

const BondCard = ({ data }) => {
  const { addToCart } = useContext(UserContext);
  const handleOnClick = () => {
    addToCart(data);
  };

  return (
    <div className='w-[350px] flex-shrink-0  border-[1px] border-green-600 rounded-[10px] p-4 '>
      <div className='flex items-center justify-between'>
        <img src={emblem} alt='emblem' className='w-10 h-10' />
        <span className='py-2 font-semibold px-4 text-sm text-primary-light bg-green-200 rounded-[15px]'>
          FGN Savings Bond
        </span>
      </div>

      <div className='mt-3 flex flex-col items-center font-semibold '>
        <h1 className='text-[1.8rem] '>{data?.title}</h1>
        <p className='text-primary-light'>Due {data?.date}</p>
      </div>

      <div className='flex flex-col gap-4'>
        <Offer title='Minimum' service={data?.minimum} />
        <Offer title='% Per Year' service={data?.per_year} />
        <Offer title='Interest Payment' service={data?.interest} />
        <Offer title='Opening' service={data?.openning} />
        <Offer title='Closing Date' service={data?.closing} />
        <Offer title='Settlement' service={data?.settlement} />
      </div>

      <div className='flex justify-end gap-4 items-center mt-5'>
        <button
          onClick={handleOnClick}
          className='hover:scale-[.9] duration-200 h-[56px] font-bold rounded-[4px] bg-green-600 text-[1.2rem] text-white w-[60%]'
        >
          Add to cart
        </button>
        <CiHeart className='text-[3rem]' />
      </div>
    </div>
  );
};

export default BondCard;
