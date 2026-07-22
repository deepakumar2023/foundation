import { Link } from "react-router-dom";
// import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo & Address */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.jpeg" alt="Deepak Gupta Foundation Logo" className="h-[80px] md:h-[100px] w-auto object-contain bg-white rounded-md p-1" />
            </Link>
            <p className="text-white/80 text-sm mb-4">
              RZ-2084, G/F, R/S Gali No. 26,<br />
              Tughlakbad Extension,<br />
              South Delhi, Delhi - 110019, India.
            </p>
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <FiTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <FiLinkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <FiInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <FiYoutube size={16} />
              </a>
            </div> */}

            
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2 inline-block">Impact Themes</h3>
            <ul className="space-y-3">
              <li><Link to="/impact-themes/education" className="text-white/80 hover:text-white transition-colors text-sm">Education</Link></li>
              <li><Link to="/impact-themes/health-and-nutrition" className="text-white/80 hover:text-white transition-colors text-sm">Health and Nutrition</Link></li>
              <li><Link to="/impact-themes/sustainable-livelihoods" className="text-white/80 hover:text-white transition-colors text-sm">Sustainable Livelihoods</Link></li>
              <li><Link to="/impact-themes/climate-action" className="text-white/80 hover:text-white transition-colors text-sm">Climate Action</Link></li>
              <li><Link to="/impact-themes/community-development" className="text-white/80 hover:text-white transition-colors text-sm">Community Development</Link></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div>
            <h3 className="text-lg font-medium mb-6 border-b border-white/20 pb-2 inline-block">About Us</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us/our-story" className="text-white/80 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/about-us/leadership" className="text-white/80 hover:text-white transition-colors text-sm">Leadership</Link></li>
              {/* <li><Link to="/about-us/awards" className="text-white/80 hover:text-white transition-colors text-sm">Awards</Link></li> */}
              <li><Link to="/stories-of-change" className="text-white/80 hover:text-white transition-colors text-sm">Stories of Change</Link></li>
              {/* <li><Link to="/careers" className="text-white/80 hover:text-white transition-colors text-sm">Careers</Link></li> */}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Deepak Gupta Foundation. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-white/70 hover:text-white text-sm transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
