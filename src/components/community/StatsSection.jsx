import React, { useState } from 'react';

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('Community Infrastructure');

  const tabs = ['Community Infrastructure'];

  return (
    <div className="w-full py-16 bg-surface px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-light text-text-main mb-10">Annual Numbers That Tell A Real Story</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-[#a51a70] text-white' 
                  : 'bg-surface border border-gray-200 text-text-main hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Stat 1 */}
          <div className="bg-[#f5ebf2] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">21,415+</h3>
            <p className="text-sm text-text-muted">projects completed / lives touched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
