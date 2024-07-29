import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { MdEditSquare } from 'react-icons/md';
import { NumericFormat } from 'react-number-format';

const ProductDetail = ({ product }) => {
  return (
    <div id="product-detail" className="flex flex-col p-5 w-full h-full">
      <div className="w-full h-3/4">
        <img className="h-full block ml-auto mr-auto" src={product.imageUrl} />
      </div>
      <div className="font-bold text-xl text-center p-2">{product.name}</div>
      <div className="text-justify p-2">{product.description}</div>
      <div className="text-center">
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
      <div className="sticky bottom-0 right-0 w-full text-right">
        <button className="hover:text-red-600 mb-5 mr-2 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50">
          <div className="flex justify-center">
            <FaTrash />
          </div>
        </button>
        <button className="hover:text-lime-600 mb-5 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50">
          <div className="flex justify-center">
            <MdEditSquare />
          </div>
        </button>
      </div>
    </div>
  );
};

export { ProductDetail };
