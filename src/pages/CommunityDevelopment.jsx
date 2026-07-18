import React from 'react';
import HeroSection from '../components/community/HeroSection';
import StatsSection from '../components/community/StatsSection';
import ActiveProgrammes from '../components/community/ActiveProgrammes';
import MomentsOfChange from '../components/community/MomentsOfChange';
import ImpactStories from '../components/community/ImpactStories';
import OtherCommitments from '../components/OtherCommitments';


const CommunityDevelopment = () => {
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

export default CommunityDevelopment;
