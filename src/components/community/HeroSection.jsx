import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#f2eef4] w-full pt-20 pb-16 px-4 md:px-8 lg:px-16 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-text-muted mb-8 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Impact Themes</span> &gt; <span className="text-[#a51a70]">Community Development</span>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-light text-text-main mb-4 tracking-wide">
          Rewriting The Rules Of<br />Rural Development
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-stretch space-y-16 md:space-y-8 py-8">

        {/* Testimonial 1 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[5%]">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="/1.jpeg" alt="Community Member" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-text-main leading-relaxed">
              "Before the new road, getting our produce to the market during monsoons was impossible. Half our vegetables would rot. Now, the market is just 20 minutes away, all year round..."
            </p>
          </div>
        </div>

        {/* Testimonial 2 (Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-md md:self-end md:mr-[5%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="/2.jpeg" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-text-main leading-relaxed">
             "Our village finally has a community hall. Weddings, panchayat meetings, festivals... everything happens here now. It has truly brought us all together under one roof."
            </p>
          </div>
        </div>

        {/* Testimonial 3 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[15%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="/3.jpeg" alt="Trainee" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-text-main leading-relaxed">
           "The RO plant installed in our village means my kids don't fall sick as often. Clean drinking water was a luxury, now it is our right. We are very thankful for this facility."
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-text-muted leading-relaxed px-4 pb-8 space-y-4">
        <p>The Deepak gupta Foundation focuses on building robust rural infrastructure that serves as the backbone for community progress. From constructing roads that connect remote villages to markets, to building community halls that foster social cohesion, our interventions aim to elevate the standard of living.</p>
        <p>We believe that development is holistic. By providing access to safe drinking water, improving sanitation facilities, and upgrading local schools, we address the fundamental needs of communities, empowering them to pursue better educational and economic opportunities.</p>
        <p>Our approach involves active participation from local governance bodies and the community members themselves, ensuring that the infrastructure created is not only relevant but also maintained sustainably over the long term.</p>
      </div>
    </div>
  );
};

export default HeroSection;
