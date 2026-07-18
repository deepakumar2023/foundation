import React, { useState, useEffect } from 'react';

const ImpactAtGlance = () => {
  const [counters, setCounters] = useState({ villages: 0, lives: 0, states: 0 });

  // Simple counter animation effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        clearInterval(timer);
        setCounters({ villages: 7247, lives: 13.5, states: 22 });
      } else {
        const progress = currentStep / steps;
        // Ease out quad
        const ease = progress * (2 - progress);
        setCounters({
          villages: Math.floor(7247 * ease),
          lives: Number((13.5 * ease).toFixed(1)),
          states: Math.floor(22 * ease)
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50 bg-[url('https://www. foundation.org/-/media/Project/Foundation/Home/Mountain-bg.png')] bg-no-repeat bg-bottom bg-contain" style={{ minHeight: '600px' }}>
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-main leading-relaxed mb-6">
            When people are empowered, communities rise.<br />
            And when communities rise, India rises.
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Reiterating our group philosophy of 'Seva Hi Sadhana Hai', for nearly three decades, our mission has been to serve and support this change through the pillars of Education, Health and Nutrition, Sustainable Livelihoods, Climate Action and Community Development.
          </p>
          <h3 className="text-2xl font-bold text-[var(--color-primary)]">
            Here is how far that mission has taken us
          </h3>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12 relative z-10">
          {/* Villages */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-text-main mb-2">
              {counters.villages.toLocaleString()}
            </div>
            <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Villages and urban wards</p>
          </div>

          {/* Lives */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-50 rounded-full -z-10 blur-xl"></div>
            <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-text-main mb-2">
              {counters.lives} <span className="text-3xl font-medium">Million</span>
            </div>
            <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Lives Touched</p>
          </div>

          {/* States */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-text-main mb-2">
              {counters.states}
            </div>
            <p className="text-sm text-text-muted font-medium uppercase tracking-wider">States</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAtGlance;
