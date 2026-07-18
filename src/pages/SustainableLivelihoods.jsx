import React from 'react';
import HeroSection from '../components/livelihoods/HeroSection';
import StatsSection from '../components/livelihoods/StatsSection';
import ActiveProgrammes from '../components/livelihoods/ActiveProgrammes';
import MomentsOfChange from '../components/livelihoods/MomentsOfChange';
import ImpactStories from '../components/livelihoods/ImpactStories';
import OtherCommitments from '../components/OtherCommitments';


const SustainableLivelihoods = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      <HeroSection />
      <StatsSection />
      <ActiveProgrammes />
      <MomentsOfChange />
      <ImpactStories />
      <OtherCommitments />
    </div>
  );
};

export default SustainableLivelihoods;
