import { NavBarWrapper } from '../../components/NavBarWrapper';
import { FullPageSpinner } from '../../components/FullPageSpinner';
import { Error } from '../Error';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { Navigate } from 'react-router-dom';
import { Products } from '../Products';
import { ProductDetail } from '../../components/ProductDetail';
import { ModalProvider } from '../../context/ModalProvider';
import { ProtectedRoute } from '../../components/ProtectedRoute';

const routes = [
  {
    path: '/',
    element: <NavBarWrapper />,
    children: [
      { path: '/', element: <Navigate to="/home" replace={true} /> },
      { path: '/home', element: <Home /> },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products',
        element: (
          <ModalProvider>
            <Products />
          </ModalProvider>
        ),
      },
      {
        path: '/my-orders',
        element: (
          <ProtectedRoute>
            <FullPageSpinner />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
  { path: '/spinner', element: <FullPageSpinner /> },
  { path: '/log-in', element: <FullPageSpinner /> },
  {
    path: '/log-out',
    element: (
      <ProtectedRoute>
        <FullPageSpinner />
      </ProtectedRoute>
    ),
  },
];

const fallbackElement = <FullPageSpinner />;

export { routes, fallbackElement };
