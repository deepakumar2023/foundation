import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const updates = [
  {
    id: 1,
    platform: 'twitter',
    author: '  Foundation',
    handle: '@ Foundation',
    date: 'Oct 12',
    content: 'We are thrilled to announce our new initiative in skill development, aiming to empower 10,000 youth this year. #EmpoweringIndia #SkillIndia',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 2,
    platform: 'linkedin',
    author: '  Foundation',
    handle: ' -foundation',
    date: 'Oct 10',
    content: 'Our Swachhagraha project continues to make waves in promoting cleanliness and sanitation across rural schools. See the impact.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 3,
    platform: 'twitter',
    author: '  Foundation',
    handle: '@ Foundation',
    date: 'Oct 08',
    content: 'Celebrating the success of our SuPoshan Sanginis who are working tirelessly to eradicate malnutrition. #HealthForAll',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
];

const Updates = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Updates</h2>
            <p className="text-gray-600">Stay connected with our latest initiatives and stories of change.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-[#8a2176] font-medium hover:underline">
            View All Updates <FiExternalLink className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update) => (
            <div key={update.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <img src="https://www. foundation.org/-/media/Project/Foundation/Header/Logo.svg" alt="Logo" className="w-full h-full object-cover p-1 bg-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{update.author}</h4>
                      <p className="text-gray-500 text-xs">{update.handle} · {update.date}</p>
                    </div>
                  </div>
                  <div className={`text-xl ${update.platform === 'twitter' ? 'text-[#1DA1F2]' : 'text-[#0A66C2]'}`}>
                    {update.platform === 'twitter' ? <FaTwitter /> : <FaLinkedin />}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                  {update.content}
                </p>
              </div>

              {/* Image */}
              {update.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img src={update.image} alt="Update" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-[#8a2176] text-[#8a2176] font-medium rounded-full hover:bg-pink-50 transition-colors">
            View All Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Updates;
