import { FiChevronRight, FiChevronDown, FiArrowRight } from "react-icons/fi";

const PressReleases = () => {
  return (
    <div className="pt-[100px] md:pt-[120px] lg:pt-[140px] bg-[#f8f9fa] min-h-screen">
      {/* Breadcrumbs Section */}
      <div className="bg-surface py-4 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center gap-2 text-sm font-medium text-text-muted">
          <a href="/" className="hover:text-[#00204f] transition-colors">Home</a>
          <FiChevronRight className="text-sm" />
          <span className="text-[#00204f] font-bold">Press Releases</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Header & Filters */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00204f] mb-8">
            Press Releases
          </h1>
          <div className="flex flex-col md:flex-row gap-4 border-b border-gray-200 pb-8">
            <div className="relative w-full md:w-64">
              <select className="w-full appearance-none bg-surface border border-gray-300 rounded-md px-4 py-3 text-sm font-medium text-text-main cursor-pointer focus:outline-none focus:border-[#00204f] focus:ring-1 focus:ring-[#00204f] transition-colors">
                <option>Select Category</option>
                <option>Education</option>
                <option>Environment</option>
                <option>Healthcare</option>
                <option>Sustainability</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-lg" />
            </div>
            <div className="relative w-full md:w-64">
              <select className="w-full appearance-none bg-surface border border-gray-300 rounded-md px-4 py-3 text-sm font-medium text-text-main cursor-pointer focus:outline-none focus:border-[#00204f] focus:ring-1 focus:ring-[#00204f] transition-colors">
                <option>Select Year</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-lg" />
            </div>
          </div>
        </header>

        {/* Press Release Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Card 1 */}
          <article className="group cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-gray-100 relative aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Blood Donation Drive" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2WZ5JS7QQL_YxjNchZmvA45p8W3ISfZqL8T6VaVhQX918ekykHjGltGp53NHsFB6E0woWs3gri6dwrRmMlPtYoUstNo_qFx0txqmG845KzbSzwNn8S10NeWrMvIFgklNU7-s6TapPAQQ85H-xoRrsdkGVzGRsEpYmxM8byWdw6dj5m1rtzAlC9GWjctrfPDvBh-06iQS_c-IZZm5FWUNP_-D_M-kz2FJBVROhr_1J84r0ZCaQXMMApd8Ryz5OmVXucXsTRs3QBwsh"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-widest">
                    Foundation News
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-[#00204f] leading-snug group-hover:text-[#1a3668] transition-colors line-clamp-4 mb-4">
                    Deepak Gupta Foundation Marks Deepak Gupta's 64th Birthday with Nationwide Blood Donation Drive
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-[#00204f] font-bold group-hover:gap-3 transition-all">
                    <div className="w-8 h-8 rounded-full border-2 border-[#00204f] flex items-center justify-center">
                      <FiArrowRight className="text-sm" />
                    </div>
                    <span className="text-sm">Read</span>
                  </div>
                  <span className="text-xs font-medium text-text-muted">
                    Jun 26, 2026
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-gray-100 relative aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Medical Outreach Program" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPpRvWZh3sK0kuyLMDa-HYGDJ-XtjHYbzfjJIdH1y571t7qOiloZYxomih9KTbIvYm6ByJVFbVfysG8vhGZOf3ju8chvXUQiWDZISLWwteItYfh5eglrbLpXciKNwqzDi_qlfzEQNuvuLEs_OwvdF5ElDSedPlz7ZIK2VIZ6Lm3gomjxgXliL586NCm2cxgXiAGaSx2tqZZ_lcVtNdq-jWdCpwRFWp1xRigmpYGh001zplurGI3bM2xY-Dqa6YFTfO--ti6gaopQx"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-widest">
                    Partnerships
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-[#00204f] leading-snug group-hover:text-[#1a3668] transition-colors line-clamp-4 mb-4">
                    Deepak Gupta Foundation partners with Anushka Foundation to strengthen clubfoot care across five states
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-[#00204f] font-bold group-hover:gap-3 transition-all">
                    <div className="w-8 h-8 rounded-full border-2 border-[#00204f] flex items-center justify-center">
                      <FiArrowRight className="text-sm" />
                    </div>
                    <span className="text-sm">Read</span>
                  </div>
                  <span className="text-xs font-medium text-text-muted">
                    Jun 03, 2026
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-gray-100 relative aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Anniversary Celebration" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN9eQ-GCdekrXE83qsSOgt3YkG44tkE6QoK6Yg4tzaNF6Y4F5YXZkm0hdVMxVTAI6WvjWGHJJA7S0im2IJAajxmptnJ_eLANHzDm2UZho40QeXOp4oddFniQypkCsrlvenE3jhmW1mdGZ0qfVfGDj0Tg9j3EjBhZ5SklQShNUZfqeCXxqGos95xVwJt-vvgkdGWxffDYaaLmmpjS2DuiVdwGCzWfjTP0fjKgp82qHiqpfDfbQYGmovVlA3fXJA5L_5bwlgh0IFcN9K"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-widest">
                    Education
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-[#00204f] leading-snug group-hover:text-[#1a3668] transition-colors line-clamp-4 mb-4">
                    Dr Priti Deepak Gupta Foundation marks 25 years of Deepak Gupta Foundation Public School, Mundra, celebrating a journey of purpose
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-[#00204f] font-bold group-hover:gap-3 transition-all">
                    <div className="w-8 h-8 rounded-full border-2 border-[#00204f] flex items-center justify-center">
                      <FiArrowRight className="text-sm" />
                    </div>
                    <span className="text-sm">Read</span>
                  </div>
                  <span className="text-xs font-medium text-text-muted">
                    Apr 26, 2026
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="group cursor-pointer">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-gray-100 relative aspect-[4/3] lg:aspect-[16/10]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Environmental Symposium" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGMLtmoCubaDV7N80qoXselCPnXNE2-Anfh_0vMh8AgLw35vQ2pHEqZmNClYm4CWxSd960xpkq4u_Q0uVBlCNN2pOGs_8ZoEyyvp7QdkaY64u7b6ac_wRjcuF1iI_YiruKG5dKgb3CaMqu42bt6e-K4Hdy8OCQHJpcn8FjgYZcrQjFsfm2w_NFfEB29Gt6ot5PdtQB-YLKt4kcvbk3vvfsKEOdVKIhcyyueupx-54cZi3wwBCmkpvMmi4R4_whpMkUdteDh0DSPe65"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-1">
                <div>
                  <p className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-widest">
                    Environment
                  </p>
                  <h3 className="text-lg lg:text-xl font-bold text-[#00204f] leading-snug group-hover:text-[#1a3668] transition-colors line-clamp-4 mb-4">
                    Deepak Gupta Foundation, Centre for Environment Education convene dialogue on water security
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-[#00204f] font-bold group-hover:gap-3 transition-all">
                    <div className="w-8 h-8 rounded-full border-2 border-[#00204f] flex items-center justify-center">
                      <FiArrowRight className="text-sm" />
                    </div>
                    <span className="text-sm">Read</span>
                  </div>
                  <span className="text-xs font-medium text-text-muted">
                    Mar 24, 2026
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 border border-[#00204f] text-[#00204f] text-sm font-bold rounded hover:bg-[#00204f] hover:text-white transition-all duration-300 shadow-sm">
            <span>View All News</span>
            <FiChevronDown className="text-lg" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default PressReleases;
