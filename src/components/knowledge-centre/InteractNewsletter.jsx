import { FiChevronDown, FiClock, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const InteractNewsletter = () => {
  return (
    <div className="pt-[0px] md:pt-[0px] lg:pt-[0px] bg-[#f8f9fa] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/interact-newsletter.jpeg')" }}
        ></div>
        <div className="relative z-10 text-center px-[24px] max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-[40px] md:text-[60px] font-bold text-white mb-[16px] leading-tight">
            Interact Newsletter
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/90 tracking-wide max-w-2xl mx-auto">
            Inclusive. Sustainable. Transformative.
          </p>
          <div className="mt-[48px] animate-bounce">
            <FiChevronDown className="text-white text-[36px]" />
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="px-[4px] max-w-[1440px] mx-auto py-[10px] md:py-[10px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[48px] gap-[16px]">
          <div>
            <div className="flex items-center gap-[12px] mb-[8px]">
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#00204f]">Featured Stories</h2>
              <span className="bg-[#ffdbca] text-[#331200] text-[10px] font-bold px-[8px] py-[2px] rounded-sm tracking-widest uppercase">NEW</span>
            </div>
            <p className="text-[16px] text-gray-600">The latest narratives of change from the foundation.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] font-bold text-gray-500">Sort by:</span>
            <select className="border border-gray-300 bg-white rounded-[8px] text-[14px] font-bold px-[16px] py-[8px] focus:outline-none focus:ring-1 focus:ring-[#00204f] focus:border-[#00204f] cursor-pointer">
              <option>Q1, 2026-27</option>
              <option>Q4, 2025-26</option>
            </select>
          </div>
        </div>
        <div className="space-y-[64px] max-w-4xl">
          {/* Story 1 */}
          <article className="group">
            <h3 className="text-[24px] md:text-[32px] font-bold text-gray-900 mb-[12px] group-hover:text-[#00204f] transition-colors cursor-pointer leading-tight">
              25 Years of Deepak Gupta Foundation: A Walk Back to Where It All Began
            </h3>
            <p className="text-[16px] text-gray-600 mb-[16px] leading-relaxed">
              For each one of us, our journey with the foundation spans nearly 25 years. Looking back at the first brick laid and the first child enrolled, the transformation of these communities represents our core commitment to long-term impact and sustainable development.
            </p>
            <div className="flex items-center gap-[16px] text-[14px] font-bold text-gray-500 mb-[16px]">
              <span className="flex items-center gap-[4px]"><FiClock className="text-[14px]" /> 1 min read</span>
              <span>•</span>
              <span>Q1, 2026-27</span>
            </div>
            <a className="inline-flex items-center gap-[8px] text-[#00204f] font-bold hover:underline" href="#">
              Read More <FiArrowRight className="text-[14px]" />
            </a>
            <div className="mt-[48px] h-px bg-gray-200"></div>
          </article>

          {/* Story 2 */}
          <article className="group">
            <h3 className="text-[24px] md:text-[32px] font-bold text-gray-900 mb-[12px] group-hover:text-[#00204f] transition-colors cursor-pointer leading-tight">
              Mothers' Meet: An Initiative that Puts Mothers at the Centre of Children's Education
            </h3>
            <p className="text-[16px] text-gray-600 mb-[16px] leading-relaxed">
              There is no shelter like a mother, no guidance like hers. There is no protector greater than her, and no one dearer. Our initiative focuses on empowering women as the primary catalysts for educational excellence in rural districts.
            </p>
            <div className="flex items-center gap-[16px] text-[14px] font-bold text-gray-500 mb-[16px]">
              <span className="flex items-center gap-[4px]"><FiClock className="text-[14px]" /> 1 min read</span>
              <span>•</span>
              <span>Q1, 2026-27</span>
            </div>
            <a className="inline-flex items-center gap-[8px] text-[#00204f] font-bold hover:underline" href="#">
              Read More <FiArrowRight className="text-[14px]" />
            </a>
            <div className="mt-[48px] h-px bg-gray-200"></div>
          </article>

          {/* Story 3 */}
          <article className="group">
            <h3 className="text-[24px] md:text-[32px] font-bold text-gray-900 mb-[12px] group-hover:text-[#00204f] transition-colors cursor-pointer leading-tight">
              Listening, Learning, and Growing: A Month-long Internship Experience
            </h3>
            <p className="text-[16px] text-gray-600 mb-[16px] leading-relaxed">
              For each one of us, our first experiences are always special – first day at college, first job, first paycheck etc. For me, as a student of Mass Communication, my first internship at the Deepak Gupta Foundation was a journey of profound discovery.
            </p>
            <div className="flex items-center gap-[16px] text-[14px] font-bold text-gray-500 mb-[16px]">
              <span className="flex items-center gap-[4px]"><FiClock className="text-[14px]" /> 1 min read</span>
              <span>•</span>
              <span>Q1, 2026-27</span>
            </div>
            <a className="inline-flex items-center gap-[8px] text-[#00204f] font-bold hover:underline" href="#">
              Read More <FiArrowRight className="text-[14px]" />
            </a>
          </article>
        </div>
      </section>

      {/* Latest Updates Section (Grid Cards) */}
      <section className="bg-gray-50 py-[10px] md:py-[20px]">
        <div className="px-[24px] max-w-[1440px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#00204f] mb-[48px]">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {/* Update Card 1 */}
            <div className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-[224px] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="25 Years of Deepak Gupta Excellence" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKjd2eP6D2qZVQKcDTKBQlumcm-VpHNzwqhxgc2iLFN-uVCHKXpvaJZwWrctlRUV5-b2k2vZANyaHMSsfj-B28krFptuX8VpvFr2-OtkEfjENzwmkj9uFmHj_ItNRGg7XituAH-O7NU2CkIetedVExHqcwxHtuso3BnM_EW4pkGpZ57FirO9nGvUlbstsSZiJVXTKmfP25F0p_Af-biJlp-5J4o0ZfFC1uf14PogfjKxMieUwIwpisj-H7pV5qdkV-zdFc6YeIeoz3"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h4 className="text-[20px] font-bold leading-tight mb-[12px] text-gray-900 group-hover:text-[#00204f] transition-colors">
                  Celebrating 25 Years of Deepak Gupta Excellence
                </h4>
                <p className="text-[16px] text-gray-600 mb-[24px] line-clamp-2">
                  The foundation marks a quarter-century of sustainable growth and community empowerment initiatives.
                </p>
                <div className="flex items-center justify-between text-gray-500 font-bold text-[14px] mt-auto">
                  <span>1 min read</span>
                  <span>Q1, 2026-27</span>
                </div>
              </div>
            </div>

            {/* Update Card 2 */}
            <div className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-[224px] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Rural Vision Project" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfEjhfvaYJmgbZZt1RMLJJC9QQffjRCZZxnUldkIR9HLl05WJHS0JaFRv5UoKeZhPi_4b_fjVwpHo2omzy4JOuYA7YeLjmAAWix8h-nYyJ2DPccpVnBc86AT7p4ODPT5-5lPAuYVK0fP7__1NOpWWgpyGSgxkvse-B7G8uNcb4L6b6EWz_gYF1DquzL7uxA2y-IvqFg0ch-VsrnB1BcNV-mCD9rGDdstVFiBYfY17IH5MN3Qkdtydwh6y_lVDvG42SxUngEN6atGls"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h4 className="text-[20px] font-bold leading-tight mb-[12px] text-gray-900 group-hover:text-[#00204f] transition-colors">
                  Mr. Deepak Gupta Launches Rural Vision Project
                </h4>
                <p className="text-[16px] text-gray-600 mb-[24px] line-clamp-2">
                  Inspired by the philosophy of selfless service, a new initiative aims to reach 1 million rural citizens.
                </p>
                <div className="flex items-center justify-between text-gray-500 font-bold text-[14px] mt-auto">
                  <span>1 min read</span>
                  <span>Q1, 2026-27</span>
                </div>
              </div>
            </div>

            {/* Update Card 3 */}
            <div className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-[224px] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Vision Care Initiatives" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtgW6ittuKP_RGiR-peRlaYvk39xAZId2WoMzZiUOA7syGSUXE1YtioVNXKQbdzWWcxq_ODaCdq8RnyeK5r7-AvjGZhsl9dhfXn8UcstjG7-XisOEjHsc2ZT7L_WP51GOMmo1dKAs68-8IVRcoP_6I3ho0DLujZ1-ApEswPs3IFcsNaU_AVC9to20ic7Nxv8MIm4NjF9daasmMaSORgACaXEVmBI5nZj9Ukz3gBZf9WFfqgGWeM9sdSkuUiXo3YQmgt6_rd5CnhdG6"
                />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h4 className="text-[20px] font-bold leading-tight mb-[12px] text-gray-900 group-hover:text-[#00204f] transition-colors">
                  Vision Care Initiatives Expand To Remote Districts
                </h4>
                <p className="text-[16px] text-gray-600 mb-[24px] line-clamp-2">
                  Bringing state-of-the-art diagnostic equipment to the most underserved communities in Madhya Pradesh.
                </p>
                <div className="flex items-center justify-between text-gray-500 font-bold text-[14px] mt-auto">
                  <span>1 min read</span>
                  <span>Q1, 2026-27</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-[0px] md:py-[10px] bg-white">
        <div className="px-[24px] max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center mb-[48px]">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#00204f] mb-[8px]">Photo Gallery</h2>
              <p className="text-[16px] text-gray-600">Highlights of Q1, 2026-27</p>
            </div>
            <div className="flex gap-[8px]">
              <button className="w-[48px] h-[48px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FiChevronLeft className="text-[24px] text-gray-600" />
              </button>
              <button className="w-[48px] h-[48px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <FiChevronRight className="text-[24px] text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <div className="space-y-[16px]">
              <div className="rounded-[12px] overflow-hidden h-[288px]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  alt="Annual Blood Donation Drive 2026" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ktS2ERrBXiul_x75XYwHGoHrPH7oz6L8TH6uf5Kin-j6LhFV61pQsbtWxflUG76nIndyyEkbnx_QDMrWy5lVua-Mty9sIkuPkuInd4yF2JJbg2oVQuGkgoTO4XPP2qGU_J6DwRfYAo8OtkVMtGV0FoxBB0gU6QHk1pqgU_8VZu0n83V5JTFe11ICYZXWzZRwh1kFLL4Y3cmCaM-rIYkvs3z0hqBtVvyMjCwmkHCltgci9sj1pEZPVWCDZSaT1DCzdvXA6f0hPe7p"
                />
              </div>
              <h5 className="text-[18px] font-bold text-gray-900">Annual Blood Donation Drive 2026</h5>
            </div>
            
            <div className="space-y-[16px]">
              <div className="rounded-[12px] overflow-hidden h-[288px]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  alt="Expanding Clubfoot Care for Children" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yKDlV332Yoza3EbnkOTjPg2AHO0e_x9ORbu7gnoWywXijp9qBRy0TyJSaDFJu2A7Hq_ptVz13ihocH3OBMtmFEcT8R1eTRPyciKPkm3DPVM3tuk5hbEvixBIfsIREaFHaFXO5KtjRn2bkk-2suSeKYrcFeQ89v8cobfv7TCD_scDqfrJlYNteC4FNDfAZXKnuoWgIUJkuNXcPhkagNLCZlzG2xrorJ67yXDjpSLLhQFYhdKmIZhqBsemm2gLuh9NWN0jPdvX-MLs"
                />
              </div>
              <h5 className="text-[18px] font-bold text-gray-900">Expanding Clubfoot Care for Children</h5>
            </div>
            
            <div className="space-y-[16px]">
              <div className="rounded-[12px] overflow-hidden h-[288px]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  alt="Skilling India's Youth through SAKSHAM" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2fGXlgbo14ER0cuYFRLUnCjuP3eQOIXqQ4E1XCg3TYbmmQEFneWaAkhEHqr8KeyGGa3P6STLWZiE6W2NcvHbPl_Cffk6nctA6cur6F4UoBk1f8pHuFSrsI37LlNL4cIIsTKfbQNpljNgWZC6U5YdG8iLyCuraPUfKxc5vd39sVSOyYURAHc8fS7aVv-4o8WCeRBLIE1RoxA6lnNVgNKtfQMUOIRt_lxanfgMp5W-45GIUE7s2GhZAsv-0OwLziny1ogdqeIfEs_vm"
                />
              </div>
              <h5 className="text-[18px] font-bold text-gray-900">Skilling India's Youth through SAKSHAM</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractNewsletter;
