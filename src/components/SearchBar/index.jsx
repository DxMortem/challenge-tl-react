import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = ({ onChangeInput, onClickButton }) => {
  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      onClickButton();
    }
  };

  return (
    <div className="flex w-screen justify-center pb-5">
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-l-lg border border-black shadow-sm shadow-black w-80 focus:outline-none focus:border-black focus:shadow-sm focus:shadow-black focus:ring-black"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-sm shadow-black"
        onClick={onClickButton}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export { SearchBar };
