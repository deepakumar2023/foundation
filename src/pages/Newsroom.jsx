import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";

/* ─── Data ─── */
const newsCards = [
  {
    id: 1,
    tag: "Urban Afforestation",
    tagBg: "bg-[#006d3d] text-white",
    date: "Oct 24, 2024",
    title: "Greening North West Delhi: Over 5,000 Saplings Planted in Major Drive",
    desc: "In collaboration with local volunteers, our latest afforestation project has successfully transformed 2 acres of barren land into a burgeoning native forest.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGqWTfGIMVtSMGEiWf5d9grKWb4daEs6R-FahwPvxtiWoPb9L2c_ZivOmvf7pF7GJE7VEq_ZQM8vjRKDZMWyZCrpo5h_1HnMBLxNPQMgqdk3NvvhdjuwhI1jaCpIE0B0blur4MMSPiKKcxkott9kF0ZYLL82rseUFKkIMySZtyH5YXH0fH9ERg9-T7oWhg_hbRC_sghPooAjKWMyF_wYRzBjYbOfONNLIQprpwZfOTSI9GiRsD5MEBGOgSOfbPC-OqU0NHJjum_2-x",
  },
  {
    id: 2,
    tag: "Community",
    tagBg: "bg-[#f88034] text-white",
    date: "Oct 12, 2024",
    title: "Empowering Youth: Digital Survival Audit Completed in 15 Hubs",
    desc: "The Digital Survival Audit aimed at identifying literacy gaps among urban youth has concluded, paving the way for targeted training programs in 2025.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_cjHURMygzIr-yh8VZlBM4PzualwsQcLs7Af6j9mBXW5xjzL-ViOWPnkVY_1YCvHtjZptGs83EFA7d8KAacCuchb9wFHEuY-Om1lzL3Qq8AYWjRFPMbiD9P4zqsBMS7usFBfFu5kveOyvBRMyl2HgHZ32mEAJVmH9V0LCz4X8b1LF_boPo03aAKFpMH0praxC3qPiJvcSBfdxgqT6dDZMuubHWCazecdWVnrtGZIkfGlcgUF_OdRO6lO8B5DGk5KEzhlzyokSfE9",
  },
  {
    id: 3,
    tag: "Awards",
    tagBg: "bg-[#00204f] text-white",
    date: "Sep 28, 2024",
    title: "Foundation Receives 'Sustainable Impact' Award at Annual Summit",
    desc: "Our commitment to sustainable community development was recognized on a national level, highlighting our unique approach to integrated local empowerment.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbCF6gu2XqO0DdvRg4crAUb4_6nNhG6X-rshhjE0hJVCPfXNoOJ8cbv2EyAC5rj8bjoNm8gIWgPaZcfw7MrYDNT1ENl3dCeP1mv4UN2WFiBf9m6XMFys6F2HPGGFZX-RFqE4cVGCX6RKeXXs2sBIPSlIg1hmi8tSTjdTVOi3Z_mCsjV3qH3X6vgehm7_Kg_XNyT-rAuwz7wJeRQQCuT76CGjDfBgaTop1RifB6jNtw3kFtJLhOBKD1eWYAwBpjy3m_JT1xphK4tZI",
  },
];

const quickReads = [
  {
    id: 1,
    label: "PROJECT UPDATE",
    time: "2h ago",
    text: "Phase 2 of Solar Grid Installation begins in rural clusters.",
  },
  {
    id: 2,
    label: "NEWS",
    time: "5h ago",
    text: "Deepak Gupta Foundation partners with Green-Tech for waste management.",
  },
  {
    id: 3,
    label: "ANNOUNCEMENT",
    time: "Yesterday",
    text: "Call for Volunteers: Winter Blanket Distribution Drive 2024.",
  },
];

const categories = [
  "All Categories",
  "Urban Afforestation",
  "Community Impact",
  "Education",
  "Awards & Recognition",
];
const years = ["2024", "2023", "2022", "Archive"];

/* ─── Component ─── */
const Newsroom = () => {
  const [category, setCategory] = useState("All Categories");
  const [year, setYear] = useState("2024");
  const [activePage, setActivePage] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <main className="pt-10 pb-16 md:pb-28 bg-[#f8f9fa] text-[#191c1d] min-h-screen">
      {/* ── Hero Header ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-12 md:mb-16 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          {/* Left */}
          <div>
            <span className="inline-block bg-[#97f3b5] text-[#047240] px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4">
              Foundation Updates
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00204f] mb-5 leading-tight">
              Newsroom
            </h1>
            <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
              Stay updated with the Deepak Gupta Foundation's latest initiatives,
              milestones, and ground-breaking impact stories from across the
              communities we serve.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            {/* Category */}
            <div className="relative">
              <label className="block text-xs font-semibold text-[#00204f] mb-2 tracking-wide">
                Filter by Category
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 px-5 py-3 rounded-xl w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-[#00204f]/20 transition-all cursor-pointer text-sm"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <FiChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Year */}
            <div className="relative">
              <label className="block text-xs font-semibold text-[#00204f] mb-2 tracking-wide">
                Year
              </label>
              <div className="relative">
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 px-5 py-3 rounded-xl w-full sm:w-36 focus:outline-none focus:ring-2 focus:ring-[#00204f]/20 transition-all cursor-pointer text-sm"
                >
                  {years.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
                <FiChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── News Cards Grid ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {newsCards.map((card) => (
            <article
              key={card.id}
              className="bg-surface rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="h-56 sm:h-64 relative overflow-hidden flex-shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 left-4 ${card.tagBg} px-3 py-1 rounded-lg text-xs font-semibold tracking-wide`}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-xs font-semibold tracking-wide text-gray-400 mb-3">
                  {card.date}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-[#00204f] mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#00204f] hover:text-[#006d3d] transition-colors group/link mt-auto"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1a3668] flex items-center justify-center text-[#87a0d9] group-hover/link:bg-[#006d3d] group-hover/link:text-white transition-all flex-shrink-0">
                    <FiArrowRight size={14} />
                  </span>
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Asymmetric Layout: Featured + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Featured Spotlight */}
          <div className="lg:col-span-8 bg-gray-100 rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Text */}
              <div className="md:w-1/2">
                <span className="inline-block bg-[#00204f] text-white px-3 py-1 rounded-lg text-xs font-semibold tracking-wide mb-5">
                  Spotlight Story
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00204f] mb-5 leading-tight">
                  Bridging the Gap: The 2024 Community Training Initiative
                </h2>
                <p className="text-base md:text-lg text-text-muted mb-7 leading-relaxed">
                  A comprehensive look into how we've trained over 1,200
                  individuals this year in high-demand vocational skills, directly
                  impacting household incomes across three districts.
                </p>
                <button className="bg-[#00204f] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm font-semibold hover:bg-[#006d3d] transition-all flex items-center gap-3">
                  VIEW THE REPORT
                  <FiExternalLink size={16} />
                </button>
              </div>

              {/* Image */}
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5TcxGPV_CwDgUZMcN8PQllKrcVd6QU5sEY5ZALkB-XmDzfl9QiHJw9zHaheW4Zb4ViEpIgxudMehHc1ob431NL3mliv4NZUifmR-C37BYy0UZFk90ZXV94gMdp0b1JOfP96Pw_0Oq2D7zXDSgY7zGLHdZHyB6lll8993k7kMSiBWJeZNJC3YCSa4de_x74-NZMQ1hcuV1zIeuQ38LmaYlYfPc_whEhzv3vx9AvRuleTdWX9sZcIDUWfKlOEnyxkbZ5TvadsPHwK_M"
                  alt="Vocational Training"
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#006d3d]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Read header */}
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-xl md:text-2xl font-semibold text-[#00204f]">
                Quick Read
              </h4>
              <Link
                to="/newsroom/press-releases"
                className="text-xs font-semibold text-[#006d3d] hover:underline"
              >
                See All
              </Link>
            </div>

            {/* Quick entries */}
            <div className="space-y-4">
              {quickReads.map((item) => (
                <div
                  key={item.id}
                  className="p-5 md:p-6 bg-surface rounded-2xl border border-gray-100 hover:border-[#006d3d] transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold tracking-wide text-[#006d3d]">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#00204f] group-hover:text-[#006d3d] transition-colors leading-snug">
                    {item.text}
                  </h5>
                </div>
              ))}
            </div>

            {/* Newsletter box */}
            <div className="bg-[#1a3668] p-6 md:p-8 rounded-3xl text-white mt-6">
              <h4 className="font-bold text-lg md:text-xl mb-3">
                Direct to your inbox
              </h4>
              <p className="text-sm opacity-75 mb-5 leading-relaxed">
                Receive a monthly summary of our impact and stories of change.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="bg-surface/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 focus:ring-2 focus:ring-[#006d3d] focus:outline-none transition-all"
                />
                <button className="bg-[#006d3d] text-white w-full py-3 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pagination ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-16 md:mt-20 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 transition-all">
            <FiChevronLeft size={18} />
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                activePage === p
                  ? "bg-[#00204f] text-white"
                  : "border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
          <span className="px-1 md:px-2 text-gray-400">...</span>
          <button
            onClick={() => setActivePage(8)}
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
              activePage === 8
                ? "bg-[#00204f] text-white"
                : "border border-gray-200 hover:bg-gray-100"
            }`}
          >
            8
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 transition-all">
            <FiChevronRight size={18} />
          </button>
        </nav>
      </section>
    </main>
  );
};

export default Newsroom;
