import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-2">
      <div className="flex items-center px-3 sm:px-4 bg-slate-100 rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg">
        <input
          type="text"
          placeholder="Search Notes"
          className="w-full text-xs sm:text-sm bg-transparent py-2 outline-none"
          value={value}
          onChange={onChange}
        />
        {value && (
          <IoMdClose
            className="text-lg sm:text-xl text-slate-500 cursor-pointer hover:text-black mr-2"
            onClick={onClearSearch}
          />
        )}
        <FaMagnifyingGlass
          className="text-slate-400 cursor-pointer hover:text-black"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;