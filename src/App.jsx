import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import HealthAndNutrition from "./pages/HealthAndNutrition";
import SustainableLivelihoods from "./pages/SustainableLivelihoods";
import ClimateAction from "./pages/ClimateAction";
import CommunityDevelopment from "./pages/CommunityDevelopment";
import StoriesOfChange from "./pages/StoriesOfChange";
import OurStory from "./pages/OurStory";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import OurCulture from "./pages/OurCulture";
import Leadership from "./components/about/Leadership";
import Awards from "./components/about/Awards";
import PressReleases from "./components/newsroom/PressReleases";
import MediaCoverage from "./components/newsroom/MediaCoverage";
import Newsroom from "./pages/Newsroom";
import LifeAtDGF from "./components/careers/LifeAtDGF";
import InteractNewsletter from "./components/knowledge-centre/InteractNewsletter";
import AnnualReports from "./components/knowledge-centre/AnnualReports";
import Publications from "./components/knowledge-centre/Publications";

// Placeholder component for empty routes
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-text-main mb-4">{title}</h1>
      <p className="text-text-muted">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main Routes */}
        <Route index element={<Home />} />
        
        {/* Placeholder Routes */}
        <Route path="impact-themes/education" element={<Education />} />
        <Route path="impact-themes/health-and-nutrition" element={<HealthAndNutrition />} />
        <Route path="impact-themes/sustainable-livelihoods" element={<SustainableLivelihoods />} />
        <Route path="impact-themes/climate-action" element={<ClimateAction />} />
        <Route path="impact-themes/community-development" element={<CommunityDevelopment />} />
        <Route path="impact-themes/*" element={<Placeholder title="Impact Themes" />} />
        <Route path="stories-of-change" element={<StoriesOfChange />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="about-us/our-story" element={<OurStory />} />
        <Route path="about-us/leadership" element={<Leadership />} />
        <Route path="about-us/awards" element={<Awards />} />
        <Route path="newsroom" element={<Newsroom />} />
        <Route path="newsroom/press-releases" element={<PressReleases />} />
        <Route path="newsroom/media-coverage" element={<MediaCoverage />} />
        <Route path="newsroom/*" element={<Placeholder title="Newsroom" />} />
        <Route path="knowledge-centre/interact-newsletter" element={<InteractNewsletter />} />
        <Route path="knowledge-centre/annual-reports" element={<AnnualReports />} />
        <Route path="knowledge-centre/publications" element={<Publications />} />
        <Route path="knowledge-centre/*" element={<Placeholder title="Knowledge Centre" />} />
        <Route path="careers/our-culture" element={<OurCulture />} />
        <Route path="careers/life-at-dgf" element={<LifeAtDGF />} />
        <Route path="careers/*" element={<Placeholder title="Careers" />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        
        {/* 404 Route */}
        
        <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
