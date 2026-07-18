import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      {/* Banner Section */}
      <div className="bg-[#fdf8f4] w-full pt-20 pb-24 px-4 md:px-8 lg:px-16 relative">
        <div className="text-sm text-text-muted mb-8 max-w-7xl mx-auto">
          <Link to="/" className="hover:text-[#e87030] transition-colors">Home</Link> &gt; <span className="text-[#e87030]">About Us</span>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-light text-text-main mb-6 tracking-wide">
            Empowering Communities,<br />Enriching Lives
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed">
            For over two decades, we have been working passionately to build a sustainable, inclusive, and equitable future for all. Through grassroots initiatives, we aim to bridge the gap between potential and progress.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#ffeed0] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#ffe4d0] rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 rounded-2xl bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-[#fff3e0] text-[#e87030] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-medium text-text-main mb-3">Pan-India Reach</h3>
            <p className="text-text-muted font-light text-sm leading-relaxed">Impacting millions of lives across multiple states, focusing on rural and remote areas to bring inclusive growth.</p>
          </div>

          <div className="p-8 rounded-2xl bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-[#e0f7fa] text-[#00838f] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="text-xl font-medium text-text-main mb-3">Core Themes</h3>
            <p className="text-text-muted font-light text-sm leading-relaxed">Dedicated focus on Education, Health, Sustainable Livelihoods, and Climate Action for holistic community development.</p>
          </div>

          <div className="p-8 rounded-2xl bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-[#f3e5f5] text-[#8e24aa] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-xl font-medium text-text-main mb-3">Community First</h3>
            <p className="text-text-muted font-light text-sm leading-relaxed">Working closely with local communities to understand their needs and co-create sustainable, impactful solutions.</p>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-light text-text-main mb-12 text-center">Explore Who We Are</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/about-us/our-story" className="group block relative overflow-hidden rounded-2xl aspect-[16/9]">
              <img src="https://picsum.photos/800/450?random=1" alt="Our Story" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-light text-white mb-2">Our Story</h3>
                <p className="text-gray-200 font-light text-sm mb-4">Discover our journey of creating sustainable change.</p>
                <div className="inline-flex items-center text-white text-sm font-medium">
                  Read More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>

            <div className="group block relative overflow-hidden rounded-2xl aspect-[16/9] cursor-pointer">
              <img src="https://picsum.photos/800/450?random=2" alt="Leadership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-light text-white mb-2">Our Leadership</h3>
                <p className="text-gray-200 font-light text-sm mb-4">Meet the visionaries guiding our initiatives.</p>
                <div className="inline-flex items-center text-white text-sm font-medium">
                  Coming Soon
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
