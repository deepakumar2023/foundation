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
      <Hero />
      <ImpactAtGlance />
      <Collage />
      <BeliefSection />
      <LeadershipMessages />
      <CoreFocusAreas />
      {/* <OurPresence /> */}
      <Updates />
      <SuccessStories />
      <EventsGallery />
      {/* <GroupCompanies /> */}
    </div>
  );
};

export default Home;
