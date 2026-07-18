import { FiChevronRight, FiChevronDown, FiArrowRight, FiChevronLeft } from "react-icons/fi";

const MediaCoverage = () => {
  return (
    <div className="pt-[100px] md:pt-[120px] lg:pt-[140px] pb-[80px] md:pb-[120px] bg-[#f8f9fa] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[32px] lg:px-[48px]">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-[8px] mb-[32px] font-bold text-[14px] text-text-muted">
          <a className="hover:text-[#00204f] transition-colors" href="/">Home</a>
          <FiChevronRight className="text-[14px]" />
          <span className="text-[#00204f]">Media Coverage</span>
        </nav>

        {/* Title and Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px] mb-[48px]">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#00204f]">Media Coverage</h1>
          <div className="relative w-full md:w-[256px]">
            <select className="w-full appearance-none bg-surface border border-gray-300 rounded-[8px] px-[16px] py-[12px] text-[16px] font-medium text-text-main focus:outline-none focus:ring-2 focus:ring-[#00204f]/20 focus:border-[#00204f] transition-all cursor-pointer">
              <option value="2025">Select Year: 2025</option>
              <option value="2024">Select Year: 2024</option>
              <option value="2023">Select Year: 2023</option>
              <option value="2022">Select Year: 2022</option>
            </select>
            <FiChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-[20px]" />
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {/* Card 1 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Jul 23, 2025</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">Deepak Gupta Foundation | Education Excellence Initiative</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Education Excellence Initiative" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-_zLFjBRKK5_L18lhd6M-ogIkvwGfdhfwiunOYEmtqpa8aQNlrFjkXb0weoAc5sDkNlbr8h4kgnG5U7djQOhkqOgi9xA0vihuUWJJjsf3wfbdtNKEqHiuU12ciRSIoan9Volzp2NWdccaHMAqVNIEHLyTKe4xNMMij2x1KU6dE-h-JpkcRQHdSryPtC5y5n8RoTVD1yFjFaoWMgfOeeXjW0jiWL05vpOKBSvFX7RPkGZeG4bBfl6XNpMy4w_vhHwV0cCb2JByp2WJ"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Jun 01, 2025</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">Foundation and DMIHER Collaboration Announcement</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Foundation and DMIHER Collaboration Announcement" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdco1_i-il1P7xLi-wKvP5ldKPUEwg8sBxIGkbkrPT-65RL1J0zCthArgHxKxyKQNHbExS8E1mHfJ_4JNuIKpU9YXRPZbZ7qftG2qh7p9hXQuOoLkiBXnHD7TSrnp2XFLr_buSUvt_-kctJ20hXPWeKPVPlvTNPnV9Pe9yCJEA_T0aQ9kfXt8pHaE7QP1Ysg4T_ZuWwM_LR5KOKeNi4ArzJSuxp1cVb1dK2IfN4yNzrVxW06BMeimC5otod78DT0EiauwyKB0OoWzP"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Apr 08, 2025</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">17,000+ Lives Impacted Through Vision Care</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="17,000+ Lives Impacted Through Vision Care" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGk-hmNbuofwHCv4QE6VPdSRlwppPiEugzuvixKkx8NcS0ITnHYdLuaUPRiz7uQwpGCBXqR1JBHYQmgPJAVrfHQQ3NS38ZX-iNhluKmtXEGs8tNHKt5Zvn4h0dHKmYiHVmkfRP4iyDXQZmPId70Cmn-SLfiCF1pygcWNGD5ndaZQWAvHcC2u2f-Brwa2Hrqeq-FMjCL5w8bWTjXIjdHl5A7BOBQUa7G6lHUSVPW0v7_Ra-pvOPaKYWtgCUS_ClErscRFHBd3YFN07l"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Apr 01, 2025</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">Solar Initiative in Rural Communities: Lighting Futures</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Solar Initiative in Rural Communities: Lighting Futures" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4b1L9X31RlUF0V0QE_oi-xKqVgfbZEeZCtjgBH2_CKMZNwDldZZwmOT4brEyyOyXBUz68-qbrLuxk0GeTRPCve5lKl2M4OxFFnEaX9gktqB5KhLn297TwmVQB5YJOBZiwas6z9cZGeOh18d5Dkf0Z7qLpBiIiUujkGdQEY0HMvj9F0Ro8kfICjjTuHql3A4mDTMX5Qb--bYaS7igM2l4lFhqPYuthq2sq0JEef68mgRCsLG5IXF_rJsG-c9gxx3P-UzJKAvIQJu4k"
                />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Jan 01, 2025</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">Empowering Futures: 1,500+ Women Livelihoods</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Empowering Futures: 1,500+ Women Livelihoods" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjCRxH0mpAwJG4xEY0BJH3QX5X5XCc7pJxO1OcsQMLXENaKStQBSvpTSyqqJ-ZcowLw6eqgfHHxK4Xu5ePAVm5cg7Mz0KL7Q6ZxMKK3RRVtQFDiZJS0qOk3rbMUYUizaIWuIIeN79SN3Dqqdg2HAGAfZvf0UaXpq3jPQcYTx6rymouBamA0Y9MooaZL6DyShcBgApAvDQ_g5jtMNdd_J5pttj3u5AVjdZCuIMO2XPA8URW4UWpfWLuF3ABjxmD_SHBaqHLi-eXQp9i"
                />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-surface rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-[32px] pb-[16px] flex flex-col flex-grow">
              <span className="font-bold text-[14px] text-[#f88034] mb-[12px] block">Dec 29, 2024</span>
              <h3 className="text-[24px] font-bold leading-tight text-[#00204f] mb-[24px] line-clamp-2">Academic Excellence Programs Scale New Heights</h3>
              <a className="flex items-center gap-[12px] font-bold text-[14px] text-text-muted hover:text-[#00204f] transition-colors group/link mt-auto" href="#">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center transition-all group-hover/link:bg-[#00204f] group-hover/link:text-white">
                  <FiArrowRight className="text-[20px]" />
                </div>
                <span>Read</span>
              </a>
            </div>
            <div className="px-[24px] pb-[24px] mt-[16px]">
              <div className="aspect-[16/10] rounded-[8px] overflow-hidden bg-gray-200 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Academic Excellence Programs Scale New Heights" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsvytvHpegfBIOj375tWlNBjysfM1Zh9ZZYqO6ofnkwo61CwJbap5r6nWDNrHHAOehlxRiOcOs3G3c0ryYWyoiGw1e99MhzwC3bAA3Z7EQmlty05OjMnDkMvo9tX9FIQWf6NtrASZDGh2yt30-9CVUhr9zdTyShDA8KhCblWivZhpnMOA1IdLTwM1HKLVXtxVCZ92SiMMG7hzGhP0i6WtuCdzXfqjDyYSzt-cXcnNntbA3o_oNC0Qb6M7tv3OjvxhmFXg8BcBB12dk"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-[64px] gap-[12px]">
          <button className="w-[48px] h-[48px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:border-[#00204f] hover:text-[#00204f] transition-all">
            <FiChevronLeft className="text-[24px]" />
          </button>
          <button className="w-[48px] h-[48px] rounded-[8px] bg-[#00204f] text-white flex items-center justify-center font-bold text-[14px]">1</button>
          <button className="w-[48px] h-[48px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:border-[#00204f] hover:text-[#00204f] transition-all font-bold text-[14px]">2</button>
          <button className="w-[48px] h-[48px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:border-[#00204f] hover:text-[#00204f] transition-all font-bold text-[14px]">3</button>
          <button className="w-[48px] h-[48px] rounded-[8px] border border-gray-300 flex items-center justify-center hover:border-[#00204f] hover:text-[#00204f] transition-all">
            <FiChevronRight className="text-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
