import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const focusAreas = [
  {
    id: 'education',
    title: 'Education',
    description: 'We believe that education is the fundamental right of every child. Our programs aim to improve the quality of education and make it accessible to all.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Ensuring accessible and affordable healthcare for all. We operate mobile healthcare units and support rural clinics to bring medical aid to the doorsteps.',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'livelihood',
    title: 'Sustainable Livelihood',
    description: 'Empowering communities by enhancing their employability and entrepreneurial skills through vocational training and self-help groups.',
    img: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'infrastructure',
    title: 'Community Infrastructure',
    description: 'Building robust community infrastructure including check dams, drinking water facilities, and community halls to improve the quality of life.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4f50260f858?auto=format&fit=crop&q=80&w=1000'
  }
];

const CoreFocusAreas = () => {
  const [activeTab, setActiveTab] = useState(focusAreas[0]);

  return (
    <section className="py-20 bg-[#fbf5f9] relative">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Core Focus Areas</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Our interventions are focused on four core areas to create a holistic and sustainable impact.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-surface rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col p-2">
            {focusAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveTab(area)}
                className={`text-left px-8 py-6 rounded-2xl transition-all duration-300 font-medium text-lg border-b border-transparent ${
                  activeTab.id === area.id
                    ? 'bg-primary text-white shadow-md transform scale-[1.02] z-10'
                    : 'text-text-muted hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {area.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3 relative h-[400px] lg:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gray-900">
              <img 
                src={activeTab.img} 
                alt={activeTab.title} 
                className="w-full h-full object-cover opacity-80 animate-[fadeIn_0.5s_ease-out]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-4 animate-[slideUp_0.5s_ease-out]">
                {activeTab.title}
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-xl animate-[slideUp_0.5s_ease-out_0.1s_both]">
                {activeTab.description}
              </p>
              <button className="inline-flex items-center self-start px-6 py-3 bg-surface text-primary font-medium rounded-full hover:bg-gray-100 transition-colors animate-[slideUp_0.5s_ease-out_0.2s_both]">
                Know More <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFocusAreas;
