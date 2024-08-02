import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Outlet } from 'react-router-dom';

const NavBarWrapper = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div id="body" className="flex flex-col items-center mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { NavBarWrapper };
