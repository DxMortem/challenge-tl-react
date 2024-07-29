import React, { useContext } from 'react';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const { user, setUser } = useContext(AuthorizationContext);
  const navigate = useNavigate();

  const handleYes = () => {
    setUser(null);
    navigate('/');
  };

  const handleNo = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black fixed top-0 z-50 bg-opacity-50 w-full h-[calc(100%)]">
      <div className="flex flex-col h-screen">
        <div className="bg-white flex flex-col border-2 border-black rounded-lg shadow-2xl shadow-black/80 p-20 overflow-auto m-auto">
          Are you sure you want to Log-Out?
          <div className="flex justify-center">
            <button
              className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="m-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogOut };
