import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';
import AuthorBlock from '../../components/insights/AuthorBlock';

const MeasuringCommunityDevelopment = () => {
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
                        <span className="text-secondary font-semibold">Measuring Community Development</span>
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
            <section className="relative bg-gradient-to-tr from-[#311b00] to-[#59390a] text-white py-16 md:py-24 px-[20px] md:px-[64px] overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                <div className="max-w-[1280px] mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-[38px] md:text-[62px] leading-[46px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6 text-white">
                            Measuring Community Development
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[38px] text-slate-200 font-light mb-10 max-w-3xl">
                            Beyond Headcounts — Frameworks for Capturing Behavioural and Social Change
                        </p>
                    </div>
                </div>
            </section>

            {/* Metrics Card Grid */}
            <section className="-mt-8 px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">M&E Paradigm Shift</div>
                        <div className="text-[32px] font-black text-primary leading-none">Beyond Headcounts</div>
                        <p className="text-[14px] text-text-muted mt-2">Measuring agency, voice, norm change & collective capacity over raw output lists.</p>
                    </div>
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Advanced Methodologies</div>
                        <div className="text-[32px] font-black text-primary leading-none">MSC, SROI & Outcome Mapping</div>
                        <p className="text-[14px] text-text-muted mt-2">Qualitative stories, monetary proxies, and behavioural shift tracking.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Institutional Goal</div>
                        <div className="text-[32px] font-black text-tertiary leading-none">True Impact Capacity</div>
                        <p className="text-[14px] text-text-muted mt-2">Making visible the profound social changes that simple numbers cannot count.</p>
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
                                How do you measure a woman who now speaks in a Gram Sabha meeting — who didn't three years ago? How do you quantify a village that now resolves land disputes internally instead of through the courts? How do you report the fact that domestic violence in an SHG cluster has declined, even though no one filed a complaint?
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-primary">
                            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#1E293B] font-medium">
                                Community development produces real changes that most M&E frameworks are not built to capture. Reporting headcounts — beneficiaries reached, trainings conducted, accounts opened — is easy. Capturing agency, voice, norm change, and collective capacity is hard. And it is the hard things that actually matter.
                            </p>
                        </div>

                        {/* Paragraph 3 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                Frameworks like the Outcome Mapping methodology (IDRC), the Most Significant Change technique, and Social Return on Investment (SROI) have been developed precisely to address this gap. Each approaches the problem differently: MSC uses community-selected stories of change; SROI assigns monetary proxies to social outcomes; Outcome Mapping tracks shifts in the behaviour of people and organisations, not just output delivery.
                            </p>
                        </div>

                        {/* Paragraph 4 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                None of these is perfect. All of them require more time and skill than a beneficiary database. But they serve a critical function: they make visible the change that numbers cannot count.
                            </p>
                        </div>

                        {/* Paragraph 5 */}
                        <div className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-xl">
                            <p className="text-[17px] font-medium text-slate-800">
                                Funders increasingly expect rigorous outcome data. Organisations that invest in M&E capacity — not just compliance reporting — will be better positioned to make the case for the work that matters most.
                            </p>
                        </div>

                        {/* Verdict Box */}
                        <div className="pt-8">
                            <div className="bg-gradient-to-br from-[#001F3F] to-[#0A2624] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="inline-block px-3 py-1 bg-secondary text-white rounded font-bold text-[11px] uppercase tracking-widest mb-4">
                                    Verdict
                                </div>

                                <blockquote className="text-[22px] md:text-[28px] leading-[34px] md:leading-[42px] font-serif font-medium text-white mb-6">
                                    If you can only count what a spreadsheet captures, you will only fund what a spreadsheet incentivises. Community development needs measurement frameworks as sophisticated as the change it seeks to create.
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

export default MeasuringCommunityDevelopment;