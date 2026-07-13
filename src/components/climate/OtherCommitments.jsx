import React from 'react';

const OtherCommitments = () => {
  const commitments = [
    {
      id: 1,
      title: "EDUCATION",
      image: "https://picsum.photos/400/400?random=110"
    },
    {
      id: 2,
      title: "HEALTH & NUTRITION",
      image: "https://picsum.photos/400/400?random=111"
    },
    {
      id: 3,
      title: "SUSTAINABLE LIVELIHOODS",
      image: "https://picsum.photos/400/400?random=112"
    },
    {
      id: 4,
      title: "COMMUNITY INFRASTRUCTURE",
      image: "https://picsum.photos/400/400?random=113"
    }
  ];

  return (
    <div className="w-full py-16 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-16">Explore Other Commitments</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {commitments.map((commitment) => (
            <div key={commitment.id} className="flex flex-col items-center group cursor-pointer">
              
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 relative shadow-md">
                <img 
                  src={commitment.image} 
                  alt={commitment.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                   <h3 className="text-white text-xs md:text-sm font-bold tracking-widest">{commitment.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 group-hover:text-[#a51a70] transition-colors">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherCommitments;
