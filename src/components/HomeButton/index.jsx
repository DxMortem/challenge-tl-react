import { Link } from 'react-router-dom';
import PayULogo from '../../assets/PAYU_LOGO_SQUARE_LIME.svg';

const HomeButton = () => {
  return (
    <Link to="/" className="flex items-center gap-0.5">
      <img src={PayULogo} alt="Logo PayU" className="size-10" />
      <p>PayUStore</p>
    </Link>
  );
};

export { HomeButton };
