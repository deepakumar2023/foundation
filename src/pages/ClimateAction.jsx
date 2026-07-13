import React from 'react';
import HeroSection from '../components/climate/HeroSection';
import StatsSection from '../components/climate/StatsSection';
import ActiveProgrammes from '../components/climate/ActiveProgrammes';
import MomentsOfChange from '../components/climate/MomentsOfChange';
import ImpactStories from '../components/climate/ImpactStories';
import OtherCommitments from '../components/climate/OtherCommitments';

const ClimateAction = () => {
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

export default ClimateAction;
