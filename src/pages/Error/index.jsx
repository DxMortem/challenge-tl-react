import { useRouteError } from 'react-router-dom';
import sadDoge from '../../assets/sadDoge.jpeg';

const Error = ({ definedError }) => {
  const error = useRouteError();
  console.error(error);
  //
  return (
    <div
      id="error-page"
      className="h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl mb-4">Oops!</h1>
      <p>Sorry, an unexpected error has ocurred</p>
      <p>
        <i className="text-red-500">
          {error?.status + ': ' + error?.statusText ||
            error?.message ||
            definedError}
        </i>
      </p>
      <img className="rounded-lg mt-4" src={sadDoge} />
    </div>
  );
};

export { Error };
