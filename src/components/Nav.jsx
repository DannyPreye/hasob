import React, { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';

import { UserContext } from './UserContext';
import { not_signed_in_menu, signed_in_menu } from '../utils/menu-titles';
import { logo } from '../assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

const Nav = () => {
  const { user, checkSignUpRoute, cart } = useContext(UserContext);
  const location = useLocation();

  return (
    <header className='font-roboto'>
      <div className=' mx-auto container py-5 flex items-center justify-between'>
        <NavLink to={'/'}>
          <img
            src={logo}
            alt='debt management office nigeria'
            className='object-contain '
          />
        </NavLink>
        <ul className='flex items-center w-6/12 justify-between text-lg'>
          {Object.values(user).length <= 0
            ? not_signed_in_menu.map((menu, id) => (
                <NavLink key={id} className={'focus:font-bold '} to={menu.link}>
                  {menu.title}
                </NavLink>
              ))
            : signed_in_menu.map((menu, id) => (
                <NavLink
                  key={menu.title}
                  className={'focus:font-bold '}
                  to={menu.link}
                >
                  {menu.title}
                </NavLink>
              ))}
          {!Object.values(user).length <= 0 && (
            // display this if user has logged in
            <Link to='/dashboard'>
              <FiUser className='text-[2rem]' />
            </Link>
          )}
          {Object.values(user).length <= 0 && (
            <>
              {/* Only show this for users that have not logged in */}
              <Button
                title={'Login'}
                link='/login'
                className='border-[1px]  text-green-600 border-green-600'
              />
              {location.pathname !== '/signup' && (
                <Button
                  title={'Sign Up'}
                  link='/signup'
                  className='border-[1px]  bg-black text-white'
                />
              )}
            </>
          )}
          <Link to='/cart' className='relative'>
            <BsCart2 className='text-[3rem] ' />
            <span
              className={`w-7 h-7 absolute -top-2 -right-2 text-center  rounded-full bg-red-600 text-white grid place-items-center ${
                cart.length > 0 ? 'grid' : 'hidden'
              }`}
            >
              {cart?.length}
            </span>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
