import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineGlobeAlt,
  HiOutlineSun,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineUser,
  HiOutlineTrophy,
  HiOutlineDocumentText,
  HiOutlineSpeakerWave,
  HiOutlineChartBar,
  HiOutlineDocumentDuplicate,
  HiOutlineNewspaper,
  HiOutlineBriefcase,
  HiOutlineFaceSmile
} from "react-icons/hi2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "IMPACT THEMES",
      path: "/impact-themes",
      dropdown: [
        { label: "Education", icon: <HiOutlineAcademicCap className="text-2xl" /> },
        { label: "Health and Nutrition", icon: <HiOutlineHeart className="text-2xl" /> },
        { label: "Sustainable Livelihoods", icon: <HiOutlineGlobeAlt className="text-2xl" /> },
        { label: "Climate Action", icon: <HiOutlineSun className="text-2xl" /> },
        { label: "Community Development", icon: <HiOutlineUserGroup className="text-2xl" /> },
      ],
    },
    { name: "STORIES OF CHANGE", path: "/stories-of-change" },
    {
      name: "ABOUT US",
      path: "/about-us",
      dropdown: [
        { label: "Our Story", icon: <HiOutlineBookOpen className="text-2xl" /> },
        { label: "Leadership", icon: <HiOutlineUser className="text-2xl" /> },
        // { label: "Awards", icon: <HiOutlineTrophy className="text-2xl" /> },
      ],
    },
    // {
    //   name: "NEWSROOM",
    //   path: "/newsroom",
    //   dropdown: [
    //     { label: "Press Releases", icon: <HiOutlineDocumentText className="text-2xl" /> },
    //     { label: "Media Coverage", icon: <HiOutlineSpeakerWave className="text-2xl" /> },
    //   ],
    // },
    {
      name: "KNOWLEDGE CENTRE",
      path: "/knowledge-centre",
      // dropdown: [
      //   { label: "Annual Reports", icon: <HiOutlineChartBar className="text-2xl" /> },
      //   { label: "Publications", icon: <HiOutlineDocumentDuplicate className="text-2xl" /> },
      //   { label: "Interact Newsletter", icon: <HiOutlineNewspaper className="text-2xl" /> },
      // ],
    },
    // {
    //   name: "CAREERS",
    //   path: "/careers",
    //   dropdown: [
    //     { label: "Our Culture", icon: <HiOutlineBriefcase className="text-2xl" /> },
    //     { label: "Life at DGF", icon: <HiOutlineFaceSmile className="text-2xl" /> },
    //   ],
    // },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-surface ${
        isScrolled ? "shadow-md py-2" : "py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 xl:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50 relative">
            <img src="/logo.jpeg" alt="Deepak Gupta Foundation Logo" className="h-[64px] md:h-[80px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center px-2 lg:px-3 py-2 text-[12px] lg:text-[14px] font-bold tracking-wide transition-colors rounded-md whitespace-nowrap ${
                    activeDropdown === index
                      ? "bg-primary text-white"
                      : "text-text-main hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown className="ml-1" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-72 bg-surface rounded-lg shadow-xl py-4 transition-all duration-200 z-50 ${
                      activeDropdown === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={`${link.path}/${item.label.toLowerCase().replace(/ /g, "-")}`}
                        className="flex items-center px-6 py-3 text-[16px] text-text-main hover:bg-gray-50 transition-colors"
                      >
                        <span className="mr-4 text-primary flex-shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden z-50 relative p-2 rounded-md text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX size={28} />
            ) : (
              <FiMenu size={28} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-surface z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden overflow-y-auto`}
      >
        <div className="pt-24 px-6 pb-8">
          {navLinks.map((link, index) => (
            <div key={index} className="mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <Link
                  to={link.path}
                  className="text-xl font-medium text-text-main uppercase"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className="p-2 text-text-muted"
                  >
                    <FiChevronDown
                      className={`transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.dropdown && activeDropdown === index && (
                <div className="mt-4 pl-4 space-y-3">
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={`${link.path}/${item.label
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="flex items-center text-text-muted py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-3 text-primary">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}


        </div>
      </div>
    </header>
  );
};

export default Navbar;

