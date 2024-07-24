import { NavBarWrapper } from '../../components/NavBarWrapper';
import { FullPageSpinner } from '../../components/FullPageSpinner';
import { Error } from '../Error';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { Navigate } from 'react-router-dom';
import { Products } from '../Products';

const routes = [
  {
    path: '/',
    element: <NavBarWrapper />,
    children: [
      { path: '/', element: <Navigate to="/home" replace={true} /> },
      { path: '/home', element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/products', element: <Products /> },
      { path: '/my-orders', element: <FullPageSpinner /> },
    ],
    errorElement: <Error />,
  },
  { path: '/spinner', element: <FullPageSpinner /> },
  { path: '/log-in', element: <FullPageSpinner /> },
  { path: '/log-out', element: <FullPageSpinner /> },
];

const fallbackElement = <FullPageSpinner />;

export { routes, fallbackElement };
