import React, { useState } from 'react';

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('SuPoshan');

  const tabs = ['SuPoshan', ' deepak   Hospitals', 'Blood Banks', 'Mobile Dispensaries', 'Others'];

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
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab
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
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="text-4xl font-light text-gray-900 mb-2">94,000+</h3>
            <p className="text-sm text-gray-600">anemic women cured</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.06-.11l3.52-6.17c.07-.12.2-.2.34-.2h3.5c.34 0 .58.33.4.63l-2.4 4.51h3.42c.5 0 .61.34.42.66l-5.07 8.1c-.08.13-.22.24-.36.24z" />
              </svg>
            </div>
            <h3 className="text-4xl font-light text-gray-900 mb-2">986</h3>
            <p className="text-sm text-gray-600">health camps conducted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
