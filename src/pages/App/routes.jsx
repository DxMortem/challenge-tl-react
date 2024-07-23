import { NavBarWrapper } from '../../components/NavBarWrapper';
import { FullPageSpinner } from '../../components/FullPageSpinner';
import Error from '../Error';
import { Home } from '../Home';

const routes = [
  {
    path: '/',
    element: <NavBarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/spinner',
    element: <FullPageSpinner />,
  },
];

const fallbackElement = <FullPageSpinner />;

export { routes, fallbackElement };
