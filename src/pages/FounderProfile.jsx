import React from 'react';

const FounderProfile = () => {
  return (
    <div className="bg-white text-[#111c2c] antialiased overflow-x-hidden pt-[80px] md:pt-[120px] pb-10">
      <main className="max-w-[1140px] mx-auto px-[24px]">
          {/* Hero Section */}
          <section className="py-[48px] md:py-[80px] flex flex-col md:flex-row items-center gap-[40px]">
              <div className="w-[192px] h-[192px] md:w-[256px] md:h-[256px] flex-shrink-0">
                  <div className="w-full h-full rounded-full border-4 border-[#b08d57]/30">
                      <img alt="Deepak Gupta" className="w-full h-full object-cover rounded-full" src="/deepakgupta.jpeg" />
                  </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                  <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#001b3d] mb-[8px] uppercase tracking-tight">Deepak Gupta</h2>
                  <p className="text-[18px] md:text-[20px] font-medium text-[#b08d57] mb-[24px] leading-tight">Founder &amp; Managing Director, M DAS Group of Industries</p>
                  <p className="text-[#44474e] leading-relaxed text-[16px] md:text-[18px]">
                      Deepak Gupta is the Founder and Director of M DAS Group of Industries, a mission-driven conglomerate built around manufacturing, healthcare equity, and industrial-scale solutions. He is regularly counted among the visionary leaders in India's emerging industrial landscape.
                  </p>
              </div>
          </section>

          {/* Section Divider */}
          <div className="h-[1px] bg-[#e1e3e4] w-full my-[16px]"></div>

          {/* WHERE WE STAND TODAY */}
          <section className="py-[40px]">
              <h3 className="text-[30px] font-extrabold text-[#001b3d] mb-[32px] uppercase tracking-tight">THE ORIGIN</h3>
              <div className="space-y-[24px] text-[#44474e] text-[16px] md:text-[18px] leading-relaxed">
                  <p>
                      Deepak’s journey began in the vibrant yet challenging landscape of South Delhi and Ghaziabad. Raised with strong family values that prioritized integrity and social responsibility, he pursued his education at Dr. Bhimrao Ambedkar University, where he excelled in academic rigors while developing a keen eye for systemic inefficiencies.
                  </p>
                  <p>
                      It was during his formative professional years that he witnessed the stark disparities in India’s healthcare landscape. This realization—that millions were underserved not due to a lack of science, but a lack of accessible industrial scale—became the catalyst for his life's work.
                  </p>
              </div>
          </section>

          {/* THE JOURNEY (Timeline) */}
          <section className="py-[48px]">
              <h3 className="text-[30px] font-extrabold text-[#001b3d] mb-[48px] uppercase tracking-tight">THE JOURNEY</h3>
              <div className="relative ml-[16px] pl-[40px] space-y-[48px]">
                  {/* Vertical Line */}
                  <div className="absolute left-0 top-[8px] bottom-[8px] w-[2px] bg-[#e1e3e4]"></div>
                  
                  {/* Milestone 1 */}
                  <div className="relative">
                      <div className="absolute -left-[45px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#b08d57]"></div>
                      <span className="text-[14px] font-bold text-[#b08d57] uppercase mb-[8px] block">2025 - 2026</span>
                      <h4 className="text-[20px] font-bold text-[#001b3d] mb-[8px]">Community Development</h4>
                      <p className="text-[#44474e] text-[16px]">Led grassroots social outreach initiatives across Uttar Pradesh, focusing on local infrastructure and welfare access.</p>
                  </div>
                  
                  {/* Milestone 2 */}
                  <div className="relative">
                      <div className="absolute -left-[45px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#b08d57]"></div>
                      <span className="text-[14px] font-bold text-[#b08d57] uppercase mb-[8px] block">2024</span>
                      <h4 className="text-[20px] font-bold text-[#001b3d] mb-[8px]">Institutional Advocacy</h4>
                      <p className="text-[#44474e] text-[16px]">Spearheaded student and institutional advocacy programs in Delhi, bridging the gap between policy and practice.</p>
                  </div>
                  
                  {/* Milestone 3 */}
                  <div className="relative">
                      <div className="absolute -left-[45px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#b08d57]"></div>
                      <span className="text-[14px] font-bold text-[#b08d57] uppercase mb-[8px] block">2023 </span>
                      <h4 className="text-[20px] font-bold text-[#001b3d] mb-[8px]">National Strategy</h4>
                      <p className="text-[#44474e] text-[16px]">Advising stakeholders at a national level to reform engagement models within the healthcare and industrial sectors.</p>
                  </div>
                  
                  {/* Milestone 4 */}
                  <div className="relative">
                      <div className="absolute -left-[45px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#001b3d] border-[4px] border-white ring-[2px] ring-[#b08d57]"></div>
                      <span className="text-[14px] font-bold text-[#b08d57] uppercase mb-[8px] block">2022</span>
                      <h4 className="text-[20px] font-bold text-[#001b3d] mb-[8px]">M DAS Group Founded</h4>
                      <p className="text-[#44474e] text-[16px] font-medium">The official establishment of M DAS Group of Industries, a mission-driven conglomerate aimed at healthcare equity.</p>
                  </div>
              </div>
          </section>

          {/* VISION & MISSION */}
          <section className="my-[48px] p-[32px] md:p-[48px] bg-[#001b3d] text-white rounded-md text-center">
              <h3 className="text-[30px] font-extrabold mb-[24px] uppercase tracking-tight">VISION &amp; MISSION</h3>
              <p className="text-[18px] md:text-[20px] font-light max-w-2xl mx-auto mb-[40px] opacity-90 leading-relaxed">
                  Our mandate is singular: to bridge India's healthcare gap through industrial-scale solutions. We believe quality healthcare shouldn't be a privilege of the elite, but a standard for every citizen.
              </p>
              <div className="inline-block border border-[#b08d57]/40 p-[24px] rounded-md bg-white/5">
                  <span className="text-[12px] font-bold text-[#b08d57] uppercase tracking-widest block mb-[8px]">THE GOAL</span>
                  <p className="text-[16px] font-medium">Scaling medical manufacturing to reduce dependency on imports and lower costs for the common man.</p>
              </div>
          </section>

          {/* FOUNDER’S MESSAGE */}
          <section className="py-[48px]">
              <div className="bg-[#f0f3ff] p-[32px] md:p-[64px] relative overflow-hidden rounded-md">
                  <div className="absolute -top-[40px] -right-[16px] text-[192px] md:text-[320px] text-[#001b3d]/5 font-serif select-none pointer-events-none">“</div>
                  
                  <h3 className="text-[30px] font-extrabold text-[#001b3d] mb-[32px] uppercase tracking-tight relative z-10">FOUNDER’S MESSAGE</h3>
                  
                  <div className="text-[#44474e] text-[16px] md:text-[18px] space-y-[24px] relative z-10 leading-relaxed max-w-3xl">
                      <p className="font-medium">Dear Stakeholders,</p>
                      <p>
                          When I founded M DAS Group, I did so with a commitment that goes beyond the balance sheet. In an industry often blinded by margins, we choose to prioritize health outcomes over revenue streams. 
                      </p>
                      <p>
                          Our country is at a turning point. We have the talent, we have the drive, and now, with M DAS Group, we have the industrial backbone to ensure that no Indian is left behind because of where they were born or what they can afford.
                      </p>
                      <div className="pt-[32px]">
                          <p className="text-[20px] font-extrabold text-[#001b3d]">Deepak Gupta</p>
                          <p className="text-[14px] font-bold text-[#b08d57] uppercase tracking-widest">Founder &amp; Director</p>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </div>
  );
};

export default FounderProfile;
