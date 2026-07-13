import React from 'react';
import IntroSection from '../components/about/our-story/IntroSection';
import VisionMission from '../components/about/our-story/VisionMission';
import ChairpersonMessage from '../components/about/our-story/ChairpersonMessage';
import Milestones from '../components/about/our-story/Milestones';

const OurStory = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      <IntroSection />
      <VisionMission />
      <ChairpersonMessage />
      <Milestones />
    </div>
  );
};

export default OurStory;
