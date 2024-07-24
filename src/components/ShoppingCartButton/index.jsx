import { MdShoppingCart } from 'react-icons/md';

const ShoppingCartButton = () => {
  return (
    <button>
      <div className="flex items-center hover:text-lime-600">
        <MdShoppingCart />
        <p>0</p>
      </div>
    </button>
  );
};

export { ShoppingCartButton };
