import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ArticleSidebar from '../../components/insights/ArticleSidebar';
import AuthorBlock from '../../components/insights/AuthorBlock';

const Vli = () => {
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
                        <span className="text-secondary font-semibold">Village-Level Institutions & Gram Sabha</span>
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
                            Village-Level Institutions & Gram Sabha
                        </h1>

                        <p className="text-[20px] md:text-[26px] leading-[30px] md:leading-[38px] text-slate-200 font-light mb-10 max-w-3xl">
                            Panchayati Raj as a Development Engine — Promise, Reality, and Best Practice
                        </p>
                    </div>
                </div>
            </section>

            {/* Metrics Card Grid */}
            <section className="-mt-8 px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Constitutional Benchmark</div>
                        <div className="text-[32px] font-black text-primary leading-none">73rd Amendment</div>
                        <p className="text-[14px] text-text-muted mt-2">1992 reform transferring power to village voter assemblies.</p>
                    </div>
                    <div className="p-4 border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Pioneering Devolved Budget</div>
                        <div className="text-[32px] font-black text-primary leading-none">40% Plan Funds</div>
                        <p className="text-[14px] text-text-muted mt-2">Kerala's model of routing plan funds through local planning committees.</p>
                    </div>
                    <div className="p-4">
                        <div className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">Social Audit Mechanism</div>
                        <div className="text-[32px] font-black text-tertiary leading-none">Jan Sunwai</div>
                        <p className="text-[14px] text-text-muted mt-2">Rajasthan's public hearings for participatory social audits of MGNREGS.</p>
                    </div>
                </div>
            </section>

            {/* Article Main Body Content - Only Provided Content */}
            <section className="py-[60px] md:py-[90px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto animate-on-scroll">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Editorial Text Column */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Paragraph 1 */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-[20px] leading-[34px] text-text-main font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                The 73rd Constitutional Amendment of 1992 transferred paper power to the village. Gram Sabhas — assemblies of every adult voter in a village — were given the right to approve development plans, audit social welfare schemes, and hold gram panchayats accountable. On paper, it was radical decentralisation. In practice, it is uneven.
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="bg-[#f0f4f8] p-8 rounded-2xl border-l-4 border-primary">
                            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#1E293B] font-medium">
                                States like Kerala have used the Gram Sabha to route nearly 40% of plan funds through local bodies, with citizen-led planning committees designing annual development budgets from scratch. Rajasthan pioneered the Jan Sunwai — people's public hearings — as a mechanism for social audits of MGNREGS. These are genuine models.
                            </p>
                        </div>

                        {/* Paragraph 3 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                But in most states, Gram Sabhas meet infrequently, attract low turnout, and function as notice-reading exercises rather than deliberative assemblies. Elite capture — dominant castes or panchayat factions controlling the agenda — remains pervasive.
                            </p>
                        </div>

                        {/* Paragraph 4 */}
                        <div className="space-y-4">
                            <p className="text-[18px] leading-[30px] text-text-muted">
                                For NGOs, the Gram Sabha is both an opportunity and a lever. Mobilising women and marginalised groups to attend, preparing communities to raise specific agenda items, and feeding data into the meeting transforms a dormant constitutional body into a functional accountability forum.
                            </p>
                        </div>

                        {/* Paragraph 5 */}
                        <div className="bg-slate-50 border-l-4 border-secondary p-6 rounded-r-xl">
                            <p className="text-[17px] font-medium text-slate-800">
                                The institution exists. The activation work is where civil society adds irreplaceable value.
                            </p>
                        </div>

                        {/* Verdict Box */}
                        <div className="pt-8">
                            <div className="bg-gradient-to-br from-[#001F3F] to-[#0A2624] text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="inline-block px-3 py-1 bg-secondary text-white rounded font-bold text-[11px] uppercase tracking-widest mb-4">
                                    Verdict
                                </div>

                                <blockquote className="text-[22px] md:text-[28px] leading-[34px] md:leading-[42px] font-serif font-medium text-white mb-6">
                                    Panchayati Raj is not a finished system — it is a framework that community mobilisation can fill. The best development organisations don't bypass local institutions; they breathe life into them.
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

export default Vli;