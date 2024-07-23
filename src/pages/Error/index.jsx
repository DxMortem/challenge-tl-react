import { useRouteError } from 'react-router-dom';

export default function Error({ definedError }) {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred</p>
      <p>
        <i>
          {error?.status + ' ' + error?.statusText ||
            error?.message ||
            definedError}
        </i>
      </p>
    </div>
  );
}
