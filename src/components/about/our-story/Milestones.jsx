import React, { useState } from 'react';

const Milestones = () => {
  const years = ['19 April 2022', '9 February 2023', '2023 – 2025', '2 June 2026', '2026 onward'];

  const milestonesData = {
    '19 April 2022': {
      image: "https://picsum.photos/600/400?random=330",
      bullets: [
        "Deepak Gupta Foundation incorporated as a Section 8 company under the Companies Act, 2013"
      ]
    },
    '9 February 2023': {
      image: "https://picsum.photos/600/400?random=331",
      bullets: [
        "Foundation formally listed on the NGO Darpan portal of NITI Aayog (Unique ID: DL/2023/0337627)"
      ]
    },
    '2023 – 2025': {
      image: "https://picsum.photos/600/400?random=332",
      bullets: [
        "Grassroots programme delivery across food distribution, stray animal welfare, and small-scale plantation"
      ]
    },
    '2 June 2026': {
      image: "https://picsum.photos/600/400?random=333",
      bullets: [
        "Foundation receives 12A/80G tax exemption registration from the Income Tax Department"
      ]
    },
    '2026 onward': {
      image: "https://picsum.photos/600/400?random=334",
      bullets: [
        "Launch of the flagship Tree Plantation Initiative, targeting 12,000 trees across North West and East Delhi"
      ]
    }
  };

  const [activeYear, setActiveYear] = useState('19 April 2022');

  const handleNext = () => {
    const currentIndex = years.indexOf(activeYear);
    if (currentIndex < years.length - 1) {
      setActiveYear(years[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = years.indexOf(activeYear);
    if (currentIndex > 0) {
      setActiveYear(years[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-16 tracking-wide">
          Milestones Of Change
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">

          {/* Left: Timeline Controller */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center justify-between md:justify-start gap-4">

            <button
              onClick={handlePrev}
              disabled={activeYear === years[0]}
              className={`w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center transition-colors ${activeYear === years[0] ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#a51a70] hover:text-[#a51a70]'}`}
            >
              <svg className="w-4 h-4 md:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="flex flex-row md:flex-col gap-6 md:gap-8 my-0 md:my-6 items-center">
              {years.map((year) => (
                <div
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  {activeYear === year ? (
                    <>
                      <div className="w-3 h-3 rounded-full bg-[#a51a70] shrink-0"></div>
                      <span className="text-xl font-light text-[#a51a70]">{year}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 rounded-full border border-gray-400 group-hover:border-[#a51a70] shrink-0"></div>
                      <span className="text-sm font-medium text-gray-400 group-hover:text-[#a51a70] transition-colors">{year}</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeYear === years[years.length - 1]}
              className={`w-8 h-8 rounded-full bg-[#a51a70] text-white flex items-center justify-center transition-colors ${activeYear === years[years.length - 1] ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#861259]'}`}
            >
              <svg className="w-4 h-4 md:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

          </div>

          {/* Center: Image */}
          <div className="w-full md:w-2/4">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/2] md:aspect-[4/3] w-full relative">
              <img
                key={activeYear} // Force re-render for animation if wanted
                src={milestonesData[activeYear].image}
                alt={`Milestone ${activeYear}`}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </div>

          {/* Right: Bullet Points */}
          <div className="w-full md:w-1/4 pt-4 md:pt-0">
            <ul className="space-y-6">
              {milestonesData[activeYear].bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#a51a70] mt-1 shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Milestones;
