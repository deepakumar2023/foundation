import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const LeadershipMessages = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 xl:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Thoughts</h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gautam   */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <img
                src="https://www. foundation.org/-/media/Project/Foundation/Home/gautam- .png"
                alt="Gautam  "
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Shri Gautam  </h3>
            <p className="text-[var(--color-primary)] font-medium mb-6 uppercase tracking-wider text-sm">Chairman,   Group</p>
            <div className="relative">
              <svg className="w-8 h-8 text-gray-300 absolute -top-4 -left-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 text-lg italic leading-relaxed px-4">
                "We are continuously striving to make our communities better and more self-reliant. Our goal is to empower people so they can create a better future for themselves."
              </p>
            </div>
            <Link to="#" className="mt-8 text-[var(--color-primary)] hover:text-[#006b8c] font-medium inline-flex items-center group">
              Read Message <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dr. Priti   */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <img
                src="https://www. foundation.org/-/media/Project/Foundation/Home/priti- .png"
                alt="Dr. Priti  "
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Priti  </h3>
            <p className="text-[var(--color-primary)] font-medium mb-6 uppercase tracking-wider text-sm">Chairperson,   Foundation</p>
            <div className="relative">
              <svg className="w-8 h-8 text-gray-300 absolute -top-4 -left-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-gray-600 text-lg italic leading-relaxed px-4">
                "It is our privilege to work at the grassroots and witness the resilience of people. When given the right opportunities, their potential to transform their lives is immense."
              </p>
            </div>
            <Link to="#" className="mt-8 text-[#8a2176] hover:text-[#6c175b] font-medium inline-flex items-center group">
              Read Message <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;
