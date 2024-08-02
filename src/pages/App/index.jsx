import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes, fallbackElement } from './routes.jsx';
import { AuthorizationProvider } from '../../context/AuthorizationProvider.jsx';
import { ModalProvider } from '../../context/ModalProvider.jsx';

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <AuthorizationProvider>
        <RouterProvider router={router} fallbackElement={fallbackElement} />
      </AuthorizationProvider>
      <ModalProvider>
        <div id="modal" />
      </ModalProvider>
    </>
  );
}

export default App;
