import React from 'react';

const IntroSection = () => {
  return (
    <div className="w-full pt-12 pb-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-12 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Our Story</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">

        {/* Left Image */}
        <div className="w-full lg:w-1/4 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
          <img src="https://picsum.photos/400/800?random=300" alt="Control Room" className="w-full h-full object-cover" />
        </div>

        {/* Center Text Column */}
        <div className="w-full lg:w-2/4 flex flex-col justify-center gap-12 relative px-4 lg:px-8 py-8">

          {/* Top Text Block */}
          <div className="text-center relative">
            <div className="absolute top-[-20%] right-[10%] w-32 h-32 bg-[#faebf6] rounded-full -z-10 blur-xl opacity-60"></div>
            <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 tracking-wide">
              Story of Change
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
              The Deepak Gupta Foundation was born out of a simple observation: Delhi does not lack good intentions — it lacks structured, accountable delivery. What began as grassroots food distribution and animal welfare work in Delhi has grown into a structured programme spanning environmental restoration, community development, and now a flagship urban afforestation initiative designed to institutional standards.
              <br /><br />
              That realisation shaped every subsequent decision: to formally incorporate as a Section 8 company; to pursue 12A and 80G registration; to register formally for CSR eligibility with the Ministry of Corporate Affairs; and to list activities transparently on the NGO Darpan platform.
            </p>
          </div>

          {/* Bottom Text Block */}
          <div className="text-center relative">
            <div className="absolute top-[-20%] left-[10%] w-40 h-40 bg-[#faebf6] rounded-full -z-10 blur-xl opacity-60"></div>
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 tracking-wide">
              From Grassroots Beginnings to Structured Delivery
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
              Our earliest documented activities recorded in our NGO Darpan profile include food distribution reaching more than 1,500 people, feeding of stray animals, small-scale tree plantation, and distribution of paper bags to reduce single-use plastic harm. What has changed is the level of structure surrounding them.
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/4 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto lg:mt-24">
          <img src="https://picsum.photos/400/800?random=301" alt="Smiling Boy" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
};

export default IntroSection;
