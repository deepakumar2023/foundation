import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImpactThemes = () => {
  useEffect(() => {
    // Micro-interaction: Reveal sections on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-['Hanken_Grotesk',sans-serif] bg-surface text-text-main">
      
      {/* Hero Section */}
      <section className="animate-on-scroll py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-center">
        <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold mb-16 max-w-4xl mx-auto">
          Our Endeavour Is To Be A Catalyst For Every Dream That Begins Quietly
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[24px]">
          {/* Context Cards */}
          <div className="relative group h-[450px] overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="in a classroom" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBBhYkM_qHUqDnauEV815Vdj3AuZaeSHaxdleJD2g1BkRFWv4NaSQgVq3pONN-mJTAmfdmHwuxFTIfAGcfu1GjbL1220CLKDg1iTrg1nMFUeHpWoYJxMQSr6d1b1-R7dQpd_p-RHal-IAiRjdKkjzNYU135o2yv3Y91eV2YM4VHeKHaBmHOHX7upKTAt0-rZjspX9MLVrCMLZEoJu1FLVtU8Lx69wR7s_BIg6sY7ipTGaMtOZAd9KoeQpHflpHNXbn95cssfJ_4yQ"
            />
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">
              in a classroom
            </div>
          </div>
          <div className="relative group h-[500px] overflow-hidden rounded-xl md:mt-12">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="in a home" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7Exg27ju1FWGuMGV9NvUSQq5mYVgC_PWUuhA7Ct_brgwldnXYJA60XENCHJkf1JPO2UkWI7ZoLptC4nC6SlNkRqFOmfYqmUU5XbRiSdLe8L9t2fB7ianuY-YLuGoyi8bNHFfLKoycpblkB-C3fR7TSOMFO6nQysSX8I5jbI8sxbZlpUnzMQFLOsny73SRQZng_NtLDCGivGkdVFDxaNmYAMbuiuNU7N1Qkw-KAgJRtuLsc82H34752nGzM_ftJ_b2hsKK0DvmTTd"
            />
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">
              in a home
            </div>
          </div>
          <div className="relative group h-[450px] overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="in a field" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqwjnXdjg1gE8cOVru2EFp9IQfnUuNs_nK6bNOFDVZ7odfvnTNsxKoYBQMxodniuQkbRKlQDD2fuBWYZrM5nrSgvdNZCvMxqyYhb_sIMURbkAtwLHSIvekluQjWYeEpEpxk_9yyr0azKw9dZpN_bzI44VlyHFCyfqbpljQSf1SYnJP0JXaKvxpkjWypEblc2b3MoIcFKOzWLC_X8LRmJuKRUfxDeM30NkbtEF7_QnHyEMH4ScNDywF41LKsK1UI3S687BuQBuY99oW"
            />
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">
              in a field
            </div>
          </div>
          <div className="relative group h-[500px] overflow-hidden rounded-xl md:mt-12">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="in a village" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATJaTNpiAmFa16DCGwjVI8QAARJwkd-MCboshtsiBPVqlXxmAErKckpgC_ZR32ndekVrUUJNF37Hp551XBzGOXavcU9uujzS5pjwGqnvdjf5gC7Ivr7jJkfJRA7GfigGHCs3Mum0jM8Dc9AkIGkz3tUpQd6nldevwsfmVZTmrta-ieD0kc6Nzx_HeiSTB7lTiDvqCCdeWtanIcY8vwRwq5PsKpqQihvk8m62pRdA7HCSt0YUyzElW97uCeuTwScKxQ6vQDXLWCxEBu"
            />
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">
              in a village
            </div>
          </div>
          <div className="relative group h-[450px] overflow-hidden rounded-xl">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="that hopes for more" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWhex8KEUreOQEuF5yklX2OlYZXIlbHj-ujWXC_3Azg_WDsZUqW3C_cvPSDiDO_PZcpBjQrlc-9DKWIuekbxnVuZY8A5wsn6smUaMdXNBdoZKdbAU3xpQjrOW4_ko_NMBs76mcs47stTYvwINnksaOjJ6CRcN_TipfHCYUDVk4DnfZvbD8kRX-XLVmmSb11-BPzuCUHee1BK9ejCoxJC2iIdELZyVNIoitzObPz21RG2rEuZQV44_BZzJVdiMp2xgQTX4kD9UqGlPB"
            />
            <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">
              that hopes for more
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="animate-on-scroll py-[60px] md:py-[120px] bg-[#ffffff]">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] text-center mb-20">
          <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-4">Five Enduring Commitments, One Shared Future</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Education Pillar */}
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] grid md:grid-cols-2 gap-[40px] md:gap-32 items-center mb-32">
          <div className="relative">
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-[#edeeef]">
              <img 
                className="w-full h-full object-cover" 
                alt="Education" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVA8fS1QZv0LR9yWU_h9rmw79vhPv-MUAdoAX8OHSkJU3WZ0jeEuMRs_cGBx-S8QNYhoiZ8f6V-D40nMEG_9zg3aXKc-ihLQFM9J1dUJdgsHpYkNghWk0Tu_AqefucHDyVEeRma3wZ8iDmGE17vA9ve8Leigd4M8rTElsJT3DEEdUQEZLe9TKpUm3UimJmFdJDubNoj8z4Qay1OQqAbDKJsylJaLcZ_b2oEy_MUhnH9BzOVxP2AUKpjAbPe21vwuKeNwswB-BN3P2J"
              />
            </div>
            <div className="absolute md:-right-8 top-3/4 md:top-1/2 left-4 md:left-auto -translate-y-1/2 backdrop-blur-md bg-white/90 p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] md:max-w-xs z-10">
              <p className="text-[16px] leading-[26px] text-primary italic">"I want to become a teacher so other children can learn like I did."</p>
            </div>
          </div>
          <div className="space-y-6 pt-12 md:pt-0">
            <div className="w-16 h-16 bg-[#d8e2ff] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
            </div>
            <h3 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-primary">Education</h3>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-secondary font-semibold italic">So dreams can begin early</p>
            <p className="text-[16px] leading-[26px] text-text-muted">Education gives children more than knowledge—it gives them belief. Belief that their future can be different, brighter, and their own.</p>
            <Link to="/impact-themes/education" className="flex items-center gap-2 text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase text-primary hover:gap-4 transition-all">
              Discover <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
        </div>

        {/* Health Pillar */}
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] grid md:grid-cols-2 gap-[40px] md:gap-32 items-center mb-32">
          <div className="order-2 md:order-1 space-y-6 pt-12 md:pt-0">
            <div className="w-16 h-16 bg-[#97f3b5] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#047240]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
            </div>
            <h3 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-secondary">Health and Nutrition</h3>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-primary font-semibold italic">So dreams can grow strong</p>
            <p className="text-[16px] leading-[26px] text-text-muted">Good health and balanced nutrition make everything else possible. When families are well, they can think about tomorrow with strength and resilience.</p>
            <Link to="/impact-themes/health-and-nutrition" className="flex items-center gap-2 text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase text-secondary hover:gap-4 transition-all">
              Discover <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-[#edeeef]">
              <img 
                className="w-full h-full object-cover" 
                alt="Health" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wSPwUM6udJRkEUVncj7v15bb_VZRKutJzNuz_VsUHT1mdb8KZA_k_Jn7--1QryGtrafd0WbnlbvJMiPuiXl-W4jMCZf6yCcEvplCtRLvcp5XbE3NEHgJ404q9lFRHOQhkSPt-w-Qp9jTkvhbDqF7cj1nK4JjtGBSlez04zNWYa7OCczIVo9cE-GyB_w8IeLSBYGQFL6JVY_rxsHB8U33RWol-RFmcSVO3o_9xM9mWdqJK8_6a4nCszPQ3jp1lGdFM-OevzDDnWq6"
              />
            </div>
            <div className="absolute md:-left-8 top-3/4 md:top-1/2 right-4 md:right-auto -translate-y-1/2 backdrop-blur-md bg-white/90 p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] md:max-w-xs z-10">
              <p className="text-[16px] leading-[26px] text-secondary italic">"When my family is well, I can think about tomorrow."</p>
            </div>
          </div>
        </div>

        {/* Livelihoods Pillar */}
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] grid md:grid-cols-2 gap-[40px] md:gap-32 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-[#edeeef]">
              <img 
                className="w-full h-full object-cover" 
                alt="Livelihoods" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbHj-GTdBRWtOgNvcNB0j63cVqjeoD4HcbC5VDWLDIP6ZxBSkwp3vjwiHVcFxMF3MgMc0opl5qenYFKiIe73jbUpQ0BI7kySQIn0bX4RYMKduHv81Gn-WRk1qOz2jDK073GMbp0bJYgXJh-xhJhlEDy8ccXE1rMKp-bfU_-ko5cV-xJtrLR7yLnPEkSG31Z24fKWIjuK4pgFNQGqsd5NyuHXxgukW_N8HuFrDy6hn8dNTAQyP9v2WIbnAfbHQINQBtJV7FvpINvNNa"
              />
            </div>
            <div className="absolute md:-right-8 top-3/4 md:top-1/2 left-4 md:left-auto -translate-y-1/2 backdrop-blur-md bg-white/90 p-6 md:p-8 rounded-2xl shadow-xl max-w-[280px] md:max-w-xs z-10">
              <p className="text-[16px] leading-[26px] text-tertiary italic">"Now I earn with confidence. I can plan for my children."</p>
            </div>
          </div>
          <div className="space-y-6 pt-12 md:pt-0">
            <div className="w-16 h-16 bg-[#ffdbca] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#773200]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-semibold text-tertiary">Sustainable Livelihoods</h3>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-secondary font-semibold italic">So dreams can stand on their own</p>
            <p className="text-[16px] leading-[26px] text-text-muted">Livelihoods bring dignity and independence. We support skills and opportunities that help people build secure and self-reliant lives.</p>
            <Link to="/impact-themes/sustainable-livelihoods" className="flex items-center gap-2 text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase text-tertiary hover:gap-4 transition-all">
              Discover <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="animate-on-scroll py-24 bg-primary text-[#ffffff]">
        <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-center mb-16 max-w-3xl mx-auto opacity-80">
            These Are Not Separate Efforts. They Are Five Ways We Stand With People—As They Learn, Heal, Earn, Protect, And Grow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] text-center">
            <div className="space-y-2">
              <svg className="w-10 h-10 mx-auto text-[#9af6b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              <div className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold">30+</div>
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase opacity-70">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <svg className="w-10 h-10 mx-auto text-[#9af6b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              <div className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold">13.3M</div>
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase opacity-70">Lives Impacted</div>
            </div>
            <div className="space-y-2">
              <svg className="w-10 h-10 mx-auto text-[#9af6b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/></svg>
              <div className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold">542K+</div>
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase opacity-70">Saplings Planted</div>
            </div>
            <div className="space-y-2">
              <svg className="w-10 h-10 mx-auto text-[#9af6b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
              <div className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold">400K+</div>
              <div className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase opacity-70">Health Consultations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="animate-on-scroll py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-2">See Dreams In Action</h2>
            <p className="text-[16px] leading-[26px] text-text-muted">Real stories from the communities we serve.</p>
          </div>
          <button className="hidden md:flex border-2 border-[#747780] px-8 py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase hover:bg-[#e1e3e4] transition-all">
            Read More Stories
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* Story Card 1 */}
          <div className="bg-[#f3f4f5] rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="Story" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcA8Yz_XZZXR4uuT4yoED0B5vSS43M4g_qj-P7fGkj8ZD5UNXDQujV27JXtWmI4z2kXtKntgEVKtXYwT_DAo8pWE_MV5l5kErNSw_dAcK7zpZy834u8_y5isnQy-rQrAJVVaZvVb2m3SoFFBsW2JzzgmLsTFT9DJwBIa_bAZ4IqSJC8wDRoJh_9hdRRP80-gMOvX7InuUuxhVTCmz-SoubOfDLlVYO8FkVHPzKoZgeSM-NBtGUqIRdPIDtZsar8jWdPw02YyEZ1lve"
              />
              <div className="absolute top-4 left-4 bg-primary text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">EDUCATION</div>
            </div>
            <div className="p-8">
              <div className="text-[14px] font-semibold text-text-muted mb-2">June 30, 2024</div>
              <h4 className="text-[24px] font-semibold mb-4 leading-tight group-hover:text-primary transition-colors">Listening, Learning, and Growing: A Lifelong Journey</h4>
              <p className="text-[16px] text-text-muted mb-6 line-clamp-3">Explore how a single month-long internship turned into a lifelong commitment to social change for Dravya Jain.</p>
              <div className="flex items-center gap-2 text-[14px] uppercase text-primary font-bold">
                <svg className="w-6 h-6 bg-primary text-[#ffffff] rounded-full p-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg> READ
              </div>
            </div>
          </div>
          
          {/* Story Card 2 */}
          <div className="bg-[#f3f4f5] rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="Story" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-FUi3OS4i10s8ONCzp0Un3a3sxbht98fWyfrwbTAIpGyjMl4oaCUp1sGLRn6TRJmbxCTLM5mySq87yBFNsmxaa5pQCjjma7shsWgOk8yp9rRqUThUvCkXSThQGGo_ovMEG8pSSBE8HU87JwfgzBCn2Q_phkgOHoonOnr0ZLcNEMN129qv0qr5Kz6SA6hgbx35YC2_0dOOnVGKsxgolmMEvB6SRLxhgP1kxd6bVs-wFPRkK6xq-BwBdxZCY64h0NgDE0lxwW4nZ5m"
              />
              <div className="absolute top-4 left-4 bg-secondary text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">CLIMATE ACTION</div>
            </div>
            <div className="p-8">
              <div className="text-[14px] font-semibold text-text-muted mb-2">March 26, 2024</div>
              <h4 className="text-[24px] font-semibold mb-4 leading-tight group-hover:text-secondary transition-colors">Fostering Resilience through Pond Restoration</h4>
              <p className="text-[16px] text-text-muted mb-6 line-clamp-3">The restoration of local water bodies is reviving ecosystems and securing futures for marginalized farming communities.</p>
              <div className="flex items-center gap-2 text-[14px] uppercase text-secondary font-bold">
                <svg className="w-6 h-6 bg-secondary text-[#ffffff] rounded-full p-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg> READ
              </div>
            </div>
          </div>
          
          {/* Story Card 3 */}
          <div className="bg-[#f3f4f5] rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="Story" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASZPb4aLw_lcm0316J6mcZx87RTu_swaQ4WDyr1y2yRwv8USSAmqhEc9qc2iAhnPa-pH2VMp3UmfHxTi54bUvkONlGamkt3e_c-2vrywiNhARzvQcv8gYBYevy1MY8hOHmJ02a_OMsbRloU2BnMYt98b3bxHIQXjldY09AIaL34Nimg_Ri4yID0qJ5u-y-aYgdY1D-_KR0RMoma70oJt0zud5tLLWFJVaSh7OhRvRLhn8ktT4Q04AZypPUjkGjaW_s-BsA7OPHK-v-"
              />
              <div className="absolute top-4 left-4 bg-tertiary text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold tracking-wider">LIVELIHOODS</div>
            </div>
            <div className="p-8">
              <div className="text-[14px] font-semibold text-text-muted mb-2">Dec 24, 2023</div>
              <h4 className="text-[24px] font-semibold mb-4 leading-tight group-hover:text-tertiary transition-colors">Harvesting Hope: Empowering Farmers for Progress</h4>
              <p className="text-[16px] text-text-muted mb-6 line-clamp-3">How new agricultural techniques and tool support have doubled the annual income for families in Gujarat.</p>
              <div className="flex items-center gap-2 text-[14px] uppercase text-tertiary font-bold">
                <svg className="w-6 h-6 bg-tertiary text-[#ffffff] rounded-full p-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg> READ
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <button className="border-2 border-[#747780] px-8 py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase hover:bg-[#e1e3e4] transition-all">
            Read More Stories
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImpactThemes;

