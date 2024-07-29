const leftMenu = [
  { path: '/home', element: 'Home' },
  { path: '/products?page=1', element: 'Products' },
];

const rightMenu = [
  { path: '/log-in', element: 'Log In' },
  { path: '/my-orders', element: 'My Orders', private: true },
  { path: '/profile', element: 'Profile', private: true },
  { path: '/log-out', element: 'Log Out', private: true },
];

export { leftMenu, rightMenu };
