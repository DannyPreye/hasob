import React, { useContext, useState } from 'react';

import { emblem } from '../assets';
import { UserContext } from './UserContext';

const CartComponent = ({ title, id, value }) => {
  const { removeFromCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  const handleDelete = () => {
    removeFromCart(id);
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handledecreaseQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  return (
    <div className='mt-8 border-[1px] border-green-600 rounded-[5px] w-full h-[100px] flex  justify-between px-8 py-4'>
      <div className='flex gap-5 items-center'>
        <input
          type='checkbox'
          className=' accent-emerald-600 w-5 h-5'
          checked
        />
        <img src={emblem} alt='nigeria emblem' className='w-14 h-14' />
        <p className='font-bold text-[1.4rem]'>{title}</p>
      </div>

      <div className='flex items-center gap-4'>
        <button className='border-[1px] text-green-600 border-green-600 rounded-[5px] px-4 py-2'>
          Automatic
        </button>
        <button onClick={handleDelete} className='text-red-600'>
          Delete
        </button>
      </div>

      <div>
        <p className='text-primary-light'>
          Value (<span className='line-through decoration-double'>N</span>)
        </p>
        <div className='w-[300px] h-10 border-[1px] rounded-[3px] flex justify-between items-center px-2'>
          <p> {value}.00</p>
          <div className='flex gap-4 items-center'>
            <span
              onClick={handledecreaseQuantity}
              className='cursor-pointer h-7  w-7 border-[2px]  rounded-full  justify-center font-bold flex items-center'
            >
              -
            </span>{' '}
            <span className='text-primary-light font-semibold'>
              {quantity < 10 ? '0' + quantity : quantity}
            </span>
            <span
              onClick={handleIncreaseQuantity}
              className='cursor-pointer h-7 w-7 border-[2px] text-center rounded-full  justify-center font-bold flex items-center'
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
