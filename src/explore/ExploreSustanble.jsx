import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { 
  MdOutlineArrowDownward, 
  MdOutlineTrendingUp, 
  MdOutlineFormatQuote, 
  MdOutlineAgriculture, 
  MdOutlineConstruction, 
  MdOutlineGroups, 
  MdOutlineArrowForward 
} from "react-icons/md";

function ExploreSustanble() {
  const navigate = useNavigate();
  useEffect(() => {
    // Click interaction for cards
    document.querySelectorAll('.active-programme-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => card.style.transform = 'scale(1)', 150);
        });
    });
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Hanken_Grotesk',sans-serif] antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#00204f]">
            <div 
              className="w-full h-full bg-cover bg-center" 
              alt="Sustainable Livelihoods Hero" 
              style={{backgroundImage: "url('/service/sustance.jpeg')"}}
            ></div>
            <div className="absolute inset-0" style={{background: 'linear-gradient(0deg, rgba(0,32,79,0.8) 0%, rgba(0,32,79,0.4) 50%, rgba(0,32,79,0.1) 100%)'}}></div>
          </div>
          <div className="relative z-10 px-[24px] max-w-[1280px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold text-white mb-6">
                Sustainable Livelihoods: Empowering Self-Reliance
              </h1>
              <p className="text-[20px] leading-[32px] font-normal text-white/90 mb-10 leading-relaxed">
                We create pathways to economic independence through skill-building, financial inclusion, and community-driven entrepreneurship.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('/contact-us')} className="bg-[#047240] text-white px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
                  Our Impact <MdOutlineArrowDownward />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Bar */}
        <section className="bg-[#f3f4f5] border-y border-[#c4c6d0] py-12">
          <div className="px-[24px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#c4c6d0]/30">
              <div className="py-4 md:py-0">
                <div className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f]">15,000+</div>
                <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#44474f] uppercase tracking-wider">Farmers Supported</div>
              </div>
              <div className="py-4 md:py-0">
                <div className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f]">500+</div>
                <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#44474f] uppercase tracking-wider">Self-Help Groups</div>
              </div>
              <div className="py-4 md:py-0">
                <div className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f]">75,000+</div>
                <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#44474f] uppercase tracking-wider">Lives Impacted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Spotlight */}
        <section className="py-[120px] px-[24px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Success Story" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUJUs87-GvRr2M2hjEKcGfaRvTIEg8YfaSt_Xzslg2cwC1VyLYDr8sTsOl4SiKTCUWRfde1fVo85B9sr5vBSafpafQYTf2boPVMec1rmZaM6I6bDEioSyxe9iI07zE1UIIqoetWVi73UbF3Yiv4har6uXsIBfvw4EE_UkVdQz1yHfAhiu9hBkKCtp5V0JnDeKLU4XCZ9Hg0qqVN8v-g1Eu6V3Klu9YRwS5M_Huu-sSmjb6FDIM03IBM7W7EWGstlNriALi_pjm-0Gr"
                />
              </div>
              {/* Stats Chip */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#97f3b5] rounded-full flex items-center justify-center text-[#047240]">
                    <MdOutlineTrendingUp className="text-[24px]" />
                  </div>
                  <div>
                    <div className="text-[32px] leading-[40px] font-semibold leading-none">240%</div>
                    <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#44474f]">Income Growth</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-[#ffdbca] text-[#773200] text-[14px] leading-[20px] tracking-[0.05em] font-bold rounded-full mb-6">Success Story</span>
              <h2 className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f] mb-6">Nurturing Entrepreneurship with Deepak Mangal Seva</h2>
              <p className="text-[16px] leading-[26px] font-normal text-[#44474f] mb-8">
                Our flagship livelihood initiative provides women with the tools and capital to start their own micro-businesses, fostering resilience in the heart of rural India. By removing systemic barriers, we enable a generation of women to take charge of their economic futures.
              </p>
              <div className="bg-[#edeeef] p-8 rounded-xl relative border-l-4 border-[#006d3d]">
                <MdOutlineFormatQuote className="absolute -top-4 -left-4 text-[#006d3d] text-4xl bg-[#f8f9fa] rounded-full" />
                <p className="text-[16px] leading-[26px] font-normal italic text-[#191c1d] mb-4">
                  "The support from Deepak Gupta Foundation transformed my small stall into a thriving business. I am now the breadwinner for my family."
                </p>
                <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#00204f]">— Meena, SHG Member</div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Programmes */}
        <section className="py-[120px] bg-[#f3f4f5]">
          <div className="px-[24px] max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f] mb-4">Active Programmes</h2>
              <div className="w-24 h-1 bg-[#006d3d] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group active-programme-card cursor-pointer">
                <div className="w-14 h-14 bg-[#97f3b5] text-[#047240] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineAgriculture className="text-3xl" />
                </div>
                <h3 className="text-[32px] leading-[40px] font-semibold text-[#00204f] mb-4">Agricultural Support</h3>
                <p className="text-[16px] leading-[26px] font-normal text-[#44474f] mb-8">
                  Empowering small-scale farmers with modern techniques, climate-resilient practices, and direct market access to ensure sustainable yields.
                </p>
                <span className="inline-flex items-center gap-2 text-[#006d3d] text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:gap-4 transition-all">
                  Read More <MdOutlineArrowForward />
                </span>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group active-programme-card cursor-pointer">
                <div className="w-14 h-14 bg-[#d8e2ff] text-[#00204f] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineConstruction className="text-3xl" />
                </div>
                <h3 className="text-[32px] leading-[40px] font-semibold text-[#00204f] mb-4">Skill Development</h3>
                <p className="text-[16px] leading-[26px] font-normal text-[#44474f] mb-8">
                  Vocational training centers equipping youth with industry-ready skills, digital literacy, and soft skills for the modern global economy.
                </p>
                <span className="inline-flex items-center gap-2 text-[#006d3d] text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:gap-4 transition-all">
                  Read More <MdOutlineArrowForward />
                </span>
              </div>
              {/* Card 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group active-programme-card cursor-pointer">
                <div className="w-14 h-14 bg-[#ffdbca] text-[#773200] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineGroups className="text-3xl" />
                </div>
                <h3 className="text-[32px] leading-[40px] font-semibold text-[#00204f] mb-4">Women's Empowerment</h3>
                <p className="text-[16px] leading-[26px] font-normal text-[#44474f] mb-8">
                  Strengthening Self-Help Groups (SHGs) through financial literacy training, micro-credit linkages, and leadership mentoring.
                </p>
                <span className="inline-flex items-center gap-2 text-[#006d3d] text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:gap-4 transition-all">
                  Read More <MdOutlineArrowForward />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Moments of Change */}
        <section className="py-[120px] px-[24px] max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f]">Moments of Change</h2>
              <p className="text-[16px] leading-[26px] font-normal text-[#44474f] mt-2">Glimpses into the everyday transformations on the ground.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <img 
                className="w-full h-full object-cover" 
                alt="Vocational Training" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtDuQQn-2aRm05rGq18fTvlWfNZDIiSdoDbvlk_Co-GTt7LlNvq7338cRBRbGMi45GqwYikZS83gcubysVtsQ8OIoeMdVfdsog7THVZWLN9YoHmlXpKuXFVay7X5mdYKeEohbsHwDyH5TxSTZmPkickr2lb2krWaVcm3-9ll7lun0bSalLg96D4iKC9KWpwzjMbVo4b46Ekkhdm3zBpLj9bDec1Naz5eS-iYmHPwumkpwUPveAWAyo8szbA5OF3k_K6JChSc-f9sfW"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <img 
                className="w-full h-full object-cover" 
                alt="Self-Help Group Meeting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gkpLy3nCS6qk5TqJsIUSFp-V4n5K43C4r-QYMmJdgyWkCZgwgaDhVO-FAipeN2mG8HfFGE2OzyyguSRXPXy2CYzDXjfy1dAjwSaBl9UwmCa7_6UEyCt-FSgRnfbugbjIopba9uqWzJn6MVL89pNAnMhwmhmodJswazkwtdN-d_XUINTRBo9-0bSV8eIlAOA1azTUSKkiWC4Pc50VtyLSKqDOBdW5uLcsSu_PGqS3HV504jswD7BDrpTQggYwYUZ-ysSMAlwWNWEm"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-video shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <img 
                className="w-full h-full object-cover" 
                alt="High-Tech Agriculture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7yWxHBlwg330g2Heh2qD0O95q1e10GMeQ6YK17yCI9guSs2K6LoTbytmIJJmE-VUW3uv2OSfWKky1PH1X2b-6MRbq6JyoIykRrgXbzk9nYsHYfs12gxDSAWSpC2Pv9f6QAzTMTUPRi4EE5_LEtuCSea5kEqEwVLv2uKrNf2PDYiPD0hQyNXfXc1rL4ncR_Ywrcf_9c35NZ8siDwZ-CBlHNR-Y9fCCCrb2ROqd-xdYCjN-2ojovXTpN-j_stDrTj3hcrJGGKWe_Vym"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2e3132] py-20 text-center">
          <div className="px-[24px] max-w-2xl mx-auto">
            <h2 className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-[#f0f1f2] mb-6">Help Us Build Brighter Futures</h2>
            <p className="text-[16px] leading-[26px] font-normal text-[#e1e3e4] mb-10">Your contribution can provide the seed capital or training a local entrepreneur needs to break the cycle of poverty forever.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/contact-us')} className="bg-[#006d3d] text-white px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:bg-opacity-90 active:scale-95 transition-all">
                Support an Entrepreneur
              </button>
              <button onClick={() => navigate('/contact-us')} className="border border-white/30 text-white px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-bold hover:bg-white/10 active:scale-95 transition-all">
                Partner With Us
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExploreSustanble;