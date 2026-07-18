import { FiChevronRight, FiChevronDown, FiArrowRight, FiCalendar } from "react-icons/fi";

const cards = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTB-mrBl37J3yauR2ncVWp1SyN23hHsphZjHR4pTm2kMIMehjZpatg06NoFn-RptNNhZqk6N9lzsIBt-jTYKc3VpeT70LBypVdYYqjadXVLuQFwgL_20mn29cHORV0V0Yrnp7pUlqhs1GvTiCM9t0IbMwizRv746ag92FXkVw73xFs7JGeE1pOKDftHeHDfID-rKGtHW2cnIY30L4QaqoYyvOGI_pEj2yz3qzJudTQgUvHRKag67NMjaxsqU1I7xdmrN4d3mU1_bz",
    tag: "Celebration",
    title: "Celebrating birthdays of December-born colleagues",
    date: "January 3, 2026",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGAwxUdozQH7boB9QHtmTgszgCkcS8c_WTyYEzG2vFN1pSMiDf5hqWFXjQjBRIuTpapUBkfXPhNRTlw0gOfytwU7i7nQE_x4cilpBWCy4sc7bdGbLPtjxkhwCy3CW4AMy7QMx75ovB0sQr9DyA2coSASxdOC7Xr1kF18pcxq5_2Hb3DLE7TuuKGnyuVWnZWWQ5RhKsbUfCUkb3fEZUGHCJQNpZdu0h7pJ9thuYor0bxXRKfx_gBr0YoYV6JIdgVVmhTUUA3SeXAAxN",
    tag: "Milestone",
    title: "Birthday celebrations of November-born Colleagues",
    date: "December 6, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SG_EMzlcvxkLD49x93hctiYwQ0DoT8yhEes-9WtImd6GW6RGGJ-uiJuvSi7HI6bCDpH_P-CVBJbhTrQ8DWkmvAViGiB2XJFWz6ZoTJYlb5Be1IXyDcVUwL6hQpWwGF8U6s2UIZtVRgisYYwtcvDopqTixRsQfD8f3Xxq4KYW9CzSsscNBjRblZuKl9LQxCAVyV72npVXevtM50rdJyWhNQCYiBS351h1FmGsTS2MXx6eJ2-c238hWC62U4xxOhnQgBhtaK4mY-sB",
    tag: "Holiday",
    title: "Christmas Fun: Secret Santa Celebration Delights the Workplace",
    date: "December 20, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFmGohZoF1p-QCxpxuTQaY694NMc5rhKBQt03J-ASlimzIkm4qRN5N9mQSWnWNpmer5MrjuVHHln3G-qS-OL1gl8KJOZR8Qug_V-GAB9tCwr1vdlGgLta2kHN9OH_5ECDZAvelmW4ijsLUm177Gy4SnC8GnTy-TcuXbI5X4VInJNhIxaOtAKbHRHRWiJ7AY1pLgD34PmU9E-mu3L5jKxZM2VFU0b63utV9oOhMx81uiSBggYlM8pRYsxfdPZ3DzyRIgGxbLV24pZK8",
    tag: "Events",
    title: "Glimpses of October Birthday Celebrations at DGF",
    date: "November 8, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpMNSf-rK0DJNbNUip4bSrto_n5XCNtjrKfGqPEFAj-_MtEDl8hXDufoWZQJ5qRd-11iWxokT3Uv9a_sjp00-Mb8UIEBcHN6xsIzmd7Kq0BW7LQrGECSxGGk8TPFhFGvcb7q-WZmU8gTxHQq1F0uWZOj3FeeDIe6m0LMHCsnpUf-gvsDzpPA3N7QzF1NEatSN6e1d2lh8lUrjzzb6glokUvFfFOTENe2BKD2cGMDiYCVyZDYpA3aRrKoS1FpIKQSOBji4p7TvUfbWx",
    tag: "Sustainability",
    title: "Diwali Celebrations: Tradition Meets Sustainability",
    date: "October 17, 2025",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyHTtqc4mN6AgNSu5KcPK2AfYaLP3MOJtifR6bN-49Gm_wTyVWh1Ud6CayTKV9YtFE7XZg6h30oH3-wOXnnOAej39FvjSUbBj5ghTpv3Ckh0CaoIWAgydq4MB68pO-9cqEBGin4LDjh81oHWekYL3nHjoaEUWpoSHJ96vai6FO5sXQ7tdgEpQOnUG2pMKNs3ChCv-xDb-YPITVAhKZaL-gk5uoErV-OVoWNTTi1uLgJIYoRVLQdwTFHfVneqI3eAtEykuw4CgTKJYs",
    tag: "Culture",
    title: "Birthday Celebrations of September-born Colleagues",
    date: "October 11, 2025",
  },
];

const collageImages = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa7bGgR3Msj5Pt10q8K9SR7Gazu5Gq8-RBSel3l28cwNmRZjV6pOWX_vFOVtKuy9MPEBbHf2_b0aDtExW0Ny21mX3qjaDMCp_PI2CD6xBMfH_-ayeMHqM7t7EJ95jmuA1fJRGDdqLbU8baz1dMGM2pioP5ZJhzkNGzRrCSHw1G4faP8pRjamVu5OHcPIV-qdtcJ-RXtqviDtz2s7biYm0zgD6wiuhOG-f-fv0SnWg81E53UkL8-pvPQsZey_NhvtKvQ6DqaqZAgfaP", alt: "DGF Team Culture", large: true },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGAwxUdozQH7boB9QHtmTgszgCkcS8c_WTyYEzG2vFN1pSMiDf5hqWFXjQjBRIuTpapUBkfXPhNRTlw0gOfytwU7i7nQE_x4cilpBWCy4sc7bdGbLPtjxkhwCy3CW4AMy7QMx75ovB0sQr9DyA2coSASxdOC7Xr1kF18pcxq5_2Hb3DLE7TuuKGnyuVWnZWWQ5RhKsbUfCUkb3fEZUGHCJQNpZdu0h7pJ9thuYor0bxXRKfx_gBr0YoYV6JIdgVVmhTUUA3SeXAAxN", alt: "Foundation Activities", large: false },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyHTtqc4mN6AgNSu5KcPK2AfYaLP3MOJtifR6bN-49Gm_wTyVWh1Ud6CayTKV9YtFE7XZg6h30oH3-wOXnnOAej39FvjSUbBj5ghTpv3Ckh0CaoIWAgydq4MB68pO-9cqEBGin4LDjh81oHWekYL3nHjoaEUWpoSHJ96vai6FO5sXQ7tdgEpQOnUG2pMKNs3ChCv-xDb-YPITVAhKZaL-gk5uoErV-OVoWNTTi1uLgJIYoRVLQdwTFHfVneqI3eAtEykuw4CgTKJYs", alt: "Celebrations", large: false },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpMNSf-rK0DJNbNUip4bSrto_n5XCNtjrKfGqPEFAj-_MtEDl8hXDufoWZQJ5qRd-11iWxokT3Uv9a_sjp00-Mb8UIEBcHN6xsIzmd7Kq0BW7LQrGECSxGGk8TPFhFGvcb7q-WZmU8gTxHQq1F0uWZOj3FeeDIe6m0LMHCsnpUf-gvsDzpPA3N7QzF1NEatSN6e1d2lh8lUrjzzb6glokUvFfFOTENe2BKD2cGMDiYCVyZDYpA3aRrKoS1FpIKQSOBji4p7TvUfbWx", alt: "Workplace Fun", large: false },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFmGohZoF1p-QCxpxuTQaY694NMc5rhKBQt03J-ASlimzIkm4qRN5N9mQSWnWNpmer5MrjuVHHln3G-qS-OL1gl8KJOZR8Qug_V-GAB9tCwr1vdlGgLta2kHN9OH_5ECDZAvelmW4ijsLUm177Gy4SnC8GnTy-TcuXbI5X4VInJNhIxaOtAKbHRHRWiJ7AY1pLgD34PmU9E-mu3L5jKxZM2VFU0b63utV9oOhMx81uiSBggYlM8pRYsxfdPZ3DzyRIgGxbLV24pZK8", alt: "Events", large: false },
];

const LifeAtDGF = () => {
  return (
    <div className="bg-surface min-h-screen pt-[80px] md:pt-[100px] lg:pt-[120px]">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-[12px] border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[24px] lg:px-[48px]">
          <nav className="flex text-[12px] uppercase tracking-widest text-gray-400 gap-[8px] font-bold items-center">
            <a className="hover:text-[#00204f] transition-colors" href="/">Home</a>
            <span>/</span>
            <span className="text-[#00204f]">Life at DGF</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-surface py-[48px] md:py-[64px]">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[24px] lg:px-[48px]">
          {/* Title */}
          <div className="mb-[48px] text-center max-w-3xl mx-auto">
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#00204f] mb-[24px] leading-tight">
              Our Vibrant Community
            </h1>
            <p className="text-[16px] md:text-[18px] text-text-muted leading-relaxed">
              Experience the pulse of Deepak Gupta Foundation. A culture built on collaboration, celebration, and a shared passion for driving meaningful impact.
            </p>
          </div>

          {/* Photo Collage */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[12px] md:gap-[16px]">
            {/* Large image - spans 2 rows on md+ */}
            <div className="col-span-2 md:col-span-1 md:row-span-2 overflow-hidden rounded-[12px] shadow-xl aspect-[16/10] md:aspect-auto">
              <img
                src={collageImages[0].src}
                alt={collageImages[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* 4 small images */}
            {collageImages.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-[12px] shadow-lg aspect-[16/10]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-[48px] md:py-[64px] bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[24px] lg:px-[48px]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
            <span className="text-[14px] font-bold uppercase tracking-widest text-[#00204f]">Filter By</span>

            {/* Year Select */}
            <div className="relative w-full md:w-[256px]">
              <select className="w-full appearance-none border border-gray-300 bg-surface rounded-[8px] py-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-[#00204f]/20 focus:border-[#00204f] text-text-main font-medium text-[14px] cursor-pointer">
                <option>Select Year</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
              <FiChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-[18px]" />
            </div>

            {/* Month Select */}
            <div className="relative w-full md:w-[256px]">
              <select className="w-full appearance-none border border-gray-300 bg-surface rounded-[8px] py-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-[#00204f]/20 focus:border-[#00204f] text-text-main font-medium text-[14px] cursor-pointer">
                <option>All Months</option>
                {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => (
                  <option key={m}>{m}</option>
                ))}
              </select>
              <FiChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-text-muted text-[18px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <main className="py-[64px] md:py-[96px] bg-surface">
        <div className="max-w-[1440px] mx-auto px-[16px] md:px-[24px] lg:px-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[48px] gap-y-[64px]">
            {cards.map(({ img, tag, title, date }, i) => (
              <article key={i} className="flex flex-col group">
                <div className="overflow-hidden rounded-[12px] aspect-[16/10] mb-[32px] shadow-sm">
                  <img
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={img}
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-[12px] font-bold text-[#7b2cbf] uppercase tracking-widest mb-[12px]">
                    {tag}
                  </p>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#00204f] mb-[16px] leading-tight">
                    {title}
                  </h3>
                  <p className="text-[14px] text-text-muted mb-[32px] flex items-center gap-[8px]">
                    <FiCalendar className="text-[14px] flex-shrink-0" />
                    {date}
                  </p>
                </div>
                <a className="inline-flex items-center group/link w-fit" href="#">
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-[#00204f] flex items-center justify-center text-[#00204f] group-hover/link:bg-[#00204f] group-hover/link:text-white transition-all duration-300">
                    <FiArrowRight className="text-[16px]" />
                  </div>
                  <span className="ml-[16px] text-[12px] font-bold uppercase tracking-wider text-[#00204f]">
                    Read Story
                  </span>
                </a>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-[80px] text-center">
            <button className="bg-[#00204f] text-white px-[40px] py-[16px] rounded-[8px] font-bold text-[14px] uppercase tracking-widest hover:bg-[#132a54] transition-all shadow-lg">
              Load More Stories
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LifeAtDGF;
