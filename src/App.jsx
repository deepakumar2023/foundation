import { Routes, Route } from "react-router-dom";
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

// Placeholder component for empty routes
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-500">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
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
        <Route path="newsroom/*" element={<Placeholder title="Newsroom" />} />
        <Route path="knowledge-centre/*" element={<Placeholder title="Knowledge Centre" />} />
        <Route path="careers/*" element={<Placeholder title="Careers" />} />
        <Route path="contact-us" element={<ContactUs />} />
        
        {/* 404 Route */}
        
        <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;
