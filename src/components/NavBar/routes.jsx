import { MdLogin, MdLogout } from 'react-icons/md';

const leftMenu = [
  { path: '/home', element: 'Home', private: false },
  { path: '/products?page=1', element: 'Products', private: false },
];

const rightMenu = [
  {
    path: '/log-in',
    element: (
      <div className="flex gap-1 items-center">
        <MdLogin />
        Log In
      </div>
    ),
    private: false,
    publicOnly: true,
  },
  {
    path: '/log-out',
    element: (
      <div className="flex gap-1 items-center">
        <MdLogout />
        Log Out
      </div>
    ),
    private: true,
  },
];

export { leftMenu, rightMenu };
