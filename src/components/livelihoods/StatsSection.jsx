import React, { useState } from 'react';

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('Agriculture');

  const tabs = ['Agriculture', 'Skill Development', 'Women Empowerment', 'Animal Husbandry'];

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
          <div className="bg-[#f2f8ec] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">1,50,000+</h3>
            <p className="text-sm text-text-muted">farmers supported</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#f2f8ec] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">4,500+</h3>
            <p className="text-sm text-text-muted">youth trained</p>
          </div>
          
           {/* Stat 3 */}
          <div className="bg-[#f2f8ec] rounded-xl p-8 flex flex-col items-center justify-center text-center w-full sm:w-64">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">350+</h3>
            <p className="text-sm text-text-muted">SHGs formed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
