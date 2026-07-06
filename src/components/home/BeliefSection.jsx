import React from 'react';

const BeliefSection = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative text watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden opacity-5 pointer-events-none select-none -z-10">
        <h1 className="text-[150px] font-bold whitespace-nowrap text-[var(--color-primary)]">Empowering India</h1>
      </div>

      <div className="container mx-auto px-4 xl:px-8 text-center max-w-4xl relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[#8a2176] rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-[var(--color-primary)] block mb-4 text-4xl md:text-5xl">The potential was always there.<br />We helped it grow.</span>
          <span className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed block mt-8">
            Since 1996,   Foundation has been building our nation through the path of service and advancing community development through purposeful action.
          </span>
        </h2>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
