

import { FiChevronRight, FiDownload, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";


const Leadership = () => {
  return (
    <main className="pt-10">
      {/* Hero / Header Section */}
      <section className="bg-surface py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-text-muted font-medium text-sm md:text-base">
            <a className="hover:text-[#0080A8] transition-colors" href="#">Home</a>
            <span className="opacity-50">•</span>
            <a className="hover:text-[#0080A8] transition-colors" href="#">About Us</a>
            <span className="opacity-50">•</span>
            <span className="text-[#0080A8] font-semibold">Leadership</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full md:w-5/12">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0080A8] mb-6 leading-tight">
                Deepak Gupta Foundation Board Of Trustees
              </h1>
              <p className="text-base md:text-[17px] text-text-main leading-relaxed">
                Deepak Gupta Foundation works across communities in India, partnering closely with locals to drive long-term improvements. Guided by a shared vision and inspired by the Trustees' personal commitment to 'Seva' and public good, the Foundation's teams work collaboratively to translate resources into measurable, on-ground impact that supports inclusive nation building.
              </p>
            </div>

            <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Featured Trustee 1 */}
              <Link to="/founder-profile" className="block relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  alt="Deepak Gupta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/deepakgupta.jpeg "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-xl md:text-2xl">Deepak Gupta</h4>
                    <p className="text-white/80 text-sm md:text-base">Founder &amp; Chairperson</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40">
                    <FiChevronRight className="text-[20px]" />
                  </div>
                </div>
              </Link>

              {/* Featured Trustee 2 */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  alt="Anand Gupta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/anandgupta.jpeg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-xl md:text-2xl">Anand gupta</h4>
                    <p className="text-white/80 text-sm md:text-base">Director</p>
                  </div>
                  <Link to="/contact-us" className="w-10 h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40 cursor-pointer z-10 relative">
                    <FiChevronRight className="text-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Board of Trustees 3x2 Grid Section */}
      {/* <section className="py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-md">
              <img
                alt="Rajesh Khanna"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_eJrWxACOPkNL3rlCxcJhei0V0M0CYRwEJrvmYs2v9kAdZF42NxQ9Wn7W2I-cfH3ZWwsIaSFV5jJM52KxesYrzCe_1v2oRSUsyMcAQM066vnXlunkRPNOEDAknZsgNVi2m51v8b_SsGe_mrX9jRKv2Rp3nhwvuehZUIAKHLoHqmcyxiNKht9J8izYPGY8AQFzevUlaq-TNBz_U16GyOTHW4lq4D9vsGfJl6I8ve1m1Q7WGFZCZdD1AMdxS1QZ-M-abaxtbby0-fs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">Rajesh Khanna</h4>
                  <p className="text-white/80 text-xs md:text-sm">Executive Trustee</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40">
                  <FiChevronRight className="text-[18px] md:text-[20px]" />
                </div>
              </div>
            </div>

       
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-md">
              <img
                alt="Sunita Verma"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtDYvBvTPcbJi7-ujYYG3wcFC4-oQeQdjpbfaPjLFsGWyIS9yqOAfLVF9Mk_YatwFZ-0wbwP9VvkqBoLmmfUX8uXd_vB4YbNP-J5JKRPBkzWNrYjkaVxM8olcKm8tkSVLmynmkhphXrkkLy0vCKQ3lWLLrK2dm8yl-B3zVwmogMjy4x0GEOmPG0sZ1Yc5G-FBFBxBVha0PffdByRraF0O3rfm6c1hPP2oItyJ8no82TPYEO_JsOmQbYPdCVsnhLjIxIS8yD59Y0KpK"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">Sunita Verma</h4>
                  <p className="text-white/80 text-xs md:text-sm">Trustee, Operations</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40">
                  <FiChevronRight className="text-[18px] md:text-[20px]" />
                </div>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-md bg-gray-100">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FiUser className="text-6xl text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">Vikram Sahay</h4>
                  <p className="text-white/80 text-xs md:text-sm">Trustee</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40">
                  <FiChevronRight className="text-[18px] md:text-[20px]" />
                </div>
              </div>
            </div>

         
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-md bg-gray-100">
              <div className="w-full h-full bg-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <FiUser className="text-6xl text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-bold text-lg md:text-xl">Meera Joshi</h4>
                  <p className="text-white/80 text-xs md:text-sm">Trustee</p>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-white transition-colors group-hover:bg-surface/40">
                  <FiChevronRight className="text-[18px] md:text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Advisory Council Section */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-[#f5f3ff] rounded-3xl p-6 md:p-12 shadow-sm border border-purple-100">
            <h3 className="text-2xl md:text-[28px] text-[#0080A8] mb-6 md:mb-8 font-bold leading-snug">
              Members of the Advisory Council <span className="font-normal text-text-muted block sm:inline sm:text-2xl mt-2 sm:mt-0">(Independent Members)</span>
            </h3>
            <ul className="space-y-3 md:space-y-4 list-disc pl-5 text-text-main text-base md:text-[17px] leading-relaxed">
              <li>Deepak Gupta, Founder & Chairperson</li>
              <li>Anand Gupta, Director</li>


            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h4 className="text-2xl md:text-[32px] text-[#0080A8] font-bold mb-8 md:mb-10">
            Want to learn more about our work?
          </h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Link to="/contact-us" className="w-full sm:w-auto bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-800 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
              View Impact Reports
              <FiDownload />
            </Link>
            <Link to="/contact-us" className="w-full sm:w-auto border-2 border-purple-700 text-[#0080A8] bg-surface px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-sm hover:shadow-md">
              Annual Transparency
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
