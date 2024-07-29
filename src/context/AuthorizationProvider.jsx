import { createContext, useState } from 'react';

const AuthorizationContext = createContext();

const AuthorizationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthorizationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export { AuthorizationContext, AuthorizationProvider };
