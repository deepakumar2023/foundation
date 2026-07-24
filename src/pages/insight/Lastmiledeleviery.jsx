import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';
import AuthorBlock from '../../components/insights/AuthorBlock';

const Lastmiledeleviery = () => {
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

    return (
        <div className="min-h-screen font-['Hanken_Grotesk',sans-serif]">

            {/* Top Navigation & Breadcrumbs */}
            <div className="bg-[#0f172a] text-white py-4 px-[20px] md:px-[64px] border-b border-slate-800">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between text-[13px] font-medium">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/knowledge-centre" className="hover:text-white transition-colors">Knowledge Centre</Link>
                        <span>/</span>
                        <span className="text-secondary font-semibold">Last-Mile Delivery Failures</span>
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
            <section className="relative bg-gradient-to-br from-[#0A2624] to-[#144744] text-white py-16 md:py-24 px-[20px] md:px-[64px] overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="max-w-[1280px] mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-[38px] md:text-[62px] leading-[46px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6 text-white">
                            Last-Mile Delivery Failures
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[38px] text-slate-200 font-light mb-10 max-w-3xl">
                            Why Government Schemes Don't Reach Beneficiaries — And What NGOs Can Do Differently
                        </p>
                    </div>
                </div>
            </section>

            {/* Metrics Card Grid */}
            <section className="-mt-8 px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Annual Outlay</div>
                        <div className="text-[32px] font-black text-primary leading-none">₹10 Lakh Cr+</div>
                        <p className="text-[14px] text-text-muted mt-2">Spent annually on social sector schemes across India.</p>
                    </div>
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Root Cause Bottlenecks</div>
                        <div className="text-[32px] font-black text-primary leading-none">3 Failure Modes</div>
                        <p className="text-[14px] text-text-muted mt-2">Awareness gaps, process barriers, and systemic leakage.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Effective Strategy</div>
                        <div className="text-[32px] font-black text-tertiary leading-none">Dual Approach</div>
                        <p className="text-[14px] text-text-muted mt-2">Immediate relief facilitation combined with systemic policy advocacy.</p>
                    </div>
                </div>
            </section>

            {/* Article Main Body Content - Strictly User Text Only */}
            <section className="py-[60px] md:py-[90px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Editorial Text Column */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Paragraph 1 */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-[20px] leading-[34px] text-text-main font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                India spends over ₹10 lakh crore annually on social sector schemes. A significant fraction does not reach its intended recipient. Understanding why is not cynicism — it is the first step in fixing it.
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-primary">
                            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#1E293B] font-medium">
                                Last-mile failures cluster around three failure modes. First, awareness gaps: beneficiaries don't know a scheme exists, or don't understand their entitlement. Second, process barriers: documentation requirements, digital exclusion, or multiple trips to government offices make claiming rights too costly for the poorest. Third, systemic leakage: intermediaries capture benefits that should flow forward.
                            </p>
                        </div>

                        {/* Paragraph 3 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                NGOs working in this space have developed distinct responses. Community-based monitoring, where trained local volunteers track scheme implementation and report gaps, creates a parallel accountability layer. Facilitated entitlements programmes — where NGO staff help individuals complete applications — address the process barrier without lobbying for systemic change.
                            </p>
                        </div>

                        {/* Paragraph 4 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                The more durable intervention is systemic: pushing for simplified eligibility criteria, single-window delivery, and grievance redressal mechanisms with teeth. This is policy advocacy work, and it requires a different set of relationships and a longer horizon.
                            </p>
                        </div>

                        {/* Paragraph 5 */}
                        <div className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-xl">
                            <p className="text-[17px] font-medium text-slate-800">
                                The most effective organisations do both simultaneously: immediate facilitation to deliver relief now, systemic advocacy to make facilitation unnecessary in the future.
                            </p>
                        </div>

                        {/* Verdict Box */}
                        <div className="pt-8">
                            <div className="bg-gradient-to-br from-[#001F3F] to-[#0A2624] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="inline-block px-3 py-1 bg-secondary text-white rounded font-bold text-[11px] uppercase tracking-widest mb-4">
                                    Verdict
                                </div>

                                <blockquote className="text-[22px] md:text-[28px] leading-[34px] md:leading-[42px] font-serif font-medium text-white mb-6">
                                    The last mile is not a logistics problem — it is a power problem. NGOs that frame it correctly do not just deliver services; they shift the conditions that make non-delivery possible.
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

export default Lastmiledeleviery;