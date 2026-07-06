import React from 'react';
import { FiPlay } from 'react-icons/fi';

const stories = [
  {
    id: 1,
    title: 'Transforming Education in Rural Gujarat',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: 2,
    title: 'Women Empowerment through Self Help Groups',
    image: 'https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&q=80&w=400',
    featured: false
  },
  {
    id: 3,
    title: 'Sustainable Farming Practices',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=400',
    featured: false
  }
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-50/50 rounded-full -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">Witness the real impact of our initiatives through the voices of those whose lives have been transformed.</p>

        <div className="flex justify-center items-center gap-6 relative">
          
          {/* Left Thumbnail (Previous) */}
          <div className="hidden md:block w-1/4 transform scale-90 opacity-70 hover:opacity-100 hover:scale-95 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
               <FiPlay className="text-white text-xl ml-1" />
             </div>
             <img src={stories[1].image} alt="Story" className="w-full h-[250px] object-cover" />
             <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
               <h4 className="text-white font-medium line-clamp-2 text-sm">{stories[1].title}</h4>
             </div>
          </div>

          {/* Center Featured Video */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer border-4 border-white z-10">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#8a2176] rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(138,33,118,0.5)] transform group-hover:scale-110 transition-transform duration-300">
              <FiPlay className="text-white text-3xl ml-2" />
            </div>
            <img src={stories[0].image} alt="Featured Story" className="w-full h-[300px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 z-20 text-left">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{stories[0].title}</h3>
              <p className="text-gray-300 text-sm md:text-base">Watch how education is changing futures.</p>
            </div>
          </div>

          {/* Right Thumbnail (Next) */}
          <div className="hidden md:block w-1/4 transform scale-90 opacity-70 hover:opacity-100 hover:scale-95 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden relative shadow-lg">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
               <FiPlay className="text-white text-xl ml-1" />
             </div>
             <img src={stories[2].image} alt="Story" className="w-full h-[250px] object-cover" />
             <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
               <h4 className="text-white font-medium line-clamp-2 text-sm">{stories[2].title}</h4>
             </div>
          </div>
        </div>
        
        <div className="mt-12">
           <button className="inline-flex items-center px-8 py-3 border-2 border-[#8a2176] text-[#8a2176] hover:bg-[#8a2176] hover:text-white font-medium rounded-full transition-colors">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
