import React, { useContext } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import { CardComponent } from '../components';
import { UserContext } from '../components/UserContext';

const Cart = () => {
  const { cart } = useContext(UserContext);
  return (
    <main className='container mx-auto pb-10'>
      {cart.length > 0 ? (
        cart.map((bond, id) => (
          <CardComponent
            key={id}
            id={bond?.id}
            title={bond?.title}
            value={bond.value}
          />
        ))
      ) : (
        <p className='text-primary-light font-bold text-[2rem]'>
          You've not added any Bond to cart yet
        </p>
      )}

      {cart?.length > 0 && (
        <div className='flex flex-col items-end'>
          <div className='w-full text-primary-light h-50 flex justify-between border-green-600 border-[1px]  mt-10 py-4 px-8 rounded-[4px]'>
            <div className='w-[32%] flex flex-col gap-12'>
              <div className=' flex gap-10'>
                <p className='flex gap-2 items-center'>
                  Fees + Taxes <AiOutlineDown size={10} />
                </p>
                <p>
                  <span className='decoration-double line-through'>N</span> 2.09
                </p>
              </div>
              <p>This is a 730 days Saving Bond, you have a fixed income</p>
            </div>
            <div>
              <p>Total Buy</p>
              <p className='text-black'>
                <span className='line-through decoration-double'>N</span>
                {cart.reduce((total, elem) => (total += elem.value), 0)}
              </p>
            </div>
          </div>

          <button className='h-[50px] px-8 py-2 rounded-[5px] bg-green-600 font-semibold text-white mt-3'>
            Checkout
          </button>
        </div>
      )}
    </main>
  );
};

export default Cart;
