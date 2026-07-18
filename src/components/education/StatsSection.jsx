import React, { useState } from 'react';

const StatsSection = () => {
  const [activeTab, setActiveTab] = useState('Primary');

  return (
    <div className="w-full py-16 bg-surface px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-light text-text-main mb-10">Annual Numbers That Tell A Real Story</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Primary', 'Vidya Mandir', 'Phoolbagan'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-md text-sm font-medium transition-colors ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">13+</h3>
            <p className="text-sm text-text-muted">states reached</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">43+</h3>
            <p className="text-sm text-text-muted">schools built/upgraded</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
               <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>
               </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">1,200+</h3>
            <p className="text-sm text-text-muted">schools given smart class</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#f5e6f5] rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 mb-4 text-[#a51a70]">
               <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM21 18.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
               </svg>
            </div>
            <h3 className="text-4xl font-light text-text-main mb-2">2</h3>
            <p className="text-sm text-text-muted">medical colleges started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
