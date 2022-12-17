import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Nav } from './components';
import UserContextProvider from './components/UserContext';
import {
  Home,
  BondOffer,
  Dashboard,
  Features,
  Login,
  SignUp,
  DMO,
  Cart,
} from './pages';

const App = () => {
  return (
    <UserContextProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bond' element={<BondOffer />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/features' element={<Features />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dmo' element={<DMO />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
