import React from 'react';

const states = [
  "Andhra Pradesh", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", 
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
  "West Bengal"
];

const OurPresence = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Presence in India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Impacting lives across 22 states through our widespread initiatives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#fdfafc] p-8 md:p-12 rounded-3xl border border-pink-50">
          {/* States List */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-xl font-bold text-[#8a2176] mb-6 border-b border-pink-100 pb-4">States We Serve</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {states.map((state, index) => (
                <div key={index} className="flex items-center group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#8a2176] transition-colors mr-3"></div>
                  <span className="text-gray-700 group-hover:text-[#8a2176] transition-colors text-sm font-medium">{state}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Image Placeholder */}
          <div className="lg:w-2/3 w-full flex justify-center">
            <div className="relative w-full max-w-[600px] rounded-2xl bg-pink-50/50 p-8 flex items-center justify-center">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/India_States_Blank_Map.svg/800px-India_States_Blank_Map.svg.png" 
                 alt="Map of India" 
                 className="w-full h-auto opacity-70 filter drop-shadow-lg hue-rotate-[320deg]"
               />
               {/* Decorative dots to simulate presence */}
               <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-[#8a2176] rounded-full shadow-[0_0_10px_rgba(138,33,118,0.8)] animate-pulse"></div>
               <div className="absolute top-[35%] right-[40%] w-3 h-3 bg-[#8a2176] rounded-full shadow-[0_0_10px_rgba(138,33,118,0.8)] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
               <div className="absolute bottom-[30%] left-[45%] w-3 h-3 bg-[#8a2176] rounded-full shadow-[0_0_10px_rgba(138,33,118,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
               <div className="absolute top-[50%] right-[30%] w-3 h-3 bg-[#8a2176] rounded-full shadow-[0_0_10px_rgba(138,33,118,0.8)] animate-pulse" style={{ animationDelay: '0.7s' }}></div>
               <div className="absolute bottom-[20%] left-[55%] w-3 h-3 bg-[#8a2176] rounded-full shadow-[0_0_10px_rgba(138,33,118,0.8)] animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
