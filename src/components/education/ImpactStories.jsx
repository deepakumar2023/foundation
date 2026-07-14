import React from 'react';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: " Deepak gupta Vidya Mandir, A Model Institution For Quality...",
      author: "By Deepak gupta  Foundation",
      image: "https://picsum.photos/400/300?random=30"
    },
    {
      id: 2,
      title: "Uddaan Project Provides Flight To Dreams Of Children In...",
      author: "By Team Media",
      image: "https://picsum.photos/400/300?random=31"
    },
    {
      id: 3,
      title: "An Educational Initiative That Provides Free Holistic...",
      author: "By Editorial Team",
      image: "https://picsum.photos/400/300?random=32"
    },
    {
      id: 4,
      title: "Project Utthan Sets An Example For Uplifting Quality Of...",
      author: "By Team Communications",
      image: "https://picsum.photos/400/300?random=33"
    }
  ];

  return (
    <div className="w-full py-16 bg-[#fcf8fa] px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-12">Impact Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-[#faebf6] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">

              <div className="mb-6">
                <span className="text-xs text-[#a51a70] font-medium tracking-wider uppercase mb-3 inline-block">EDUCATION</span>
                <h3 className="text-sm font-medium text-gray-800 leading-snug mb-3 line-clamp-3">
                  {story.title}
                </h3>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${story.author}&background=random`} alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{story.author}</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img src={story.image} alt="Impact" className="w-full h-full object-cover" />
              </div>

            </div>
          ))}
        </div>

        {/* Carousel controls (Visual representation based on design) */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#a51a70] hover:border-[#a51a70] transition-colors">
            &larr;
          </button>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#a51a70]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#a51a70] hover:border-[#a51a70] transition-colors bg-[#a51a70] text-white">
            &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImpactStories;
