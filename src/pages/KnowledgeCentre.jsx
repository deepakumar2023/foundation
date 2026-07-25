import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeInsightsV3 from '../components/HomeInsightsV3';

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
           
          </div>
        </div>
      </section>
      <div>

        <HomeInsightsV3/>
      </div>

      {/* Newsletter CTA Section */}
      {/* <section className="mb-[10px] md:mb-[20px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
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
      </section> */}
    </div>
  );
};

export default KnowledgeCentre;
