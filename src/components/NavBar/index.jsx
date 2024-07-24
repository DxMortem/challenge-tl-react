import { NavLink } from 'react-router-dom';
import { leftMenu, rightMenu } from './routes';
import { ShoppingCartButton } from '../ShoppingCartButton';
import { HomeButton } from '../HomeButton';

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4 font-bold';

  const onHoverStyle =
    'hover:underline hover:underline-offset-4 hover:decoration-lime-600';

  return (
    <nav className="flex justify-between w-full fixed top-0 z-40 py-4 px-8">
      <ul className="flex items-center gap-3">
        <HomeButton />
        {leftMenu.map((route) => (
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
      <ul className="flex items-center gap-3">
        {rightMenu.map((route) => (
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
        <ShoppingCartButton />
      </ul>
    </nav>
  );
};

export { NavBar };
