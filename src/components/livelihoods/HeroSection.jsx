import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#f2f8ec] w-full pt-20 pb-16 px-4 md:px-8 lg:px-16 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Impact Themes</span> &gt; <span className="text-[#a51a70]">Sustainable Livelihoods</span>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
          Empowering Communities<br />For A Self-Reliant Future
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-stretch space-y-16 md:space-y-8 py-8">
        
        {/* Testimonial 1 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[5%]">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=50" alt="Farmer" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Ramesh Bhai</span> - "With the new SRI technique taught by the Foundation, my paddy yield has doubled this year. They provided seeds, training, and continuous support. Now, my family doesn't have to worry about the next meal..." 
            </p>
          </div>
        </div>

        {/* Testimonial 2 (Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-md md:self-end md:mr-[5%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=51" alt="Artisan" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Lakshmi Devi</span> - "Joining the self-help group changed my life. I learned stitching and now run my own tailoring shop. The financial independence has given me a voice in my household."
            </p>
          </div>
        </div>

        {/* Testimonial 3 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[10%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=52" alt="Trainee" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Kishan Kumar</span> - "After completing my electrician course at Adani Skill Development Centre, I immediately got a job in a nearby factory. I can finally support my parents and send my sister to school."
            </p>
          </div>
        </div>
        
        {/* Testimonial 4 (Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-md md:self-end md:mr-[10%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=53" alt="Fisherman" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Abdul</span> - "The modern fishing nets and insulated ice boxes provided by the foundation have increased our daily catch and reduced spoilage. Our income is steady, and life at the coast is much better."
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-gray-600 leading-relaxed px-4 pb-8 space-y-4">
        <p>Sustainable livelihoods are fundamental to breaking the cycle of poverty and ensuring long-term community development. It's not just about providing temporary relief, but equipping individuals with the skills, resources, and knowledge to build a secure future.</p>
        <p>The Adani Foundation focuses on creating diverse livelihood opportunities through skill development, agricultural interventions, and promoting self-help groups. We believe in harnessing local potential and empowering marginalized sections, especially women and youth.</p>
        <p>Our initiatives aim to build resilient communities capable of navigating economic challenges. By fostering entrepreneurship, improving agricultural yields, and enhancing employability, we are working towards a self-reliant and thriving rural economy.</p>
      </div>
    </div>
  );
};

export default HeroSection;
