import { useState } from 'react';
import { Link } from 'react-router-dom';

const InsightCard = ({ data }) => (
  <Link
    to={data.link || (data.slug ? `/reports/${data.slug}` : "/contact")}
    className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
  >
    <div className={`relative overflow-hidden flex flex-col ${!data.img ? (data.bgGradient || 'bg-gradient-to-br from-[#1A2B45] to-[#2b4c7e]') + ' p-6 pt-16 min-h-[220px]' : 'h-48'}`}>
      {data.img ? (
        <img
          className="w-full h-full absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-110"
          src={data.img}
          alt={data.title}
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12px_12px] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      )}
      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-sm ${data.img ? data.tagClass : 'bg-white text-gray-800'}`}>
          {data.categoryName}
        </span>
        {data.isNew && (
          <span className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-sm bg-[#C5963A] text-white animate-pulse">
            New
          </span>
        )}
      </div>

      {!data.img && (
        <h3 className="relative z-10 font-serif text-[20px] font-bold text-white leading-[1.3] group-hover:text-[#C5963A] transition-colors mt-auto">
          {data.title}
        </h3>
      )}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 font-semibold">
        {data.date}
      </div>
      {data.img && (
        <h3 className="font-serif text-[17px] font-bold text-[#1A2B45] leading-[1.3] mb-4 group-hover:text-[#C5963A] transition-colors">
          {data.title}
        </h3>
      )}
      <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-1 line-clamp-3">
        {data.text}
      </p>
      <div className="pt-5 border-t border-gray-50 flex justify-between items-center">
        <div className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A2B45] group-hover:bg-[#1A2B45] group-hover:text-white transition-all duration-300 flex items-center gap-2">
          READ
          <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </div>
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{data.readTime}</span>
      </div>
    </div>
  </Link>
);

const HomeInsightsV3 = ({ limit }) => {


  const filters = [
    { id: 'all', label: 'All Topics' },
    { id: 'due-diligence', label: 'Due Diligence' },
    { id: 'forensic', label: 'Forensic' },
    { id: 'taxation', label: 'Taxation' },
    { id: 'transaction', label: 'Transaction Advisory' },
    { id: 'reporting', label: 'Financial Reporting' },
    { id: 'assurance', label: 'Assurance & Risk' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'grants', label: 'Grants & ESG' }
  ];

  const insights = [
    { 
      id: 1, 
      link: '/insight/shgrevolution', 
      category: 'microfinance', 
      categoryName: 'Microfinance', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#001F3F] to-[#0a3663]', 
      title: 'The SHG Revolution: How Self-Help Groups Transformed Rural Women', 
      text: 'In 1992, NABARD linked 500 SHGs directly to bank credit. Three decades later, over 12 million SHGs mobilise ₹47,000 crore in savings for women.', 
      readTime: '5 min', 
      isNew: true 
    },
    { 
      id: 2, 
      link: '/insight/chw', 
      category: 'healthcare', 
      categoryName: 'Healthcare', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-bl from-[#1A2B45] to-[#2b4c7e]', 
      title: 'Community Health Workers: The Peer-to-Peer Health Model', 
      text: 'Health behaviour change happens through trusted relationships. Over a million ASHAs across rural India prove that peer healthcare saves lives.', 
      readTime: '5 min', 
      isNew: true 
    },
    { 
      id: 3, 
      link: '/insight/lastmiledeleviery', 
      category: 'governance', 
      categoryName: 'Governance', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#0A2624] to-[#144744]', 
      title: 'Last-Mile Delivery Failures: Why Government Schemes Don\'t Reach Beneficiaries', 
      text: 'India spends over ₹10 lakh crore annually on social schemes. Addressing awareness gaps, process barriers, and systemic leakage is key to real impact.', 
      readTime: '5 min', 
      isNew: true 
    },
    { 
      id: 4, 
      link: '/insight/urban', 
      category: 'urban', 
      categoryName: 'Urban Development', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-tr from-[#311b00] to-[#59390a]', 
      title: 'Urban Slum Development Models: Dharavi, SPARC, and Designing for Density', 
      text: 'Dharavi generates over ₹5,000 crore in annual turnover. In-situ upgrading and community-led enumeration produce far better outcomes than clearance.', 
      readTime: '5 min', 
      isNew: true 
    },
    { 
      id: 5, 
      link: '/insight/technology', 
      category: 'technology', 
      categoryName: 'Technology', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#400e0e] to-[#731919]', 
      title: 'Technology as a Grassroots Tool: Voice-Based & Offline Solutions', 
      text: 'Designing tech for 300 million low-literacy adults requires voice over text, local languages, offline-first design, and female-centered interfaces.', 
      readTime: '5 min', 
      isNew: true 
    },
    { 
      id: 6, 
      link: '/insight/pra', 
      category: 'methodology', 
      categoryName: 'Field Methodology', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#0A2624] to-[#144744]', 
      title: 'Participatory Rural Appraisal: Communities Designing Their Own Solutions', 
      text: 'Field tools like social mapping and seasonal calendars transfer the role of expert from NGO workers directly to the village community.', 
      readTime: '5 min', 
      isNew: false 
    },
    { 
      id: 7, 
      link: '/insight/community', 
      category: 'community', 
      categoryName: 'Community Ownership', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-tr from-[#311b00] to-[#59390a]', 
      title: 'Collective Action & Community Ownership: Building Programs That Last', 
      text: 'Rooted in Elinor Ostrom\'s Nobel-winning work: how to build local ownership structures from day one so communities sustain impact after you leave.', 
      readTime: '5 min', 
      isNew: false 
    },
    { 
      id: 8, 
      link: '/insight/sewa', 
      category: 'empowerment', 
      categoryName: 'Empowerment', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#400e0e] to-[#731919]', 
      title: 'The SEWA Model: How an Informal Workers\' Union Became a Global Blueprint', 
      text: 'Organising 2 million+ informal women workers across 18 states through a dual union-cooperative model with micro-loans, insurance, and childcare.', 
      readTime: '5 min', 
      isNew: false 
    },
    { 
      id: 9, 
      link: '/insight/vli', 
      category: 'governance', 
      categoryName: 'Local Governance', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-br from-[#0A2624] to-[#144744]', 
      title: 'Village-Level Institutions & Gram Sabha: Panchayati Raj as a Development Engine', 
      text: 'The 73rd Amendment transferred paper power to village assemblies. Civil society activation transforms dormant Gram Sabhas into accountability forums.', 
      readTime: '5 min', 
      isNew: false 
    },
    { 
      id: 10, 
      link: '/insight/measuring', 
      category: 'impact', 
      categoryName: 'Impact Measurement', 
      date: 'Jul 2026', 
      bgGradient: 'bg-gradient-to-tr from-[#311b00] to-[#59390a]', 
      title: 'Measuring Community Development: Beyond Headcounts to Social Change', 
      text: 'Capturing agency, voice, norm change, and collective capacity through Outcome Mapping, Most Significant Change, and SROI frameworks.', 
      readTime: '5 min', 
      isNew: false 
    }
  ];


  return (
    <section className="py-10 bg-white" id="insights">
     

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10 sr">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">

              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C5963A]">Latest Thinking</span>
            </div>
            <h2 className="font-serif text-[42px] md:text-[52px] font-normal text-[#1A2B45] leading-[1.05] tracking-tight">
              Insights & <em className="italic font-light text-gray-400">Perspectives</em>
            </h2>
            <p className="text-[15px] text-gray-500 mt-6 leading-relaxed">
              Two curated reads per service area — drawn from live mandates and regulatory change across India.
            </p>
          </div>
          <Link to="/contact" className="text-[12px] font-bold text-[#1A2B45] flex items-center gap-2 hover:text-[#C5963A] transition-colors pb-2 border-b-2 border-transparent hover:border-[#C5963A] mb-2 uppercase tracking-widest">
            All Insights
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {
            insights?.map((insight) => (
              <InsightCard
                key={insight.id}
                data={insight}
              />
            ))}
         
          
        </div>
      </div>
    </section>
  );
};

export default HomeInsightsV3; 