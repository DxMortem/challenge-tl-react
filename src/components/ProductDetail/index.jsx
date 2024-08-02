import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { MdEditSquare } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';
import { products as productsConfig } from '../../../config/config.json';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { Tooltip } from 'flowbite-react';
import { ProductForm } from '../ProductForm';
import { ModalContext } from '../../context/ModalProvider';

const ProductDetail = ({ product, onClose }) => {
  const { isAdmin } = useContext(AuthorizationContext);
  const { openModal, setOpenModal, setModalChildren, setOnClose } =
    useContext(ModalContext);

  const deleteProduct = () => {
    fetch(
      productsConfig.baseUrl +
        productsConfig.path +
        productsConfig.withIdPath.replace('{id}', product.id),
      { method: 'DELETE' }
    ).then(onClose({ needReload: true }));
  };

  const handleOnEdit = () => {
    setModalChildren(
      <div className="m-5">
        <ProductForm type="edit" product={product} onClose={onClose} />
      </div>
    );
    setOpenModal(true);
    setOnClose(() => onClose);
  };

  return (
    <div id="product-detail" className="flex flex-col p-5 w-full h-full">
      <div className="w-full h-3/5">
        <img className="h-full w-full object-contain" src={product.imageUrl} />
      </div>
      <div className="font-bold text-xl text-center p-2">{product.name}</div>
      <div className="text-center text-xl">
        Precio:{' '}
        <NumericFormat
          value={product.price}
          prefix="$"
          displayType="text"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={0}
          className="font-bold"
        ></NumericFormat>
      </div>
      <div className="text-justify p-2">{product.description}</div>

      {isAdmin ? (
        <div className="sticky bottom-0 right-0 w-full text-right">
          <div className="flex justify-end mb-5 mr-5 gap-2">
            <Tooltip content="Delete product" trigger="hover">
              <button
                className="hover:text-red-600 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50"
                onClick={deleteProduct}
              >
                <div className="flex justify-center">
                  <FaTrash />
                </div>
              </button>
            </Tooltip>
            <Tooltip content="Edit product" trigger="hover">
              <button
                className="hover:text-lime-600 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50"
                onClick={handleOnEdit}
              >
                <div className="flex justify-center">
                  <MdEditSquare />
                </div>
              </button>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className="p-5"></div>
      )}
    </div>
  );
};

export { ProductDetail };
