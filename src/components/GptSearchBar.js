import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  
  // Recalculate the placeholder and button text on each render
  const placeholderText = lang[langkey]?.gptSearchPlaceholder || "What would you like to watch today?";
  const buttonText = lang[langkey]?.search || "Search";

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={placeholderText}
          className="p-4 m-4 col-span-9"
        />
        <button className="bg-red-700 col-span-3 px-4 py-2 m-4 text-white rounded-lg">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
