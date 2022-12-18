import React, { useEffect, useContext, useState } from 'react';

import { left, right } from '../assets';
import { UserContext } from '../components/UserContext';
import { Input } from '../components';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    setUser({
      name: value,
    });
    navigate('/bond');
  };

  return (
    <main className=' font-roboto relative'>
      <div className='container mx-auto flex flex-col pb-10 items-center'>
        <form onSubmit={handleSubmit} className='max-w-[520px] w-full'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[3rem]'>Signup</h1>
            <p className='text-primary-light'>Stop spending, Start Investing</p>
          </div>
          <div className='mt-3 flex flex-col gap-6'>
            <Input
              required
              title='First Name'
              placeholder='Enter your First Name'
              value={value}
              onChange={(e) => handleChange(e)}
            />
            <Input
              title='First Name'
              placeholder='Enter your First Name'
              value={value}
              onChange={(e) => handleChange(e)}
            />
            <Input
              title='First Name'
              placeholder='Enter your First Name'
              value={value}
              onChange={(e) => handleChange(e)}
            />
            <Input
              title='First Name'
              placeholder='Enter your First Name'
              value={value}
              onChange={(e) => handleChange(e)}
            />
            <Input
              title='First Name'
              placeholder='Enter your First Name'
              value={value}
              onChange={(e) => handleChange(e)}
            />

            <div className='flex gap-3 items-center'>
              <input type='checkbox' className='w-5 h-5 accent-green-600' />
              <p className='flex gap-3'>
                By continuing, you agree to the
                <Link to='/' className='underline text-green-600'>
                  Terms and conditions
                </Link>
              </p>
            </div>
            <button
              type='submit'
              className='w-full bg-black h-[50px] rounded-[4px] text-white hover:scale-[.9] duration-200 '
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <img src={left} alt='' className='absolute bottom-0 left-0' />
      <img src={right} alt='' className='absolute top-0 right-0' />
    </main>
  );
};

export default SignUp;
