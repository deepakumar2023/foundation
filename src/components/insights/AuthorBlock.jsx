import React from 'react';

const AuthorBlock = () => {
  return (
    <div className="mt-16 p-8 bg-white border border-[#c5c6cd] shadow-sm relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5963A]/5 rounded-bl-[100%] z-0"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-24 h-24 bg-gradient-to-br from-[#001F3F] to-[#1A2B45] rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif text-[28px] font-bold shadow-md">
          DG
        </div>
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#C5963A] mb-2">About the Author</h4>
          <h5 className="font-serif text-[22px] font-bold text-[#001F3F] mb-3">Deepak Gupta</h5>
          <p className="text-[#45474c] text-[15px] leading-[26px]">
           Deepak Gupta is the Founder and Director of M DAS Group of Industries, a mission-driven conglomerate built around manufacturing, healthcare equity, and industrial-scale solutions. He is regularly counted among the visionary leaders in India's emerging industrial landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorBlock;
