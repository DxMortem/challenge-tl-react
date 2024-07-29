import { useContext, useState } from 'react';
import { users } from '../../../config/config.json';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const { setUser, setIsAdmin } = useContext(AuthorizationContext);
  const [labelErrorText, setLabelErrorText] = useState('');
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();
    cleanErrorLabel();

    fetch(users.baseUrl + users.path + users.loginPath, {
      headers: {
        emailOrUsername: e.target.email.value,
        password: e.target.password.value,
      },
    })
      .then((response) => response.json())
      .then((body) => {
        setUser(body);
        setIsAdmin(body.username == 'Admin');
        navigate('/');
      })
      .catch((error) =>
        showMessage(
          error.status
            ? error.status + ': ' + error.statusText
            : 'Authentication failed, please try again'
        )
      );
  };

  const showMessage = (message) => {
    console.log(message);
    setLabelErrorText(message);
  };

  const cleanErrorLabel = () => {
    if (labelErrorText != '') {
      setLabelErrorText('');
    }
  };

  return (
    <div className="bg-black fixed top-0 z-50 bg-opacity-50 w-full h-[calc(100%)]">
      <form
        className="max-w-sm mx-auto flex flex-col h-screen"
        onSubmit={doLogin}
      >
        <div className="bg-white relative border-2 border-black rounded-lg shadow-2xl shadow-black/80 p-20 overflow-auto m-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email or user
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@payu.com"
              required
              onChange={cleanErrorLabel}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={cleanErrorLabel}
            />
          </div>
          <label className="block text-sm text-red-500" id="error">
            {labelErrorText}
          </label>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export { LogIn };
