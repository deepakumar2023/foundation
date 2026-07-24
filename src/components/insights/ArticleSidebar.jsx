import React from 'react';
import { Link } from 'react-router-dom';

const ArticleSidebar = () => {
  const suggestedArticles = [
    {
      title: "Last-Mile Delivery Failures: Why Government Schemes Don't Reach Beneficiaries",
      category: "Governance",
      tagClass: "bg-[#001F3F] text-white",
      link: "/insight/lastmiledeleviery",
      readTime: "5 min"
    },
    {
      title: "Participatory Rural Appraisal: Communities Designing Solutions",
      category: "Methodology",
      tagClass: "bg-blue-50 text-blue-600",
      link: "/insight/pra",
      readTime: "5 min"
    },
    {
      title: "Measuring Community Development: Beyond Headcounts to Social Change",
      category: "Impact Measurement",
      tagClass: "bg-teal-50 text-teal-600",
      link: "/insight/measuring",
      readTime: "5 min"
    }
  ];

  return (
    <div className="w-full">
      <div className="sticky top-28">
        <h3 className="font-serif text-[22px] font-bold text-[#1A2B45] mb-6 border-b border-gray-200 pb-4">
          Suggested Reading
        </h3>
        <div className="flex flex-col gap-6">
          {suggestedArticles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.link}
              className="group block border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider shadow-sm ${article.tagClass}`}>
                  {article.category}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                  {article.readTime}
                </span>
              </div>
              <h4 className="font-serif text-[15px] font-bold text-[#1A2B45] leading-[1.4] group-hover:text-[#C5963A] transition-colors">
                {article.title}
              </h4>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#C5963A] uppercase tracking-widest">
                Read Article
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 group-hover:translate-x-1 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
            </Link>
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default ArticleSidebar;
