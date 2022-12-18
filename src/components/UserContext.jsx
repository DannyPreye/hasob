import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [checkSignUpRoute, setCheckSignUpRoute] = useState(false);
  const addToCart = (item) => {
    setCart((prev) => [...new Set([...cart, item])]);
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart([...newCart]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        checkSignUpRoute,
        setCheckSignUpRoute,
        removeFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
