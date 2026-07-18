import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Show banner after 1 second delay on every refresh/load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = () => {
    setIsVisible(false);
    // Wait for the slide-down animation to finish before removing from DOM
    setTimeout(() => {
      setHasConsented(true);
    }, 500);
  };

  if (hasConsented) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-surface shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-[24px] transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px]">
        <div className="flex-1">
          <h3 className="text-[20px] font-bold text-text-main mb-[8px]">We Care About Your Privacy</h3>
          <p className="text-[14px] text-text-muted leading-relaxed">
            We use cookies to give you the best experience on our website. By continuing, you're agreeing to our use of cookies. Read our <Link to="/privacy-policy" className="underline hover:text-[#00204f]">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex flex-wrap gap-[16px] justify-start md:justify-end">
          <button 
            onClick={handleConsent}
            className="px-[24px] py-[8px] border border-gray-300 rounded-[8px] text-[14px] font-bold text-text-main hover:bg-gray-50 transition-colors"
          >
            Edit Preferences
          </button>
          <button 
            onClick={handleConsent}
            className="px-[24px] py-[8px] border border-gray-300 rounded-[8px] text-[14px] font-bold text-text-main hover:bg-gray-50 transition-colors"
          >
            Accept Necessary
          </button>
          <button 
            onClick={handleConsent}
            className="px-[24px] py-[8px] bg-[#00204f] text-white rounded-[8px] text-[14px] font-bold hover:bg-[#1a3668] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
