import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';

const NavBarWrapper = () => {
  return (
    <div>
      <NavBar />
      <div id="body" className="flex flex-col items-center mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { NavBarWrapper };
