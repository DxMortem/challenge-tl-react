const leftMenu = [
  { path: '/home', element: 'Home', private: false },
  { path: '/products?page=1', element: 'Products', private: false },
];

const rightMenu = [
  { path: '/log-in', element: 'Log In', private: false, publicOnly: true },
  { path: '/my-orders', element: 'My Orders', private: true },
  { path: '/profile', element: 'Profile', private: true },
  { path: '/log-out', element: 'Log Out', private: true },
];

export { leftMenu, rightMenu };
