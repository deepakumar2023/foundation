import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthorBlock from '../../components/insights/AuthorBlock';
import ArticleSidebar from '../../components/insights/ArticleSidebar';

const ForensicAccounting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden">
      <Helmet>
        <title>What is Forensic Accounting? | Northrop India</title>
        <meta name="description" content="Learn what forensic accounting is, how it works in India, and when your business needs it. A plain English guide by Northrop Management." />
      </Helmet>

      {/* Hero Section - Image-less Premium Design */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center text-center overflow-hidden bg-white border-b border-[#e2e4ea]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-20 px-[20px] md:px-[64px] max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 mb-6 rounded-md bg-[#C5963A] text-white text-[11px] font-bold uppercase tracking-widest">
            New Insight
          </span>
          <h1 className="font-serif text-[32px] md:text-[56px] leading-[40px] md:leading-[64px] font-bold tracking-[-0.02em] text-[#001F3F] mb-6 uppercase">
            What is Forensic Accounting? A Complete Guide for Indian Businesses (2026)
          </h1>
          <div className="w-24 h-1 bg-[#C5963A] mb-8"></div>
          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#45474c] max-w-2xl font-normal">
            Moving beyond the balance sheet to uncover financial realities.
          </p>
        </div>
      </header>

      <main 
        className="w-full max-w-[1200px] mx-auto px-[20px] md:px-[64px] py-20"
        style={{ backgroundImage: "radial-gradient(#c5c6cd 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[48px]">
          {/* Main Content */}
          <div className="md:col-span-8">
            <p className="text-[18px] leading-[32px] text-[#191c1d] mb-8 font-normal">
              Most people hear the words 'forensic accounting' and think of crime dramas or courtrooms. But in reality, forensic accounting touches every business - from a small family firm worried about employee fraud to a large corporation under regulatory scrutiny.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              This guide explains what forensic accounting is, what forensic accountants actually do, and when you should consider engaging one.
            </p>
            
            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">The Simple Definition</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              Forensic accounting is the use of accounting skills to investigate financial irregularities. Think of it as regular accounting - but with a detective's eye. Instead of just recording what happened, a forensic accountant asks: does this add up? Does this make sense? Is something being hidden here?
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              The word 'forensic' comes from Latin, meaning 'of the court.' That's because forensic accounting work is often used as evidence in legal proceedings - court cases, arbitration, regulatory investigations.
            </p>
            
            <div className="bg-white p-8 border-l-4 border-[#C5963A] shadow-sm mb-12">
              <h4 className="text-[14px] leading-[16px] font-bold tracking-[0.05em] uppercase text-[#001F3F] mb-4">What Does a Forensic Accountant Actually Do?</h4>
              <ul className="list-disc pl-5 space-y-3 text-[16px] text-[#45474c]">
                <li><strong>Fraud Investigations:</strong> Tracing missing funds, uncovering shell companies, and identifying employee embezzlement.</li>
                <li><strong>Dispute Resolution:</strong> Calculating economic damages in commercial disputes and breaches of contract.</li>
                <li><strong>Regulatory Compliance:</strong> Assisting with responses to inquiries from SEBI, RBI, or the Enforcement Directorate.</li>
                <li><strong>M&A Scrutiny:</strong> Performing deep-dive financial due diligence to ensure target financials reflect economic reality.</li>
              </ul>
            </div>

            <h2 className="font-serif text-[28px] font-semibold text-[#001F3F] mt-12 mb-6">The Evolving Landscape in India</h2>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-6">
              The regulatory environment in India has fundamentally shifted. With the increasing sophistication of corporate fraud and the tightening of reporting standards (such as the ICAI's FAIS standards), boards can no longer rely solely on statutory audits to uncover financial malfeasance.
            </p>
            <p className="text-[16px] leading-[28px] text-[#45474c] mb-8">
              Forensic accounting has evolved from a reactive measure into a proactive governance tool. Today's leading enterprises use forensic analytics to identify red flags before they materialize into material losses.
            </p>
            <AuthorBlock />
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <ArticleSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForensicAccounting;
