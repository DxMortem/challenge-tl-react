import { useContext } from 'react';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthorizationContext);

  return user ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/log-in" replace={true} />
    </>
  );
};

export { ProtectedRoute };
