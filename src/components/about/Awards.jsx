import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiArrowRight,
  FiInfo,
  FiMail,
  FiPlayCircle,
} from "react-icons/fi";

const awards = [
  {
    id: 1,
    year: "2024",
    title: "Government of Gujarat's Van Pandit Award",
    description:
      "Honored for the monumental achievement of planting over 1.7 lakh trees in Mundra, Gujarat, fostering environmental stewardship.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmMNoyHpgvx6BJxnxt-LpU7NL4jilo2DZjnKOZO-4bgfeeCU_hTFWff4d1a0twdMb7QFg2gZd8N1yeZa78PxrJpKnySqGpV5QqN462pSNxpgUhPI6FuXDU154ybJMJcV0SdQyyog0QMKtvra9W9KaLIVaWSvVos_tIgO5eQFs2u6rBHsSwPeC0INdLg66n9sV8MdCGhl1M5TQS5fqEtQBCY3743qF_vyp6YsG1uBZq5-33eoTNk9TcwYuMxDwD_821gffu4lGwgIaX",
    yearColor: "bg-green-100 text-green-800",
    cta: "Read full story",
    ctaIcon: <FiArrowRight />,
    span: "",
  },
  {
    id: 2,
    year: "2023",
    title: "ICC Social Impact Award",
    description:
      "Awarded by the Indian Chamber of Commerce for Project Utthan's exceptional contributions to the Education category in Odisha.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBokrTacmFTaPXFkE_5PvMJXprSpCBa1t27tpb7NKflRmkVbwYzl1en2DnMJK8SXLmOW0w53JUaeMDP1jcgrCNXyHmmDRMMJh4nugIDRHze_lZNdHQYoLQhLIk1ROyGKL7-QxybrpfupZg4dx3XUfbArSVyHu78y7ptwOyunwJ194XyzpNHDjdqeL6eE8HupTnoxA2X8Vb3DcMK0svevFkeYkkpV2LHsXeH0T-BHKmPb8IRWZQoohE7AzKKxpNNLFkCVqVXRbh7_BpZ",
    yearColor: "bg-purple-100 text-black",
    cta: "Read full story",
    ctaIcon: <FiArrowRight />,
    span: "",
  },
  {
    id: 3,
    year: "2023",
    title: "Gold Stevie Award – London",
    description:
      "Saksham initiative won Gold for 'Organization of the Year' at the International Stevie Awards for its global impact on empowerment.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH7QbL58GO7b33HPvWcoxp0BL2lAsQ7xUQ06vXCf0Eh0QUeIctgCu_OMZM9KpkgWpjE92EV9LwPWqNO4q5RSBKzp3CAOQrSEGFArJ1__tB3-Ox_9DQmd6bkehM_Ofk07cynoakgY29TdLMIvzvr-57vYUdUUTDh-MtpRQBlkHsuOE8_5Ti02AQm5WKTpcHJCzsxiZ9j_XIMlk8PRsrz64W6W7V1SyRilcGyRQQUvv60G4M4o_ozldtxOCRDqgwx_oznYYERrwJgauc",
    yearColor: "bg-purple-100 text-black",
    cta: "Read full story",
    ctaIcon: <FiArrowRight />,
    span: "",
  },
  {
    id: 4,
    year: "2022",
    title: "Brainfeed Award for Excellence",
    description:
      "Recognized for transformative education practices at Vidya Mandir, Ahmedabad, during the National School Excellence Awards.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zT2PT0-_XwDf7iyREcL8PGYtbIyi7iGpbMCu3dzyJWLpBjOpNdEzU1emExrErgOsyWqaZ7YOzeJDCWXZ0jGt_-sRaoLapuk19P_Xu4Qh2X9yBvjWHe4eN4UHn23Oz1bpCwHyPC9G8WakOemuuJL8ZxXQFFBPR5AvaeuYXmleFWJGKOQPd7wQEa7J3Czf6jTzqW6PdPm0S8sA-coli73beTtHvtWm8PGPIwer5hIbrcSXNAGYQjGUOSkqNFUrNnC0NS9rG9j3wq4e",
    yearColor: "bg-blue-100 text-blue-800",
    cta: "Read full story",
    ctaIcon: <FiArrowRight />,
    span: "col-span-1",
  },
];

const featuredAward = {
  year: "2023",
  title: "Amazing Indians: Food Management",
  description:
    "Honoring Jyoti Tank from Mundra for her visionary organic farming endeavors and commitment to nutrition security.",
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8MbU016FXL0rm9v9Osprzae22oVYUm8KYRwO_OU29p3OfiAbzaB7zSHjje4a-Pu4WKyxuIutT3oTZaBrb8Cpq-hKxx-8YVrO5Nx3cATleZKf39eS1lBWl5fL05e_ooZ45ubBf0seVO_YCwiAYy3nAkn1D7bPoUBcgtON4m76O4vZgFFK-itV2BehqNM-cCQDwWMUtRRrvMtL9mi-IQUKh-yTmC_i_qHjaFW148qYbykSyMFQBr92wwYRgS9TgB4H_O8BPfB3Isc7",
  yearColor: "bg-purple-100 text-black",
  cta: "Watch Ceremony Highlights",
  ctaIcon: <FiPlayCircle />,
};

const years = ["Select Year", "2024", "2023", "2022", "2021", "Archive"];

const Awards = () => {
  const [selectedYear, setSelectedYear] = useState("Select Year");

  const filteredAwards =
    selectedYear === "Select Year" || selectedYear === "Archive"
      ? awards
      : awards.filter((a) => a.year === selectedYear);

  const showFeatured =
    selectedYear === "Select Year" ||
    selectedYear === "Archive" ||
    selectedYear === "2023";

  return (
    <main className="pt-10 bg-white min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-gray-400 mb-6 text-sm font-medium">
              <Link to="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-black font-semibold">Awards</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Awards &amp; Recognition
            </h1>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Our journey is marked by the lives we touch and the communities we
              transform. These accolades serve as a testament to our unwavering
              commitment to sustainable social impact and excellence in
              institutional governance.
            </p>
          </div>
        </div>

        {/* Decorative skewed background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-100/40 -skew-x-12 translate-x-1/2 -z-0 pointer-events-none" />
      </section>

      {/* ── Filter & Grid Section ── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            {/* Dropdown */}
            <div className="relative w-full md:w-64 group">
              <label className="block text-sm font-semibold text-black mb-2">
                Filter by Year
              </label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all cursor-pointer outline-none"
                >
                  {years.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:rotate-180 transition-transform" />
              </div>
            </div>

            {/* Info badge */}
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200 w-fit">
              <FiInfo className="flex-shrink-0" />
              <span>Showing all recent honors</span>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredAwards.map((award) => (
              <article
                key={award.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-4 left-4 ${award.yearColor} px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {award.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-6 leading-relaxed">
                    {award.description}
                  </p>
                  <div className="mt-auto flex items-center gap-1 text-black text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>{award.cta}</span>
                    {award.ctaIcon}
                  </div>
                </div>
              </article>
            ))}

            {/* Featured Wide Card — Amazing Indians */}
            {showFeatured && (
              <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-2 flex flex-col">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image side */}
                  <div className="relative overflow-hidden min-h-[240px] md:min-h-[300px]">
                    <img
                      src={featuredAward.img}
                      alt={featuredAward.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 left-4 ${featuredAward.yearColor} px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {featuredAward.year}
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                        {featuredAward.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 mb-6 leading-relaxed">
                        {featuredAward.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-black text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>{featuredAward.cta}</span>
                      {featuredAward.ctaIcon}
                    </div>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-purple-100 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Left text */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              Stay updated on our impact.
            </h2>
            <p className="text-sm md:text-base text-black opacity-90 leading-relaxed">
              Join our newsletter to receive monthly stories of transformation
              and updates on our global initiatives.
            </p>
          </div>

          {/* Email form */}
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex-grow relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border-none rounded-lg pl-10 pr-4 py-4 text-sm focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>
            <button className="bg-purple-700 text-white px-6 md:px-8 py-4 rounded-lg text-sm font-bold hover:bg-purple-800 transition-all active:scale-95 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Decorative blob */}
        <div className="absolute -bottom-24 -left-24 w-80 md:w-96 h-80 md:h-96 bg-purple-300 opacity-10 rounded-full blur-3xl pointer-events-none" />
      </section>
    </main>
  );
};

export default Awards;
