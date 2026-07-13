import React, { useState } from 'react';

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('Water Resource Augmentation');

  const tabs = ['Water Resource Augmentation', 'Clean Energy & Environment'];

  return (
    <div className="w-full py-16 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-10">Annual Numbers That Tell A Real Story</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-[#a51a70] text-white' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Stat 1 */}
          <div className="bg-[#f5eef5] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75s-.35.79-.78.8c-2.02.04-4.54-1.12-5.11-4.14-.07-.4.23-.76.62-.76.03 0 .07 0 .1-.01z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-gray-900 mb-2">1,146</h3>
            <p className="text-sm text-gray-600">water bodies conserved & augmented</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#f5eef5] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
               <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>
               </svg>
            </div>
            <h3 className="text-4xl font-light text-gray-900 mb-2">91,111</h3>
            <p className="text-sm text-gray-600">trees planted/beneficiaries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
