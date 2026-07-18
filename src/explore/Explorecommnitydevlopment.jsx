import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { MdOutlineConstruction, MdOutlineWarningAmber, MdOutlineAddRoad, MdOutlineArrowBack, MdOutlineArrowForward, MdOutlinePlayArrow } from "react-icons/md";

function Explorecommnitydevlopment() {
  const navigate = useNavigate();
  useEffect(() => {
    // Simple reveal on scroll
    const revealElements = document.querySelectorAll('.animate-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
        revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Hanken_Grotesk',sans-serif] antialiased pt-24 overflow-x-hidden">
      
      {/* Section 1: Rural Development Success Stories */}
      <section className="relative bg-[#FCEBFF] py-[60px] md:py-[120px] px-[20px] md:px-[64px] overflow-hidden animate-on-scroll">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white opacity-40 rounded-full blur-3xl"></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-center text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold text-primary mb-16">
            Rural Development
          </h1>
          
          {/* Savita Ben Story */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 max-w-4xl mx-auto">
            <div className="relative flex-shrink-0">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full z-0 opacity-80"></div>
              <img 
                className="w-80 h-80 rounded-full object-cover relative z-10 shadow-xl border-8 border-white" 
                alt="Savita Ben" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrEoKTY3MHI-y4QTFOSWg9SMLFl1E_VhP5KHLp-OhwoylzqTA_Eh-7HzyEfnHepHmIi1-131SzpmIFfwRU5XvIrWZzEhYcHIi-BY6srQJtPbQ_z7-W1cUUhVWoLDtSeywdJC5JEh_bn6q8HsRjIImJlnmJ6lkudQdvLjUaoon10hkQtceyZcJOmqFTyPgeB_UC8pz1jap_kVfsrfIYq5Ep2F7PHDlvZH4WQwmc6_3nOs7Y3BLAjwEzCfwqRZnx8zEdf03BIdKbjzMN"
              />
            </div>
            <div className="flex-1 text-[#44474f]">
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal leading-relaxed">
                <strong className="text-primary font-bold">Savita Ben</strong> - Through Deepak Mangal Seva, I received a fixed deposit after my marriage, which gave me confidence. Since I lost strength in my legs at just 1.5 years old, life has never been easy, but today I am financially independent and living a fuller, more dignified life.
              </p>
            </div>
          </div>
          
          {/* Ankita Badgaiyan Story */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24 max-w-4xl mx-auto text-left md:text-right">
            <div className="relative flex-shrink-0">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full z-0 opacity-80"></div>
              <img 
                className="w-80 h-80 rounded-full object-cover relative z-10 shadow-xl border-8 border-white" 
                alt="Ankita Badgaiyan" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD43jlLL3hGe__th4Gis8oP4wjRJ7VGqy7puOerHNwLMT_w04Z4TrdqQGdUzD6QvYuu8oMOqXlcNGwLAwlE3huSDU_QF4moPclpaZgi4KLqKVsX7o6SWqnTnOzXNa-g9as7FuImuB41CQelw-adJ_6bGgxxS_7woiT3jmM6enFMqsVrsVSoiJTRQxdeCOHxQR1pqIie4EuszKNmBWP-kb_hlbeDdvNZmvQKmmUFlJloa7eNaB-wU223UJkhlbVcXlPM-J4uNP1QMqRW"
              />
            </div>
            <div className="flex-1 text-[#44474f]">
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal leading-relaxed">
                <strong className="text-primary font-bold">Ankita Badgaiyan</strong> - I grew up running on village tracks near Kymore. Professional coaching provided by Deepak Gupta Foundation helped me find my true potential and enabled me to clinch a bronze medal at the West Zone National Junior Athletics Championships.
              </p>
            </div>
          </div>
          
          {/* Priya Monika Hembrom Story */}
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="relative flex-shrink-0">
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full z-0 opacity-80"></div>
              <img 
                className="w-80 h-80 rounded-full object-cover relative z-10 shadow-xl border-8 border-white" 
                alt="Priya Monika Hembrom" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_FMFwiKpnrmBAT75bcqQD3h_oqO9h2NRFgs2yn6RiuDBQ85Cone0H69f7xFGEvf-IKYfGVBZCx5DOS1L2axsz6F8k3M_XhLbV7xPiNN-UzbEWPlMnI7jgH7ZPmEGo4uD36zoZJfD50dTpsSriCa68mUI0vG7plWfotJBKM77MOBbxGLKuj1azpc-cKGUsneg-nnamKiUid5InOD-k6BtC7NWYQAUCW5MFfvGkCUImBmtxVKJ71Pu49FWHyfypgW1yAf7XA-CHz0l"
              />
            </div>
            <div className="flex-1 text-[#44474f]">
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal leading-relaxed">
                <strong className="text-primary font-bold">Priya Monika Hembrom</strong> - Our school feels like a different place now. Cleaner, brighter and more alive. Thanks to Deepak Gupta Foundation, learning here has become something we look forward to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission Statement Block */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] bg-[#f8f9fa] animate-on-scroll">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal text-[#44474f] mb-12 leading-relaxed">
            The Deepak Gupta Foundation is dedicated to fostering thriving, self-reliant communities across India, driving holistic development rooted in inclusion, dignity, and partnership. Through a comprehensive strategy, the Foundation aims to raise the quality of life, enhance human potential, and bolster economic growth via sustainable interventions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12 border-t border-[#c4c6d0] pt-12">
            <div className="flex gap-4">
              <MdOutlineConstruction className="text-[#006d3d] flex-shrink-0 text-[24px]" />
              <div>
                <h3 className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-primary mb-2">Vital Infrastructure Development</h3>
                <p className="text-[16px] leading-[26px] font-normal text-[#44474f]">Constructing essential tangible assets like roads, water conservation systems, and streetlights to improve daily life.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdOutlineWarningAmber className="text-[#ba1a1a] flex-shrink-0 text-[24px]" />
              <div>
                <h3 className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-primary mb-2">Disaster Support &amp; Crisis Aid</h3>
                <p className="text-[16px] leading-[26px] font-normal text-[#44474f]">Standing with communities during times of need, offering immediate aid and long-term support to those affected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact Numbers */}
      <section className="px-[20px] md:px-[64px] mb-24 animate-on-scroll">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#1a3668] rounded-xl p-1 md:p-2 shadow-lg">
            <div className="bg-[#FCEBFF] rounded-lg p-12 flex flex-col items-center text-center">
              <h2 className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#1a3668] uppercase tracking-widest mb-8">Impact Numbers That Tell A Real Story</h2>
              <div className="bg-white/50 backdrop-blur rounded-xl p-8 max-w-sm w-full border border-[#1a3668]/10">
                <MdOutlineAddRoad className="text-[#1a3668] text-5xl mb-4" />
                <div className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary">21,413</div>
                <p className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-[#44474f] mt-2">metres cement concrete (CC) roads constructed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Active Programmes */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] bg-[#f3f4f5] animate-on-scroll">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-center text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-16">Active Programmes</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <img 
              className="rounded-xl shadow-lg w-full aspect-video object-cover" 
              alt="Community Infrastructure" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgJuZtph8xJgutx0ijYqLn5G6WtyHRJT4YABFGrItwEeiZJZGxVjlwk3moCH9zx_zofJwKsYgTtSvN99zz68YBu0mppKpoGls6iqXXLL55krYKScuY0lTsMI0sM_1j9RXzkQO3H6OnaOuJETLXpBpVkybyIZOQorZOP0Ou3nmZ-avlPeanOv0JKFOIixGsMqfO-9ucDbkwIIUuJ7U2dH1VcZHd--A2ApkDzw9MerTLMKo-n120_HSvwtK1HrG1_iJGKYPqzzdp9P87"
            />
            <div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6">Community Infrastructure</h3>
              <p className="text-[16px] leading-[26px] font-normal text-[#44474f] leading-relaxed">
                We are connecting villages to markets, which in turn link people to jobs, education and essential healthcare. Today, our communities enjoy over 21,000 meters of cement concrete (CC) road, over 100 borewells and handpumps, 60 RO plants, 29 schools classrooms with sanitation blocks, 35 anganwadis, 39 Community halls and 2,775 LED/solar lights to illuminate villages.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="md:order-2">
              <img 
                className="rounded-xl shadow-lg w-full aspect-video object-cover" 
                alt="Deepak Mangal Seva" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKckTHQFfkL1jdDLUTfUAL8I92RROBULixEvwh3KHjoUxkEaSqQUZyOGvPYEiBWM6T3dPXcdpiPwz8pimO1vj-dsSpNf7g31v8VuLsJnorhjd9jJDIkpx4Nyf9QZVn1NSMaQ2N08gzEwSlVF3rKCIj3oSlFWL03LleC_pjFiFnj_G7BTD8yQiKMxU4ZaVrxmFhjLFwhjpug01ckwXqn7932nu0nbwQAa1BhtzTcAY6gj8i0spzsnmGHru9YvTl2I7uuyO_SjKuruvF"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6">Deepak Mangal Seva</h3>
              <p className="text-[16px] leading-[26px] font-normal text-[#44474f] leading-relaxed">
                Anchored by the Deepak Gupta Foundation, Deepak Mangal Seva supports divyang women in building financial security and independence through structured social support designed to ensure dignity and stability. The initiative was announced as a meaningful commitment towards social security for divyang women.
              </p>
              <p className="text-[16px] leading-[26px] font-normal text-[#44474f] leading-relaxed mt-4">
                In its first year, the programme supported 500 divyang women by creating a ₹10 lakh fixed deposit for each beneficiary, ensuring a stable monthly income and long-term financial protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Relief And Rehabilitation */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] animate-on-scroll">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6">Relief And Rehabilitation Efforts</h2>
            <p className="text-[16px] leading-[26px] font-normal text-[#44474f] leading-relaxed mb-6">
              It is in times of crisis we reaffirm our promise to stand in solidarity with those who need us most. Standing as a pillar of hope for vulnerable communities, we mobilise swiftly to provide relief and rehabilitation. It means going beyond immediate aid and focusing on long-term empowerment to help individuals and families rebuild their lives, regain confidence and envision a brighter future.
            </p>
            <p className="text-[16px] leading-[26px] font-normal text-[#44474f] leading-relaxed">
              In the long run, compassion and resilience help regain what is lost.
            </p>
          </div>
          <img 
            className="rounded-xl shadow-lg w-full h-[400px] object-cover" 
            alt="Relief Efforts" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_yU1X9lr707me8XWzFGMchM2AdupHEzr690dr9usQYBWM_uvlbNjhaEja96UHbF1ZUtP4bDaT-0qxNbgxZ8A6qWf8TrCAVVWz2IUuB1T0-p7COGLKriLhEKCNssk4yoiADg8tzKGdxDamFIb2nHXy7MF_v5_vW2k59kq4ZyDTznCOj35BMxbff4Np077U5XEPDB-DCRE9aghEL6gPXyTn1Vu4bf6DPvpwn1FFf6-FS0YWWAgEoFr2kvRW25ohhdlBD_XEEdRff5R2"
          />
        </div>
      </section>

      {/* Section 6: Impact Stories Carousel */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] bg-[#edeeef] animate-on-scroll">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary">Impact Stories</h2>
            <div className="flex gap-4">
              <button onClick={() => navigate('/contact-us')} className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <MdOutlineArrowBack />
              </button>
              <button onClick={() => navigate('/contact-us')} className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <MdOutlineArrowForward />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-[16px] md:gap-[24px]">
            {/* Story Card 1 */}
            <div className="bg-[#FCEBFF] p-8 rounded-xl flex flex-col h-full group hover:shadow-xl transition-shadow border border-white">
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-primary/60 mb-2 uppercase tracking-wider">Community Development | Jan 29, 2026</div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6 flex-grow">From Awareness to Action: Our 'Meri Sangini Meri Margdarshika' Program Is...</h3>
              <div className="mt-auto">
                <button onClick={() => navigate('/contact-us')} className="flex items-center gap-2 text-primary font-bold mb-6">
                  <MdOutlinePlayArrow className="bg-primary text-white rounded-full p-1 text-sm" />
                  Read
                </button>
                <img 
                  className="rounded-lg w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" 
                  alt="Meri Sangini" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzzUeTXKyf9kFI2fYKMHidkVegc-s2swlmEVyaWuRcp9t7qgLvvpWRnGelXatPE61DHmjACNs0pwYeExY46pZdCzYVsO18EWlpFKfq2JfDtT78Juey6iqEfZ9aOOi4n07Ex_sWkd39sCCFXpWtZ0PsVwrbXQ54rfPIshWUr-wEazFUQjYo0fJxZTij3RZ7ZU3QgJZastQUbwqqyxp8HTrOVg6uMRNPb3V1JIfjPqPtTFY8K5eyUrORV2GPW_-f_mHLEaObqKfBI3cK"
                />
              </div>
            </div>
            {/* Story Card 2 */}
            <div className="bg-white p-8 rounded-xl flex flex-col h-full group hover:shadow-xl transition-shadow border border-[#c4c6d0]">
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-primary/60 mb-2 uppercase tracking-wider">Community Development | Jan 31, 2025</div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6 flex-grow">Fuelling Aspirations, Fulfilling Dreams: How Foundation is Empowering...</h3>
              <div className="mt-auto">
                <button onClick={() => navigate('/contact-us')} className="flex items-center gap-2 text-primary font-bold mb-6">
                  <MdOutlinePlayArrow className="bg-primary text-white rounded-full p-1 text-sm" />
                  Read
                </button>
                <img 
                  className="rounded-lg w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" 
                  alt="Sports Initiative" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsyYVa_YHfjppe5Xf6htmr_eeUiINxfUha0yVogAa5yPD6xoEuy7Cyr4q0JdDY2dIQTEzYQtDerI_rMVmH4Mivb8Mj57HBwOC45JzI3yHU8f7GHfkzGPwk3CjCkRhMP8DZ0sRlhk3W-jmJGp7Jn1cwmW9Eh9UizDJxNHL4-_yg9bR2RhTnLIpcJf5wxpRy76dmJL4QtflcolH7msWhl0Bp4etWwsmDjjO-JtgHXPPaIpGYWQFFvIGNcP969gS3PKckF8aoGo77z_V"
                />
              </div>
            </div>
            {/* Story Card 3 */}
            <div className="bg-[#FCEBFF] p-8 rounded-xl flex flex-col h-full group hover:shadow-xl transition-shadow border border-white">
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-primary/60 mb-2 uppercase tracking-wider">Community Development | Mar 22, 2024</div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-6 flex-grow">World Water Day 2024: Community-Based Water Management for...</h3>
              <div className="mt-auto">
                <button onClick={() => navigate('/contact-us')} className="flex items-center gap-2 text-primary font-bold mb-6">
                  <MdOutlinePlayArrow className="bg-primary text-white rounded-full p-1 text-sm" />
                  Read
                </button>
                <img 
                  className="rounded-lg w-full h-48 object-cover group-hover:scale-[1.02] transition-transform" 
                  alt="Water Management" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzHQWgIB1fizoLiymVqyEiUdvYMi6eEmB_76qR8HBp5NtnhNXUvvKuaufw4jOZcojLuYsVNo4fiT8urgWuZ4pZSO-bKrl5rLnq_pfjnVWkHyOSBltXyRrB2BxNhwftfM0tNkk8gCg1PaCj_ojc1WjlY0aL8771RiqQsDepxmsRTl9E89a4IyhtCJGI9EaRnCDqXq3J99g_TDq3_eAD_VhC_cs68tRnSYvgJRcEJ5VnH6lRn0r1TgMtzwrUIR3lAIlv6TgQKc5Mrtrs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Explorecommnitydevlopment;