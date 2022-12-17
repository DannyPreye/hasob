import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [checkSignUpRoute, setCheckSignUpRoute] = useState(false);
  const addToCart = (item) => {
    setCart((prev) => [...new Set([...cart, item])]);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
