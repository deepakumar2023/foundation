import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Address */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Deepak Gupta <span className="font-light">Foundation</span>
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Deepak Gupta Foundation Corporate House,<br />
              Sector 62,<br />
              Noida - 201309,<br />
              Uttar Pradesh, India.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2 inline-block">Impact Themes</h3>
            <ul className="space-y-3">
              <li><Link to="/impact-themes/education" className="text-gray-400 hover:text-white transition-colors text-sm">Education</Link></li>
              <li><Link to="/impact-themes/health-and-nutrition" className="text-gray-400 hover:text-white transition-colors text-sm">Health and Nutrition</Link></li>
              <li><Link to="/impact-themes/sustainable-livelihoods" className="text-gray-400 hover:text-white transition-colors text-sm">Sustainable Livelihoods</Link></li>
              <li><Link to="/impact-themes/climate-action" className="text-gray-400 hover:text-white transition-colors text-sm">Climate Action</Link></li>
              <li><Link to="/impact-themes/community-development" className="text-gray-400 hover:text-white transition-colors text-sm">Community Development</Link></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2 inline-block">About Us</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us/our-story" className="text-gray-400 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/about-us/leadership" className="text-gray-400 hover:text-white transition-colors text-sm">Leadership</Link></li>
              <li><Link to="/about-us/awards" className="text-gray-400 hover:text-white transition-colors text-sm">Awards</Link></li>
              <li><Link to="/stories-of-change" className="text-gray-400 hover:text-white transition-colors text-sm">Stories of Change</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-gray-700 pb-2 inline-block">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and initiatives.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-[var(--color-primary)] transition-colors text-sm"
              />
              <button 
                type="button" 
                className="bg-[var(--color-primary)] hover:bg-[#006b8c] text-white px-4 py-2 rounded font-medium transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Deepak Gupta Foundation. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Use</Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
