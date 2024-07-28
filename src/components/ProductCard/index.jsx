import { MdAddShoppingCart } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';

const ProductCard = ({ item }) => {
  return (
    <article className="cursor-pointer w-56 h-64 bg-slate-50 rounded-lg shadow-xl shadow-black/30">
      <figure className="relative  w-full h-4/5">
        <button className="absolute top-0 right-0 m-2 p-1 flex justify-center items-center h-6 w-6 rounded-full bg-gray-50 text-black shadow-md shadow-black/50">
          <MdAddShoppingCart />
        </button>
        <img
          src={item.imageUrl}
          className="w-full h-full object-cover rounded-lg"
        />
        <figcaption className="absolute bottom-0 left-0 bg-white/80 shadow-xl rounded-lg text-xs m-2 px-3 py-0.5">
          {item.category}
        </figcaption>
      </figure>
      <div className="p-2 flex h-1/5 justify-between items-center bg-slate-50">
        <span className="text-sm">{item.name}</span>
        <NumericFormat
          value={item.price}
          prefix="$"
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={0}
          className="font-bold text-sm"
        ></NumericFormat>
      </div>
    </article>
  );
};

export { ProductCard };
