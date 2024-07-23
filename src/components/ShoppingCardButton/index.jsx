import { GiShoppingCart } from 'react-icons/gi';

const ShoppingCartButton = () => {
  return (
    <button>
      <div className="flex items-center">
        <GiShoppingCart />
        <p>0</p>
      </div>
    </button>
  );
};

export { ShoppingCartButton };
