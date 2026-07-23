import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ tag, title, author, image }) => {
  return (
    <div className="bg-[#faebf6] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full border border-[#f0d8e8]">
      
      <div className="flex flex-col mb-4">
        <div>
          <span className="text-[10px] text-[#a51a70] bg-surface font-bold tracking-widest uppercase mb-3 inline-block px-3 py-1.5 rounded-full shadow-sm border border-[#f0d8e8] hover:bg-[#a51a70] hover:text-white transition-colors cursor-default">
            {tag}
          </span>
          <h3 className="text-lg font-semibold text-text-main leading-snug mb-3 line-clamp-3 hover:text-[#a51a70] cursor-pointer transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#f0d8e8]/50">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden shadow-sm border-2 border-white">
           <img src={`/favicon.png`} alt="Author" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs text-text-muted font-medium tracking-wide uppercase">{author}</span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm cursor-pointer group mb-4 mt-auto">
        <img src={image} alt="Impact" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      <Link to="/contact-us" className="mt-auto text-sm font-semibold text-white bg-[#a51a70] px-4 py-2.5 rounded-xl hover:bg-[#861259] transition-colors text-center shadow-sm w-full block">
        Request Report
      </Link>

    </div>
  );
};

export default StoryCard;
