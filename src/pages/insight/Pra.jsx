import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';
import AuthorBlock from '../../components/insights/AuthorBlock';

const Pra = () => {
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
                        <span className="text-secondary font-semibold">Participatory Rural Appraisal (PRA)</span>
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
                            Participatory Rural Appraisal (PRA)
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[38px] text-slate-200 font-light mb-10 max-w-3xl">
                            The Framework That Makes Communities Design Their Own Solutions
                        </p>


                    </div>
                </div>
            </section>

            {/* Metrics Card Grid */}
            <section className="-mt-8 px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Methodology Origin</div>
                        <div className="text-[32px] font-black text-primary leading-none">1980s</div>
                        <p className="text-[14px] text-text-muted mt-2">Pioneered by Robert Chambers & refined across South Asia.</p>
                    </div>
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Core Paradigm</div>
                        <div className="text-[32px] font-black text-primary leading-none">Community First</div>
                        <p className="text-[14px] text-text-muted mt-2">Transfers the role of 'expert' from NGO worker to villagers.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Field Toolkit</div>
                        <div className="text-[32px] font-black text-tertiary leading-none">4 Core Tools</div>
                        <p className="text-[14px] text-text-muted mt-2">Social mapping, seasonal calendars, wealth ranking & transect walks.</p>
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
                                Most development programmes fail not because of bad ideas — but because outsiders designed solutions for problems they only partially understood. PRA exists to fix that.
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-primary">
                            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#1E293B] font-medium">
                                Developed in the 1980s by Robert Chambers and refined across South Asia, Participatory Rural Appraisal is a cluster of field tools — social mapping, seasonal calendars, wealth ranking, transect walks — that transfer the role of 'expert' from the NGO worker to the community itself.
                            </p>
                        </div>

                        {/* Core Participatory Tools Breakdown */}
                        <div className="pt-6">
                            <h2 className="text-[28px] md:text-[34px] font-bold text-primary mb-6 leading-tight">
                                How PRA Works in the Field
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 bg-blue-100 text-primary rounded-lg flex items-center justify-center font-bold text-lg mb-3">
                                        1
                                    </div>
                                    <h3 className="text-[18px] font-bold text-primary mb-1">Social & Resource Mapping</h3>
                                    <p className="text-[15px] leading-[24px] text-text-muted">
                                        Villagers draw their own territorial maps, identifying natural resources, households, and critical infrastructure.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 bg-amber-100 text-secondary rounded-lg flex items-center justify-center font-bold text-lg mb-3">
                                        2
                                    </div>
                                    <h3 className="text-[18px] font-bold text-primary mb-1">Seasonal Calendars</h3>
                                    <p className="text-[15px] leading-[24px] text-text-muted">
                                        Tracking rainfall, labor migration, disease cycles, and food availability throughout the agricultural year.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 bg-emerald-100 text-tertiary rounded-lg flex items-center justify-center font-bold text-lg mb-3">
                                        3
                                    </div>
                                    <h3 className="text-[18px] font-bold text-primary mb-1">Wealth Ranking</h3>
                                    <p className="text-[15px] leading-[24px] text-text-muted">
                                        Community-defined criteria to identify vulnerable families needing prioritized intervention.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center font-bold text-lg mb-3">
                                        4
                                    </div>
                                    <h3 className="text-[18px] font-bold text-primary mb-1">Transect Walks</h3>
                                    <p className="text-[15px] leading-[24px] text-text-muted">
                                        Systematic walks across village micro-zones with local guides to observe ecological land-use changes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Paragraph 3 */}
                        <div className="pt-4 space-y-4">
                            <h2 className="text-[26px] md:text-[30px] font-bold text-primary leading-tight">
                                Shifting the Analytical Ownership
                            </h2>
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                In a PRA exercise, it is the villagers who draw the map, identify the seasonal stress periods, and rank who in their community is most vulnerable. The facilitator asks questions. The community owns the analysis.
                            </p>
                        </div>

                        {/* Paragraph 4: Seasonal Calendar Case Study */}
                        <div className="space-y-4">
                            <h2 className="text-[26px] md:text-[30px] font-bold text-primary leading-tight">
                                Impact on Programme Design
                            </h2>
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                This matters enormously for programme design. A seasonal calendar drawn by women in a dryland farming village might reveal that the critical nutrition gap is not winter — when NGO food drives typically arrive — but the July–August hungry season just before harvest. That insight changes everything downstream.
                            </p>
                        </div>

                        {/* Paragraph 5: Critical Methodological Requirements */}
                        <div className="pt-2">
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl space-y-3">
                                <h4 className="font-bold text-amber-900 text-[18px]">Methodological Guardrails</h4>
                                <p className="text-amber-800 text-[16px] leading-[26px]">
                                    PRA has its critics: poorly facilitated sessions can reinforce existing hierarchies and allow dominant voices to monopolise the process. Gender-disaggregated exercises and separate sessions with marginalised groups are not optional — they are methodological requirements.
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
                                    "When communities analyze their own reality, development moves from passive charity to self-determined transformation."
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

export default Pra;