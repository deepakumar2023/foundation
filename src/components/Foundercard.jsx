import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

function Foundercard() {
  return (
   <div className="pt-1">
          <div className="max-w-4xl mx-auto bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            
            {/* Image */}
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#b68d40] p-1 shadow-sm">
                <img src="/deepakgupta.jpeg" alt="deepakgupta" className="w-full h-full rounded-full object-cover"  />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-[32px] font-semibold text-black mb-3">Deepak Gupta</h3>
              <p className="text-[#0080A8] font-medium text-[17px] mb-5">Founder & Managing Director, M DAS Group of Industries</p>
              <p className="text-[#6b7280] text-[15px] leading-[1.8] mb-8">
                Deepak Gupta is the Founder and Director of M DAS Group of Industries, a mission-driven conglomerate built around manufacturing, healthcare equity, and industrial-scale solutions. He is regularly counted among the visionary leaders in India's emerging industrial landscape.
              </p>
              <Link to="/founder-profile" className="inline-flex items-center gap-2 text-[#0080A8] font-bold text-[13px] tracking-[0.15em] uppercase hover:text-[#0080A8] transition-colors">
                READ FULL PROFILE <FiArrowRight className="text-lg" />
              </Link>
            </div>

          </div>
        </div>
  )
}

export default Foundercard