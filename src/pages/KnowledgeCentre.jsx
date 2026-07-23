import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KnowledgeCentre = () => {
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
    <div className="font-['Hanken_Grotesk',sans-serif] bg-surface text-text-main antialiased">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          title="A grand, high-ceilinged modern institutional library..."
          style={{backgroundImage: `url('/knowledge.jpeg')`}}
        ></div>
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-[1280px] mx-auto w-full text-white">
          <div className="max-w-2xl">
            <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6">Knowledge Centre</h1>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-white/90 mb-10 leading-relaxed">
              Sharing insights, research, and reports to drive sustainable community impact through institutional excellence and evidence-based strategies.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                Explore Publications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* Annual Reports */}
          <div className="group bg-[#f3f4f5] p-10 rounded-xl border border-[#c4c6d0]/30 hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-[#d8e2ff] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold mb-4 text-primary">Annual Reports</h3>
            <p className="text-[16px] leading-[26px] text-text-muted mb-8">
              Comprehensive summaries of our yearly impact, financial transparency, and strategic roadmap for community development.
            </p>
            <a className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
              View All Reports <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          {/* Research & Publications */}
          <div className="group bg-[#f3f4f5] p-10 rounded-xl border border-[#c4c6d0]/30 hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-[#9af6b8] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#047240]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold mb-4 text-primary">Research Papers</h3>
            <p className="text-[16px] leading-[26px] text-text-muted mb-8">
              Deep-dive studies and whitepapers on social innovation, institutional reforms, and sustainable ecological practices.
            </p>
            <a className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
              View Publications <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          {/* Case Studies */}
          <div className="group bg-[#f3f4f5] p-10 rounded-xl border border-[#c4c6d0]/30 hover:border-primary transition-all duration-300">
            <div className="w-16 h-16 bg-[#ffdbca] flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold mb-4 text-primary">Case Studies</h3>
            <p className="text-[16px] leading-[26px] text-text-muted mb-8">
              Real-world examples of our interventions in rural education, healthcare access, and water management programs.
            </p>
            <a className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="#">
              View Success Stories <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="bg-primary text-white py-24 relative overflow-hidden animate-on-scroll">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="w-[400px] h-[400px] rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
        </div>
        <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-2/5 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                title="State of Rural Education 2025 book cover" 
                style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE1BdAD97jFRGct4umiHnZ3BaiPRjRi8POhQdNrc5ySekpe1aikGwW5EahS5hn-V16AZxe29ykv5a6cOIFs49vszhTocuTDM-g8R4y4-2CjFF7u97KghC5Ma4jEmtR3oL0YTTrPvRxDvCJl_sCi8fCKo1FHxtTfcDYOEtcGuho2idyRWY5Nf60_XHjJ3Q98UIuC9z7TMutcGZgSSruoCJC3Xz-GYt5YhHfRbbOSS4RegkKewygocQyjUdJHyq1mx1oJZo6lvFWjPYk')`}}
              ></div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="inline-block px-4 py-1 bg-secondary text-white rounded-full font-semibold text-[12px] uppercase tracking-widest mb-6">
                Featured Publication
              </div>
              <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-6">State of Rural Education 2025: A Global Perspective</h2>
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-white/80 mb-8 max-w-xl">
                Our latest flagship report examines the intersection of digital literacy and traditional pedagogy in underserved communities. Discover the data-driven insights that are reshaping educational policies across South Asia.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold">Published Jan 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold">124 Pages PDF</span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/contact-us')}
                className="bg-white text-primary px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:bg-[#d8e2ff] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Download Full Report (12.4 MB)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library Feed */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-4 text-primary">Resource Library</h2>
            <p className="text-text-muted text-[16px] leading-[26px] max-w-lg">Filter through our latest research papers, annual reports, and impact evaluations.</p>
          </div>
          <div className="flex gap-2 p-1 bg-[#edeeef] rounded-lg">
            <button className="px-6 py-2 bg-white shadow-sm rounded-md text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary">All</button>
            <button className="px-6 py-2 hover:bg-white/50 rounded-md text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">Reports</button>
            <button className="px-6 py-2 hover:bg-white/50 rounded-md text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">Research</button>
            <button className="px-6 py-2 hover:bg-white/50 rounded-md text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">Case Studies</button>
          </div>
        </div>
        <div className="space-y-4">
          {/* Library Item 1 */}
          <div className="group flex items-center justify-between p-6 bg-white hover:bg-[#f3f4f5] border border-[#c4c6d0]/30 rounded-xl transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#1a3668] text-[#87a0d9] rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[12px] font-semibold text-secondary uppercase tracking-wider">Research</span>
                  <span className="text-text-muted/40">•</span>
                  <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">March 2024</span>
                </div>
                <h4 className="text-[20px] leading-[32px] font-semibold group-hover:text-primary transition-colors text-primary">Water Security in Arid Regions: 5-Year Impact Study</h4>
              </div>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#747780] text-[#747780] hover:bg-primary hover:text-white hover:border-primary transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
          {/* Library Item 2 */}
          <div className="group flex items-center justify-between p-6 bg-white hover:bg-[#f3f4f5] border border-[#c4c6d0]/30 rounded-xl transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#97f3b5] text-[#047240] rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[12px] font-semibold text-secondary uppercase tracking-wider">Report</span>
                  <span className="text-text-muted/40">•</span>
                  <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">Jan 2024</span>
                </div>
                <h4 className="text-[20px] leading-[32px] font-semibold group-hover:text-primary transition-colors text-primary">Annual Impact Report: Empowering 1 Million Lives</h4>
              </div>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#747780] text-[#747780] hover:bg-primary hover:text-white hover:border-primary transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
          {/* Library Item 3 */}
          <div className="group flex items-center justify-between p-6 bg-white hover:bg-[#f3f4f5] border border-[#c4c6d0]/30 rounded-xl transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#5f2700] text-[#f88034] rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[12px] font-semibold text-secondary uppercase tracking-wider">Case Study</span>
                  <span className="text-text-muted/40">•</span>
                  <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-text-muted">Nov 2023</span>
                </div>
                <h4 className="text-[20px] leading-[32px] font-semibold group-hover:text-primary transition-colors text-primary">Community Healthcare Hubs: A Model for Scalable Access</h4>
              </div>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#747780] text-[#747780] hover:bg-primary hover:text-white hover:border-primary transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary hover:underline underline-offset-4 decoration-2">Load More Resources</button>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="mb-[60px] md:mb-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="bg-[#e1e3e4] rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-6 text-primary">Stay Informed</h2>
              <p className="text-[20px] leading-[32px] text-text-muted">
                Subscribe to our newsletter for quarterly updates on our research, new reports, and community impact highlights.
              </p>
            </div>
            <div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input className="flex-1 bg-white border border-[#c4c6d0] rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-text-main" placeholder="Your work email address" type="email" required />
                  <button className="bg-primary text-white px-10 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary/90 transition-all" type="submit">Subscribe Now</button>
                </div>
                <p className="text-[12px] text-text-muted font-semibold">
                  By subscribing, you agree to our Privacy Policy and consent to receive institutional updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCentre;
