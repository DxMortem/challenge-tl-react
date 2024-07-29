import { FaRegFaceSmileBeam } from 'react-icons/fa6';
import Hello from '../../assets/hello.svg';
import ReactImg from '../../assets/react.svg';
import { useContext } from 'react';
import { AuthorizationContext } from '../../context/AuthorizationProvider';

function Home() {
  const { user } = useContext(AuthorizationContext);
  return (
    <div id="home" className="flex flex-col items-center text-center">
      <img className="w-1/2 m-4" src={Hello} />
      <div>
        <p className="text-4xl m-3">
          Hi{user ? ' ' + user.name + ' ' + user.lastname : null}!
        </p>
        <p>Welcome to my TL Challenge!</p>
        <p>My name is Diego Borrero and I'll guide you by this store</p>
        <p>First of all you should know that this store is powered by react</p>
      </div>
      <img className="w-1/5 m-2" src={ReactImg} />
      <div>
        <p>
          To begin be sure that the backend is running on{' '}
          <a href="localhost:38080" className="underline-offset-2 underline">
            port 38080
          </a>
        </p>
        <p>
          If it's not this case download it from{' '}
          <a
            href="https://github.com/DxMortem/challenge-tl-backend"
            className="underline-offset-2 underline"
          >
            challenge-tl-backend
          </a>
        </p>
        <p>
          This will have some mocked information and also the endpoints to
          create more
        </p>
        <br />
        <p>
          If you want to login as Admin you can use user: <em>Admin</em> or{' '}
          <em>admin@payu.com</em> and pass:<em>admin</em>
        </p>
        <p>
          If you want to login as User you can use user: <em>DonPepe</em> or{' '}
          <em>pepito.perez@payu.com</em> and pass:<em>123456</em>
        </p>
        <p>
          You can see the pre-mocked information here:{' '}
          <a
            href="https://github.com/DxMortem/challenge-tl-backend/blob/master/src/main/resources/data.sql"
            className="underline-offset-2 underline"
          >
            data.sql
          </a>
        </p>
        <br />
        <p>
          My contact is on the footer if you want to give me some feedback, if
          you want more info take a look at the readme of both proyects
        </p>
        <p className="inline-flex items-center">
          Have fun! <FaRegFaceSmileBeam className="ml-1" size="2em" />
        </p>
      </div>
    </div>
  );
}

export { Home };
