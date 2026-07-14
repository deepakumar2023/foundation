import React from 'react';

const VisionMission = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
        
        {/* Left: Vision */}
        <div className="w-full lg:w-1/4 relative z-10 px-4">
          <div className="absolute top-[20%] left-[-20%] w-32 h-32 bg-[#faebf6] rounded-full -z-10 blur-xl opacity-70"></div>
          <h2 className="text-xl font-medium text-gray-800 mb-4 tracking-wide">Vision</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            To transform Delhi's urban landscape into a cleaner, greener, and more resilient ecosystem for present and future generations — and to build a model of community-driven social impact that can be replicated across Indian cities.
          </p>
        </div>

        {/* Center: Image */}
        <div className="w-full lg:w-2/4 rounded-2xl overflow-hidden shadow-lg h-[300px] lg:h-[400px] z-20">
          <img src="https://picsum.photos/600/600?random=310" alt="Community Women" className="w-full h-full object-cover" />
        </div>

        {/* Right: Mission */}
        <div className="w-full lg:w-1/4 relative z-10 px-4">
          <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-[#faebf6] rounded-full -z-10 blur-xl opacity-70"></div>
          <h2 className="text-xl font-medium text-gray-800 mb-4 tracking-wide">Mission</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            To undertake targeted, scientifically planned interventions in education, health, nutrition, livelihood, climate, and community development — fostering civic participation and ensuring sustainability through community ownership and institutional partnership.
          </p>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
