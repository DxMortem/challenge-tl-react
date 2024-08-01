import { NavBarWrapper } from '../../components/NavBarWrapper';
import { FullPageSpinner } from '../../components/FullPageSpinner';
import { Error } from '../Error';
import { Home } from '../Home';
import { Navigate } from 'react-router-dom';
import { Products } from '../Products';
import { ModalProvider } from '../../context/ModalProvider';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { LogIn } from '../LogIn';
import { LogOut } from '../LogOut';

const routes = [
  {
    path: '/',
    element: <NavBarWrapper />,
    children: [
      { path: '/', element: <Navigate to="/home" replace={true} /> },
      { path: '/home', element: <Home /> },
      {
        path: '/products',
        element: (
          <ModalProvider>
            <Products />
          </ModalProvider>
        ),
      },
    ],
    errorElement: <Error />,
  },
  { path: '/spinner', element: <FullPageSpinner /> },
  { path: '/log-in', element: <LogIn />, errorElement: <Error /> },
  {
    path: '/log-out',
    element: (
      <ProtectedRoute>
        <LogOut />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
];

const fallbackElement = <FullPageSpinner />;

export { routes, fallbackElement };
