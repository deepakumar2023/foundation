import React from 'react';
import { Link } from 'react-router-dom';

const OtherCommitments = () => {
  const commitments = [
    {
      id: 1,
      title: "EDUCATION",
      path: "/impact-themes/education",
      image: "https://picsum.photos/400/400?random=10"
    },
    {
      id: 2,
      title: "COMMUNITY DEVELOPMENT",
      path: "/impact-themes/community-development",
      image: "https://picsum.photos/400/400?random=11"
    },
    {
      id: 3,
      title: "CLIMATE ACTION",
      path: "/impact-themes/climate-action",
      image: "https://picsum.photos/400/400?random=12"
    },
    {
      id: 4,
      title: "SUSTAINABLE LIVELIHOODS",
      path: "/impact-themes/sustainable-livelihoods",
      image: "https://picsum.photos/400/400?random=13"
    }
  ];

  return (
    <div className="w-full py-16 bg-surface px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-text-main mb-16">Explore Other Commitments</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {commitments.map((commitment) => (
            <Link to={commitment.path} key={commitment.id} className="flex flex-col items-center group cursor-pointer block">
              
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

              <div className="flex items-center gap-2 text-text-muted group-hover:text-primary transition-colors">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherCommitments;
