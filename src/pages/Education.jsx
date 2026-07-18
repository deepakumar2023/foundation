import React from 'react';
import HeroSection from '../components/education/HeroSection';
import StatsSection from '../components/education/StatsSection';
import ActiveProgrammes from '../components/education/ActiveProgrammes';
import MomentsOfChange from '../components/education/MomentsOfChange';
import ImpactStories from '../components/education/ImpactStories';
import OtherCommitments from '../components/OtherCommitments';

const Education = () => {
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

export default Education;
