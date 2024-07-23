import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes, fallbackElement } from './routes.jsx';

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={fallbackElement} />
    </>
  );
}

export default App;
