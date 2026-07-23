import React, { useState } from 'react';

const MomentsOfChange = () => {
  const videos = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=140",
      title: "Rural Infrastructure Development Highlights"
    },
    {
      id: 2,
      title: "Empowering Farmers Through Market Linkages",
      image: "https://picsum.photos/600/400?random=141"
    },
    {
      id: 3,
      title: "Clean Drinking Water Project in Gujarat",
      image: "https://picsum.photos/600/400?random=142"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full py-16 bg-[#f5ebf2] px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-text-main mb-12">Moments Of Change</h2>
        
        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {[...videos.slice(currentIndex), ...videos.slice(0, currentIndex)].map((video) => (
            <div key={video.id} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md bg-surface">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-surface/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#a51a70] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium text-text-main line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative w-full mb-10">
          <div className="overflow-hidden rounded-xl shadow-md bg-surface">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {videos.map((video) => (
                <div key={video.id} className="w-full shrink-0">
                  <div className="relative aspect-[4/3]">
                    <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-surface/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-[#a51a70] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                     <h3 className="text-sm font-medium text-text-main">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <button onClick={prevSlide} className="absolute top-[40%] -left-4 -translate-y-1/2 w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg text-text-muted hover:text-[#a51a70] z-10">
            &larr;
          </button>
          <button onClick={nextSlide} className="absolute top-[40%] -right-4 -translate-y-1/2 w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg text-text-muted hover:text-[#a51a70] z-10">
            &rarr;
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button onClick={prevSlide} className="w-10 h-10 rounded-full border-2 border-[#a51a70] flex items-center justify-center text-[#a51a70] hover:bg-[#a51a70] hover:text-white transition-colors">
             &larr;
          </button>
          <button onClick={nextSlide} className="w-10 h-10 rounded-full border-2 border-[#a51a70] flex items-center justify-center text-[#a51a70] hover:bg-[#a51a70] hover:text-white transition-colors">
             &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MomentsOfChange;
