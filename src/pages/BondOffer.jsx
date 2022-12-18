import React, { useRef, useEffect } from 'react';

import { BondCard } from '../components';
import { bonds } from '../utils/test_data';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const BondOffer = () => {
  const scrollRef = useRef();
  const handleScrollRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 350;
  };
  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 350;
  };

  useEffect(() => {
    handleScrollRight();
    handleScrollLeft();
  }, []);

  return (
    <main className='  relative'>
      <div className='absolute top-[50%] right-0 translate-y-[-50%] cursor-pointer'>
        <AiOutlineRight
          onClick={handleScrollRight}
          className='text-[2rem] font-bold'
        />
      </div>
      <div className='absolute top-[50%] left-0 translate-y-[-50%] cursor-pointer'>
        <AiOutlineLeft
          onClick={handleScrollLeft}
          className='text-[2rem] font-bold'
        />
      </div>

      <div className='container mx-auto '>
        <div
          ref={scrollRef}
          className='flex hide-scroll-bar gap-8 relative overflow-x-scroll scroll whitespace-nowrap  scroll-smooth'
        >
          {bonds.map((bond, id) => (
            <BondCard data={bond} key={bond.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BondOffer;
