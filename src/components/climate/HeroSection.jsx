import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#f2eff4] w-full pt-20 pb-16 px-4 md:px-8 lg:px-16 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Impact Themes</span> &gt; <span className="text-[#a51a70]">Climate Action</span>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
          Building Resilience For A<br />Changing Climate
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center py-8">

        {/* Single Testimonial (Center) */}
        <div className="flex flex-col md:flex-row items-center max-w-2xl">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=90" alt="Farmer" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 md:pl-16 rounded-2xl shadow-sm text-sm relative z-0">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Ishwari Patel</span> - "I have farmed this land my whole life. Water has always been a constant struggle. By augmenting the water bodies, my income is 40% higher than last year. This land is finally capable of..."
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-gray-600 leading-relaxed px-4 pb-8 space-y-4">
        <p>In the face of extreme weather events and erratic climatic conditions, protecting our environment and building long-term community resilience is crucial. The Deepak gupta Foundation's community interventions are closely aligned with national objectives of augmenting water resources and promoting biodiversity, while mitigating carbon footprints.</p>
        <p>The Deepak gupta Group is committed to a lower carbon footprint:</p>
        <p className="font-medium text-gray-800">Water Positivity: We are moving towards making all our power plants water-positive, thereby reducing dependency on freshwater sources.</p>
        <p className="font-medium text-gray-800">Biodiversity Enhancement: Preserving biodiversity, maintaining green covers and striving towards 'no net loss' of biological diversity across all operational areas.</p>
        <p>These initiatives not only ensure that local environments remain healthy, but they also insulate communities from climate shocks, ensuring their livelihoods are protected against erratic weather.</p>
      </div>
    </div>
  );
};

export default HeroSection;
