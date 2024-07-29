import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes, fallbackElement } from './routes.jsx';
import { AuthorizationProvider } from '../../context/AuthorizationProvider.jsx';

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <AuthorizationProvider>
        <RouterProvider router={router} fallbackElement={fallbackElement} />
      </AuthorizationProvider>
    </>
  );
}

export default App;
