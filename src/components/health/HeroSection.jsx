import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#fdf7fd] w-full pt-20 pb-16 px-4 md:px-8 lg:px-16 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Impact Themes</span> &gt; <span className="text-[#a51a70]">Health & Nutrition</span>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wide">
          Bridging The Gap Between<br />Need & Care
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-stretch space-y-16 md:space-y-8 py-8">

        {/* Testimonial 1 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[5%]">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=10" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Mayur Bhati</span> - "An early diagnosis on complete blood count saved my life. I was feeling sluggish and suddenly very weak. A health camp by  Deepak  gupta Foundation team brought me the diagnosis in timely, before things turned unmanageable...
              <a href="#" className="text-[#a51a70] italic"> 5 more words</a>"
            </p>
          </div>
        </div>

        {/* Testimonial 2 (Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-md md:self-end md:mr-[5%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=11" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Pariti Ben</span> - "I am a mother of 2 kids. My TV status and BMI indicated mild forms of weight loss and weakness... Then Sangini volunteers counseled me and brought in proper guidance along with medicines... Now I am fully healthy."
            </p>
          </div>
        </div>

        {/* Testimonial 3 (Left) */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-md md:self-start md:ml-[10%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=12" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Sonalika Sahani</span> - "At 60, my vision completely faded. I had given up on it. But   deepak   gupta  helped. The Mobile clinic found the cataract... The surgical day is here. I will finally see the world."
            </p>
          </div>
        </div>

        {/* Testimonial 4 (Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-md md:self-end md:mr-[10%] md:-mt-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="https://picsum.photos/400/400?random=13" alt="Patient" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Priya Khemka</span> - "My boy Ram was deeply anemic. The doctors at the   deepak   gupta  hospital cared for him. 15 days of admission, complete checkup and free meds. He is recovering and plays cheerfully today."
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-gray-600 leading-relaxed px-4 pb-8 space-y-4">
        <p>In developing nations, building good health and healthcare access is essential to overall development. It forms the most important pillar for a progressive society, one that empowers individuals and sustains growth. While many policies focus on this goal, creating adequate healthcare delivery remains a challenge for the Indian Government.</p>
        <p>Recognizing the significance of healthcare, the  Deepak  gupta Foundation has taken a strong stand to support this cause. From managing hospitals to running mobile health care units, and conducting specialized health camps, the Foundation is committed to making a difference.</p>
        <p>The Foundation addresses the pressing issue of malnutrition and anemia through project SuPoshan. Furthermore, keeping health check-ups and medical treatments accessible, especially for those at the bottom of the pyramid, forms a central pillar of the Foundation's comprehensive strategy for societal well-being and equality.</p>
      </div>
    </div>
  );
};

export default HeroSection;
