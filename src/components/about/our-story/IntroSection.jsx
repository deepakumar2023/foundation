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
              Building Futures,<br />Empowering Lives
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
              deepak   Foundation, the social welfare and development arm of the  deepak   Group, is committed to transforming lives and strengthening communities across India. Guided by the organization's "Seva Hi Sadhana Hai" (Service is Meditation) philosophy, we are rooted in compassion, responsibility, and collective progress. Since inception, the Foundation has worked to create sustainable development models in education, health and nutrition, sustainable livelihoods, climate action, and community development. Through collaborative initiatives, we aim to foster inclusive growth by focusing on enduring long-term commitments and building resilient communities.
            </p>
          </div>

          {/* Bottom Text Block */}
          <div className="text-center relative">
            <div className="absolute top-[-20%] left-[10%] w-40 h-40 bg-[#faebf6] rounded-full -z-10 blur-xl opacity-60"></div>
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 tracking-wide">
              Purpose Fuelling<br />Positive Transformation
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
              Our purpose is to ensure every individual regardless of background, has the tools and resources to lead a better life. We aim to foster inclusive growth by focusing on five enduring long-term commitments and building resilient communities.
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
