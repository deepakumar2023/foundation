import React, { useState } from 'react';

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
  },
  {
    id: 4,
    title: 'Healthcare Clinics in Remote Villages',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 5,
    title: 'Skill Development for Youth',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
    featured: false
  },
  
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftIndex = (activeIndex + 1) % stories.length;
  const rightIndex = (activeIndex + 2) % stories.length;

  const handleStoryClick = (index) => {
    setActiveIndex(index);
  };

  const handleChangeStories = () => {
    // Shifts the active index by 3 to show completely new images
    setActiveIndex((prev) => (prev + 3) % stories.length);
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-50/50 rounded-full -z-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Stories of Transformation</h2>
        <p className="text-text-muted mb-16 max-w-2xl mx-auto">Witness the real impact of our initiatives through the voices of those whose lives have been transformed.</p>

        <div className="flex justify-center items-center gap-6 relative">
          
          {/* Left Thumbnail */}
          <div 
            onClick={() => handleStoryClick(leftIndex)}
            className="hidden md:block w-1/4 transform scale-90 opacity-70 hover:opacity-100 hover:scale-95 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden relative shadow-lg"
          >
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
             <img src={stories[leftIndex].image} alt="Story" className="w-full h-[250px] object-cover" />
             <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
               <h4 className="text-white font-medium line-clamp-2 text-sm">{stories[leftIndex].title}</h4>
             </div>
          </div>

          {/* Center Featured Video */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer border-4 border-white z-10">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <img key={`center-${activeIndex}`} src={stories[activeIndex].image} alt="Featured Story" className="w-full h-[300px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 animate-fadeIn" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 z-20 text-left">
               <h3 className="text-white text-xl md:text-2xl font-bold mb-2 animate-slideUp">{stories[activeIndex].title}</h3>
               {/* Fixed the description to be generic or fetch from story if available, currently hardcoded in previous version */}
               <p className="text-gray-300 text-sm md:text-base animate-slideUp" style={{animationDelay: '0.1s'}}>Witness the real impact of our initiatives.</p>
            </div>
          </div>

          {/* Right Thumbnail */}
          <div 
            onClick={() => handleStoryClick(rightIndex)}
            className="hidden md:block w-1/4 transform scale-90 opacity-70 hover:opacity-100 hover:scale-95 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden relative shadow-lg"
          >
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
             <img src={stories[rightIndex].image} alt="Story" className="w-full h-[250px] object-cover" />
             <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
               <h4 className="text-white font-medium line-clamp-2 text-sm">{stories[rightIndex].title}</h4>
             </div>
          </div>
        </div>
        
        <div className="mt-12">
           <button 
             onClick={handleChangeStories}
             className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full transition-colors"
           >
            View More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
