import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';
import AuthorBlock from '../../components/insights/AuthorBlock';

const Shgrevolution = () => {
    const navigate = useNavigate();
  

    useEffect(() => {
        // Reveal on scroll animation
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

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className=" min-h-screen">

            {/* Top Navigation & Breadcrumbs */}
            <div className="bg-[#0f172a] text-white py-4 px-[20px] md:px-[64px] border-b border-slate-800">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[13px] font-medium">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/knowledge-centre" className="hover:text-white transition-colors">Knowledge Centre</Link>
                        <span>/</span>
                        <span className="text-secondary font-semibold">SHG Revolution</span>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#001F3F] to-[#0a3663] text-white py-16 md:py-24 px-[20px] md:px-[64px] overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="max-w-[1280px] mx-auto relative z-10">
                    <div className="max-w-4xl">


                        <h1 className="text-[38px] md:text-[62px] leading-[46px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6 text-white">
                            The SHG Revolution
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[38px] text-slate-200 font-light mb-10 max-w-3xl">
                            How Self-Help Groups Transformed Rural Women into Economic Agents
                        </p>

        
                    </div>
                </div>
            </section>

            {/* Metrics Card Grid (No Image) */}
            <section className="-mt-8 px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Pioneering Pilot</div>
                        <div className="text-[32px] font-black text-primary leading-none">1992</div>
                        <p className="text-[14px] text-text-muted mt-2">NABARD linked 500 self-help groups directly to bank credit.</p>
                    </div>
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Scale & Outreach</div>
                        <div className="text-[32px] font-black text-primary leading-none">12 Million+</div>
                        <p className="text-[14px] text-text-muted mt-2">SHGs operating across India today.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Capital Mobilised</div>
                        <div className="text-[32px] font-black text-tertiary leading-none">₹47,000 Cr</div>
                        <p className="text-[14px] text-text-muted mt-2">Savings pooled & channelled to rural women.</p>
                    </div>
                </div>
            </section>

            {/* Article Main Body Content */}
            <section className="py-[60px] md:py-[90px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Editorial Text Column */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Paragraph 1 */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-[20px] leading-[34px] text-text-main font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                In 1992, NABARD ran a quiet pilot. It linked 500 self-help groups — small clusters of rural women pooling savings — directly to bank credit. Nobody predicted what came next.
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-primary">
                            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#1E293B] font-medium">
                                Three decades later, over 12 million SHGs exist across India, mobilising nearly ₹47,000 crore in savings and channelling institutional credit to women who had never held a bank account. The NABARD-SHG linkage model is now the world's largest microfinance programme by reach.
                            </p>
                        </div>

                        {/* What makes it work section */}
                        <div className="pt-6">
                            <h2 className="text-[28px] md:text-[34px] font-bold text-primary mb-6 leading-tight">
                                What makes it work? Three things:
                            </h2>

                            <div className="space-y-4">
                                {/* Feature 1 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-primary mb-1">Peer Accountability</h3>
                                        <p className="text-[16px] leading-[26px] text-text-muted">
                                            Repayment pressure comes from neighbours, not loan officers.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-100 text-secondary rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-primary mb-1">Graduated Credit</h3>
                                        <p className="text-[16px] leading-[26px] text-text-muted">
                                            Groups borrow small, repay, borrow bigger.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 text-tertiary rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-bold text-primary mb-1">Compulsory Savings Habit</h3>
                                        <p className="text-[16px] leading-[26px] text-text-muted">
                                            Builds financial identity before credit arrives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Paragraph 4: Tension & Andhra Pradesh Case */}
                        <div className="pt-4 space-y-4">
                            <h2 className="text-[26px] md:text-[30px] font-bold text-primary leading-tight">
                                Commercialisation & Systemic Tension
                            </h2>

                            <p className="text-[18px] leading-[30px] text-text-muted">
                                The model is not without tension. Commercialisation of SHGs by MFIs in the 2000s triggered over-indebtedness crises — Andhra Pradesh in 2010 being the starkest example.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                                <p className="text-amber-900 text-[17px] font-medium leading-[26px]">
                                    <strong>The lesson:</strong> SHGs function as social infrastructure. Treat them as loan origination channels and you break something irreplaceable.
                                </p>
                            </div>
                        </div>

                        {/* Paragraph 5: Architecture */}
                        <div className="space-y-4">
                            <h2 className="text-[26px] md:text-[30px] font-bold text-primary leading-tight">
                                Replicable Architecture for Practitioners
                            </h2>

                            <p className="text-[18px] leading-[30px] text-text-muted">
                                For development practitioners, the SHG model offers a replicable architecture: small groups, regular cadence, peer governance, and progressive linkage to formal systems.
                            </p>

                            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6">
                                <p className="text-[17px] font-medium text-slate-800 italic">
                                    The mechanics are simple. The discipline required to protect group integrity — that is the hard part.
                                </p>
                            </div>
                        </div>

                        {/* Verdict Box */}
                        <div className="pt-8">
                            <div className="bg-gradient-to-br from-[#001F3F] to-[#0A2624] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="inline-block px-3 py-1 bg-secondary text-white rounded font-bold text-[11px] uppercase tracking-widest mb-4">
                                    Verdict
                                </div>

                                <blockquote className="text-[22px] md:text-[28px] leading-[34px] md:leading-[42px] font-serif font-medium text-white mb-6">
                                    SHGs remain India's most proven vehicle for women's economic inclusion — but only when the community logic is preserved. Speed and scale without soul produce the opposite of development.
                                </blockquote>

                                <div className="flex items-center gap-3 pt-4 border-t border-white/20 text-slate-300 text-[14px]">
                                    <span className="font-semibold text-white">Deepak Gupta Foundation</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <ArticleSidebar />
                    </div>

                </div>

                <AuthorBlock />
            </section>



           
        </div>
    );
};

export default Shgrevolution;