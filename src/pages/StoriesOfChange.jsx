import React, { useState } from 'react';
import FilterBar from '../components/stories/FilterBar';
import StoryCard from '../components/stories/StoryCard';
import { Link } from 'react-router-dom';

// Comprehensive mock dataset
const allStories = [
  { id: 1, tag: 'EDUCATION', title: '  deepak   gupta  Vidya Mandir: A Model Institution For Quality Education', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=200' },
  { id: 2, tag: 'HEALTH & NUTRITION', title: 'Sangini Volunteers Guiding Mothers Towards Better Nutrition', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=201' },
  { id: 3, tag: 'SUSTAINABLE LIVELIHOODS', title: 'Empowering Women Farmers Through System of Rice Intensification', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=202' },
  { id: 4, tag: 'CLIMATE ACTION', title: 'Mangrove Restoration Drive Rejuvenates Coastal Ecosystems', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=203' },
  { id: 5, tag: 'COMMUNITY DEV', title: 'New Village Road Connects Farmers Directly to Markets', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=204' },
  { id: 6, tag: 'EDUCATION', title: 'Digital Classrooms Bridging the Learning Gap in Rural Areas', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=205' },
  { id: 7, tag: 'HEALTH & NUTRITION', title: 'Mobile Clinics Delivering Healthcare to the Last Mile', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=206' },
  { id: 8, tag: 'SUSTAINABLE LIVELIHOODS', title: 'ASDC Graduates Finding New Careers in Logistics', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=207' },
  { id: 9, tag: 'CLIMATE ACTION', title: 'Solar Powered Street Lights Brighten Up Village Nights', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=208' },
  { id: 10, tag: 'COMMUNITY DEV', title: 'RO Water Plants Bring Safe Drinking Water to 50 Villages', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=209' },
  { id: 11, tag: 'EDUCATION', title: 'Project Udaan Inspiring the Next Generation of Engineers', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=210' },
  { id: 12, tag: 'HEALTH & NUTRITION', title: 'Battling Anemia: A Successful Campaign in Tribal Belts', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=211' },
  { id: 13, tag: 'SUSTAINABLE LIVELIHOODS', title: 'Self Help Groups Creating Successful Micro-Enterprises', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=212' },
  { id: 14, tag: 'CLIMATE ACTION', title: 'Water Conservation Projects Increase Groundwater Tables', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=213' },
  { id: 15, tag: 'COMMUNITY DEV', title: 'Upgraded Panchayat Halls Improve Local Governance', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=214' },
  { id: 16, tag: 'EDUCATION', title: 'Teacher Training Programs Elevate Classroom Experiences', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=215' },
  { id: 17, tag: 'HEALTH & NUTRITION', title: 'Mega Health Camps Reach Thousands in a Single Day', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=216' },
  { id: 18, tag: 'SUSTAINABLE LIVELIHOODS', title: 'Fisherfolk Double Their Income With Modern Equipment', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=217' },
  { id: 19, tag: 'CLIMATE ACTION', title: 'Afforestation Drives Aim for a Greener Tomorrow', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=218' },
  { id: 20, tag: 'COMMUNITY DEV', title: 'Sanitation Drives Eliminate Open Defecation in 20 Panchayats', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=219' },
  { id: 21, tag: 'EDUCATION', title: 'Scholarships Help Meritorious Students Pursue Higher Education', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=220' },
  { id: 22, tag: 'HEALTH & NUTRITION', title: 'Maternal Health Programs Reduce Infant Mortality Rates', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=221' },
  { id: 23, tag: 'SUSTAINABLE LIVELIHOODS', title: 'Traditional Artisans Find New Markets Through Exhibitions', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=222' },
  { id: 24, tag: 'CLIMATE ACTION', title: 'Biogas Plants Provide Clean Fuel for Rural Kitchens', author: 'By  Deepak  gupta Foundation', image: 'https://picsum.photos/400/300?random=223' },
];

const categories = [
  'All',
  'Education',
  'Health & Nutrition',
  'Sustainable Livelihoods',
  'Climate Action',
  'Community Development'
];

const tagMap = {
  'Education': 'EDUCATION',
  'Health & Nutrition': 'HEALTH & NUTRITION',
  'Sustainable Livelihoods': 'SUSTAINABLE LIVELIHOODS',
  'Climate Action': 'CLIMATE ACTION',
  'Community Development': 'COMMUNITY DEV'
};

const StoriesOfChange = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter stories based on active category
  const filteredStories = allStories.filter(story => {
    if (activeCategory === 'All') return true;
    return story.tag === tagMap[activeCategory];
  });

  return (
    <div className="w-full bg-[#fcf9fc] min-h-screen pb-20">

      {/* Header */}
      <div className="w-full bg-[#f8f0f8] pt-20 pb-12 px-4 md:px-8 text-center border-b border-gray-200">
        <div className="text-sm text-text-muted mb-6">
          <span>Home</span> &gt; <span className="text-[#a51a70]">Stories Of Change</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-text-main tracking-wide">
          Stories Of Change
        </h1>
      </div>

      {/* Sticky Filter Bar */}
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredStories.length > 0 ? (
            filteredStories.map(story => (

               <Link key={story.id} to="/contact-us">
              <StoryCard
                key={story.id}
                tag={story.tag}
                title={story.title}
                author={story.author}
                image={story.image}
              />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-text-muted">
              No stories found for this category.
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default StoriesOfChange;
