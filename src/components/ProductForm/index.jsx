import { NumericFormat } from 'react-number-format';
import { products as productsConfig } from '../../../config/config.json';

const ProductForm = ({ type, product, onClose }) => {
  const state = {
    priceValue: null,
  };

  const gatherNewProductJSON = (event) => {
    return JSON.stringify({
      name: event.target.name.value,
      price: state.priceValue != null ? state.priceValue : product.price,
      category: event.target.category.value,
      imageUrl: event.target.imageUrl.value,
      description: event.target.description.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type == 'create') {
      fetch(productsConfig.baseUrl + productsConfig.path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: gatherNewProductJSON(event),
      }).then(onClose({ needReload: true }));
    } else if (type == 'edit') {
      fetch(
        productsConfig.baseUrl +
          productsConfig.path +
          productsConfig.withIdPath.replace('{id}', product.id),
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: gatherNewProductJSON(event),
        }
      ).then(onClose({ needReload: true }));
    } else {
      onClose();
    }
  };

  return (
    <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name:
        </label>
        <input
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Name"
          defaultValue={product?.name}
        ></input>
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price:
        </label>
        <NumericFormat
          id="price"
          defaultValue={product?.price}
          prefix="$"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={0}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="$500.000"
          onValueChange={(values) => {
            state.priceValue = values.floatValue;
          }}
        ></NumericFormat>
      </div>
      <div className="mb-5">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category:
        </label>
        <input
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Product Category"
          defaultValue={product?.category}
        ></input>
      </div>
      <div className="mb-5">
        <label
          htmlFor="imageUrl"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ImageUrl:
        </label>
        <input
          id="imageUrl"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://url-of.the/Image"
          defaultValue={product?.imageUrl}
        ></input>
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description:
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="This is a long description, you can use 2000 chars here"
          defaultValue={product?.description}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {type == 'create' && 'Create Product'}
          {type == 'edit' && 'Edit Product'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="m-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export { ProductForm };
