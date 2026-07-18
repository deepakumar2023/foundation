import React from 'react';
import Hero from '../components/home/Hero';
import ImpactAtGlance from '../components/home/ImpactAtGlance';
import Collage from '../components/home/Collage';
import BeliefSection from '../components/home/BeliefSection';
import LeadershipMessages from '../components/home/LeadershipMessages';
import CoreFocusAreas from '../components/home/CoreFocusAreas';
import OurPresence from '../components/home/OurPresence';
import Updates from '../components/home/Updates';
import SuccessStories from '../components/home/SuccessStories';
import EventsGallery from '../components/home/EventsGallery';
import GroupCompanies from '../components/home/GroupCompanies';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <div data-aos="fade-up" data-aos-duration="1200"><Hero /></div>
      <div data-aos="fade-up"><ImpactAtGlance /></div>
      <div data-aos="fade-up"><Collage /></div>
      <div data-aos="fade-up"><BeliefSection /></div>
      <div data-aos="fade-up"><LeadershipMessages /></div>
      <div data-aos="fade-up"><CoreFocusAreas /></div>
      {/* <div data-aos="fade-up"><OurPresence /></div> */}
      <div data-aos="fade-up"><Updates /></div>
      <div data-aos="fade-up"><SuccessStories /></div>
      <div data-aos="fade-up"><EventsGallery /></div>
      {/* <div data-aos="fade-up"><GroupCompanies /></div> */}
    </div>
  );
};

export default Home;
