import { NavLink } from 'react-router-dom';
import { routes } from './routes';

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4 font-bold';

  const onHoverStyle =
    'hover:underline hover:underline-offset-4 hover:decoration-lime-600';

  return (
    <nav className="flex justify-between w-full fixed z-40 py-4 px-8">
      <ul className="flex items-center gap-2">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? activeStyle : onHoverStyle
              }
            >
              {route.element}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-2">
        <button>Login</button>
        <button>Logout</button>
        <button>Cart</button>
      </ul>
    </nav>
  );
};

export default NavBar;
