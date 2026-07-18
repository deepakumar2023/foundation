import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

const publications = [
  {
    id: 1,
    title: "Deepak Mangal Seva: Inspiring Stories of Resilience & Hope",
    description:
      "A documentation of the transformative journeys supported by the foundation, highlighting individual resilience and community strength.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL0fAo2I4cqwRc8TGLt5rBpn5miuWTWf09oKpU_KBNX_s1l8cjJSy5zWCuZ78kHOizpBh7veGb_J5nWXamk2uDBXPRscOcCyY4X4nsWmot-R0mJIRlJgGWx_ygCWMqqAL47nGESffQJ0M3c1rG1JljriJ7uOVEM4PVfYr7fVKxeBJfIkv4p-cNntVltlklNJN15GpFkXDPup6Gak0kgelvsm2zz9w4jCa2RXgZRBcmuN27CEwtg4dKGuanyBpGchLcOogYv7chUkY8",
    alt: "Mangal Seva Publication Cover",
  },
  {
    id: 2,
    title: "Swabhimaan: A Coffee Table Book on Women's Empowerment.",
    description:
      "Capturing the essence of female leadership and the impactful strides made towards gender equality across various sectors.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDiOgFdYPTTo-mBVaFyYpYq7KszvPcs3S_WxDB8DlLHhcmBqkSTHpDWRvw4Ck7zvZYkKWw5U0EoiT8BQ3Ui2izxINuMAFMU6kOE8kouKpsQEOYbjoF5c0leSgSYjBVzwownyY1WZSTW1_SwlC4nEgg3P89TLQca9hg_DG0GmM-29J8lYtbvHkQW658a8X1gu1V7UOgXlA4WoRa-Oq1Zbuo3Km5xIZLwL_GgWw6C_KVRzNQ1ibvtQQXmHhi38Dg8fMTANS2n0g3fyV1",
    alt: "Swabhimaan Publication Cover",
  },
  {
    id: 3,
    title: "Swavlamban: Creating a World of Opportunities for Divyangs",
    description:
      "Focusing on inclusivity and vocational training initiatives designed to empower specially-abled individuals for a life of dignity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoyK4_TIKgYrawfQa8l4rpltxYJGXYFUYiAkaSngWVAlJSk2NYGaMSf3XTMMfRozUsYeNc2TpbUnZmnMo4AmbBKXT4wO8OLvnLTgdf6WF5qfhl0lBbWNNiF9wFlqzW3ydX1MZifQ6PpTzAQW2-3uq2uLQgaRgSEjHCr3s6LHbRashkYAUbj3D48qakc09RqZflCtoBCGCiB0c3b_g-44XslNSIT8ny1xUJnPdBna-XUsF67KZXlZgiBCnz-KE65p0jJicw7zChWuk8",
    alt: "Swavlamban Publication Cover",
  },
  {
    id: 4,
    title: "Ripples of Change: Empowering Communities with Sustainable Water Solutions",
    description:
      "An insight into the foundation's water conservation efforts and their long-term impact on rural livelihood and ecology.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbPL89Rx-yF8a1PXA6eMw1FtEm03gk8LTIKKbAvfIa0ap89R37XfGvA2AU9lWN24sMi_nSm_4oeFbc19NFw7gI0P2ET1f451ef3vZSLu-mM_s65GRLPDxCgFB7FwerjktI6WjwEwwMP-4TfwA33q0M0BbXLhwndkEmzvlL5KAG_Eoz6qJoNi_FP0xcg0mP6WTbktVgCVizi_gezpxl6tFwDFpzgbTXjcWTV5h__oT5tp1oYBjyPU58CQ3KEoj_M7CHbnFix3udHf_L",
    alt: "Water Solutions Publication Cover",
  },
];

/* Inline document icon — avoids extra dependency */
const DocIcon = () => (
  <svg
    className="w-9 h-9 sm:w-10 sm:h-10 text-[#1a3668] opacity-60 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM14 4v4h4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7 13h10M7 17h10"
    />
  </svg>
);

const Publications = () => {
  return (
    <main className="pt-10 bg-surface min-h-screen">
      {/* ── Breadcrumb ── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex text-xs font-semibold text-text-muted uppercase tracking-widest"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-[#1a3668] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-300">-</span>
              <span className="text-text-main">Publications</span>
            </li>
          </ol>
        </nav>
      </section>

      {/* ── Publications List ── */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-6 md:space-y-8">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className="bg-[#f9e6f3] rounded-2xl overflow-hidden shadow-sm
                       flex flex-col md:flex-row items-center
                       p-6 sm:p-8 md:p-10 lg:p-12 gap-6 md:gap-8
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* ── Left: Icon + Text ── */}
            <div className="flex-1 flex gap-4 sm:gap-6 items-start w-full">
              {/* Doc icon */}
              <div className="mt-1">
                <DocIcon />
              </div>

              {/* Text block */}
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-text-main leading-tight">
                  {pub.title.split(":").map((part, i) =>
                    i === 0 ? (
                      <span key={i}>
                        {part}
                        {pub.title.includes(":") && ":"}
                        <br />
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </h2>

                <div className="flex flex-col space-y-6 sm:space-y-8">
                  {/* Description — hidden on mobile */}
                  <p className="text-sm md:text-base text-text-muted max-w-lg hidden md:block leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Download button */}
                  <a
                    href="#"
                    className="inline-flex items-center group w-fit"
                    aria-label={`Download ${pub.title}`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white mr-3 group-hover:bg-black transition-colors flex-shrink-0">
                      <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-text-main uppercase tracking-widest group-hover:text-black transition-colors">
                      Download
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: Cover image ── */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={pub.img}
                alt={pub.alt}
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Publications;
