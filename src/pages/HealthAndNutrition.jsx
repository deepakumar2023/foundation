import React from 'react';
import HeroSection from '../components/health/HeroSection';
import StatsSection from '../components/health/StatsSection';
import ActiveProgrammes from '../components/health/ActiveProgrammes';
import MomentsOfChange from '../components/health/MomentsOfChange';
import ImpactStories from '../components/health/ImpactStories';
import OtherCommitments from '../components/health/OtherCommitments';

const HealthAndNutrition = () => {
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

export default HealthAndNutrition;
