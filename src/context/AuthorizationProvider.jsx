import { createContext, useState } from 'react';

const AuthorizationContext = createContext();

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthorizationContext.Provider
      value={{ user, setUser, isAdmin, setIsAdmin }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export { AuthorizationContext, AuthorizationProvider };
