import { NumericFormat } from 'react-number-format';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalProvider';
import { ProductDetail } from '../ProductDetail';

const ProductCard = ({ product, onNeedRechargeProducts }) => {
  const { openModal, setOpenModal, setModalChildren, setOnClose } =
    useContext(ModalContext);

  const onProductClick = (e, product) => {
    setModalChildren(
      <ProductDetail product={product} onClose={onCloseModal} />
    );
    setOpenModal(true);
    setOnClose(() => onCloseModal);
  };

  const onCloseModal = ({ needReload }) => {
    setOpenModal(false);
    setModalChildren(null);
    if (needReload) {
      onNeedRechargeProducts();
    }
  };

  return (
    <article
      className="cursor-pointer bg-slate-50 rounded-lg shadow-xl shadow-black/30 w-full h-full overflow-auto"
      onClick={(e) => onProductClick(e, product)}
    >
      <figure className="relative  w-full h-4/5">
        <img
          src={product.imageUrl}
          className="w-full h-full object-cover rounded-lg"
        />
        <figcaption className="absolute bottom-0 left-0 bg-white/80 shadow-xl rounded-lg text-xs m-2 px-3 py-0.5">
          {product.category}
        </figcaption>
      </figure>
      <div className="p-2 flex h-1/5 justify-between items-center bg-slate-50">
        <span className="text-sm">{product.name}</span>
        <NumericFormat
          value={product.price}
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
