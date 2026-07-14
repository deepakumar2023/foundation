import React from 'react';

const ChairpersonMessage = () => {
  return (
    <div className="w-full bg-[#fdfafc] py-20 px-4 md:px-8 lg:px-16 border-y border-[#f0eaef]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">

          {/* Quote Icon */}
          <div className="mb-6 flex">
            <span className="text-5xl font-serif text-[#a51a70] leading-none">“</span>
            <span className="text-5xl font-serif text-[#5bbcf2] leading-none -ml-2">”</span>
          </div>

          <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
            Guiding The Path To Change
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Our work sits on a foundation laid nearly 30 years ago, when a handful of us first set out to address the socio-economic inequalities around us. Looking back, it is easy to feel a sense of achievement for such is the expanse of work the deepak gupta Foundation has completed. But I believe we cannot afford to rest on laurels of any kind. For a rapidly growing nation like India, there is much more that needs to be done and much more that...
          </p>

          <button className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:text-[#a51a70] transition-colors mb-12 group">
            <span className="w-6 h-6 rounded-full bg-gray-800 group-hover:bg-[#a51a70] text-white flex items-center justify-center transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            Read More
          </button>

          <div>
            <h4 className="text-lg font-medium text-gray-800">Dr. Priti G. </h4>
            <p className="text-sm text-gray-500">Chairperson, deepak gupta Foundation</p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/5]">
          <img src="https://dgpfindia.org/wp-content/uploads/2024/01/Priti-Adani-2.jpg" alt="Dr. Priti G." className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
};

export default ChairpersonMessage;
