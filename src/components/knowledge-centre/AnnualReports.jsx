import { FiChevronRight, FiChevronDown, FiArrowDown } from "react-icons/fi";

const reports = [
  { year: "2024-25", active: true },
  { year: "2023-24", active: false },
  { year: "2022-23", active: false },
  { year: "2021-22", active: false },
  { year: "2020-21", active: false },
  { year: "2019-20", active: false },
  { year: "2018-19", active: false },
  { year: "2017-18", active: false },
];

const AnnualReports = () => {
  return (
    <div className="min-h-screen pt-[100px] md:pt-[120px] lg:pt-[140px] bg-[#f8f9fa]">
      {/* Hero / Breadcrumb Section */}
      <section className="px-[16px] md:px-[32px] lg:px-[48px] py-[48px] max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-[8px] mb-[32px] text-gray-500 font-bold text-[14px]">
          <a className="hover:text-[#00204f] transition-colors" href="/">Home</a>
          <FiChevronRight className="text-[16px]" />
          <span className="text-[#00204f] font-bold underline decoration-2 underline-offset-4">Annual Reports</span>
        </nav>

        {/* Title + Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
          <div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[60px] font-bold text-[#00204f] mb-[16px] leading-tight">
              Annual Reports
            </h1>
            <p className="text-gray-600 text-[18px] md:text-[20px] max-w-2xl leading-relaxed">
              Explore our comprehensive financial and impact summaries, chronicling our journey toward sustainable change and community empowerment.
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="relative inline-block w-full md:w-[256px] flex-shrink-0">
            <label className="block font-bold text-[14px] text-gray-500 mb-[8px]">Select Year Range</label>
            <div className="relative">
              <select className="w-full appearance-none border border-gray-300 rounded-[8px] px-[16px] py-[12px] bg-white text-gray-900 font-bold text-[14px] focus:outline-none focus:ring-2 focus:ring-[#00204f] focus:border-transparent transition-all cursor-pointer">
                <option>2024-25</option>
                <option>2023-24</option>
                <option>2022-23</option>
                <option>2021-22</option>
                <option>2020-21</option>
                <option>2019-20</option>
                <option>2018-19</option>
                <option>2017-18</option>
              </select>
              <FiChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[20px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="px-[16px] md:px-[32px] lg:px-[48px] pb-[80px] md:pb-[120px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {reports.map(({ year, active }) => (
            <div
              key={year}
              className={`p-[32px] rounded-[12px] flex flex-col justify-between h-[280px] transition-shadow hover:shadow-md ${
                active ? "bg-[#F8E8F8]" : "bg-gray-100"
              }`}
            >
              <div>
                <p className="font-bold text-[12px] text-gray-500 uppercase tracking-widest mb-[8px]">
                  Annual Report
                </p>
                <h3 className="text-[28px] md:text-[32px] font-bold text-[#00204f]">{year}</h3>
              </div>
              <button className="flex items-center gap-[12px] text-[#00204f] font-bold group mt-auto hover:opacity-80 transition-opacity">
                <span
                  className={`w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                    active ? "bg-[#1a3668]" : "bg-[#00204f]"
                  }`}
                >
                  <FiArrowDown className="text-white text-[20px]" />
                </span>
                <span className="font-bold text-[14px]">Download</span>
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-[64px] flex justify-center">
          <button className="border border-[#00204f] text-[#00204f] px-[32px] py-[12px] rounded-[8px] font-bold text-[14px] hover:bg-[#00204f] hover:text-white transition-all duration-300">
            Load Archive Reports
          </button>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;
