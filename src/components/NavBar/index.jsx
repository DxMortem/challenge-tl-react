import { NavLink } from 'react-router-dom';
import { leftMenu, rightMenu } from './routes';
import { HomeButton } from '../HomeButton';
import { useContext, useState } from 'react';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { MdMenu } from 'react-icons/md';

const NavBar = () => {
  const { user } = useContext(AuthorizationContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeStyle = 'underline underline-offset-4 font-bold';

  const onHoverStyle =
    'hover:underline hover:underline-offset-4 hover:decoration-lime-600';

  return (
    <nav className="flex max-md:flex-col max-md:items-start md:justify-between bg-white items-center w-full fixed top-0 z-10 py-4 px-8">
      <div className="flex gap-3 max-md:w-full">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span class="sr-only">Open main menu</span>
          <MdMenu className="size-6" />
        </button>

        <HomeButton />
      </div>
      <ul
        className={`${isMenuOpen ? 'flex' : 'hidden'} max-md:flex-col max-md:items-strat max-md:gap-3 max-md:mt-4 max-md:w-full max-md:mb-3 md:flex md:items-center md:gap-3`}
      >
        {leftMenu.map((route) =>
          (route.private && !user) || (route.publicOnly && user) ? null : (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? activeStyle : onHoverStyle
                }
                onClick={toggleMenu}
              >
                {route.element}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <ul
        className={`${isMenuOpen ? 'flex' : 'hidden'} max-md:flex-col max-md:items-strat max-md:gap-3 max-md:w-full max-md:mb-3 md:flex md:items-center md:gap-3`}
      >
        {rightMenu.map((route) =>
          (route.private && !user) || (route.publicOnly && user) ? null : (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? activeStyle : onHoverStyle
                }
                onClick={toggleMenu}
              >
                {route.element}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export { NavBar };
