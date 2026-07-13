import React from 'react';

const FilterBar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full bg-white py-6 border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-4 pb-2 md:pb-0 items-center justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === category
                  ? 'bg-[#a51a70] border-[#a51a70] text-white'
                  : 'bg-white border-gray-300 text-gray-600 hover:border-[#a51a70] hover:text-[#a51a70]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
