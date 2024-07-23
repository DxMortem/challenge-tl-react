import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';

const NavBarWrapper = () => {
  return (
    <div>
      <NavBar />
      <div id="body" className="relative py-8">
        <Outlet />
      </div>
    </div>
  );
};

export { NavBarWrapper };
