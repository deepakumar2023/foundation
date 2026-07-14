import React from 'react';

const ActiveProgrammes = () => {
  const programmes = [
    {
      title: "Community Infrastructure\nBuilding The Foundations of Growth",
      description: (
        <>
          <p className="mb-4">The Deepak gupta Foundation focuses on creating sustainable and resilient infrastructure that caters to the diverse needs of rural communities. This includes the construction and upgradation of village roads, ensuring all-weather connectivity that is crucial for access to markets, healthcare, and education.</p>
          <p>We also invest heavily in community facilities such as panchayat ghar (village council halls), anganwadis (childcare centers), and community halls. These structures serve as focal points for social interaction, governance, and community celebrations, significantly enhancing the quality of village life.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=130",
      imageLeft: true
    },
    {
      title: "Water and Sanitation (WASH)\nPrioritizing Health & Hygiene",
      description: (
        <>
          <p className="mb-4">Access to clean drinking water and proper sanitation facilities is a fundamental human right. Our interventions include installing RO plants in villages facing severe water quality issues, ensuring every household has access to safe potable water.</p>
          <p>In line with the Swachh Bharat Abhiyan, we construct individual household latrines (IHHL) and public sanitation complexes. Coupled with rigorous behavioral change campaigns, we aim to eliminate open defecation and promote hygienic practices, thereby reducing waterborne diseases.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=131",
      imageLeft: false
    },
    {
      title: "Rural Electrification & Energy\nPowering Progress",
      description: "We light up rural lives by providing solar street lights and promoting the use of renewable energy solutions at the household level. Reliable electricity extends working hours, improves safety, and allows children to study after dark, acting as a catalyst for overall community development.",
      image: "https://picsum.photos/800/500?random=132",
      imageLeft: true
    },
    {
      title: "Healthcare Infrastructure\nBringing Care Closer To Home",
      description: "We construct and upgrade Primary Health Centers (PHCs) and Community Health Centers (CHCs) in rural areas, equipping them with modern medical facilities. By strengthening the physical infrastructure, we ensure that rural populations receive timely and quality healthcare services without having to travel long distances.",
      image: "https://picsum.photos/800/500?random=133",
      imageLeft: false
    },
    {
      title: "Educational Infrastructure\nCreating Conducive Learning Environments",
      description: "A good physical environment is essential for effective learning. The Foundation supports government schools by constructing additional classrooms, science laboratories, computer rooms, and safe drinking water facilities. We also build separate sanitation blocks for girls, which plays a crucial role in reducing dropout rates.",
      image: "https://picsum.photos/800/500?random=134",
      imageLeft: true
    },
    {
      title: "Livelihood Support Structures\nEnhancing Economic Opportunities",
      description: "To support local economies, we build infrastructure that directly aids livelihoods. This includes constructing check dams and irrigation canals for farmers, as well as providing market sheds and common facility centers for artisans and self-help groups, enabling them to operate more efficiently.",
      image: "https://picsum.photos/800/500?random=135",
      imageLeft: false
    }
  ];

  return (
    <div className="w-full py-16 bg-white px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-16">Active Programmes</h2>

        <div className="space-y-20">
          {programmes.map((prog, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${prog.imageLeft ? '' : 'md:flex-row-reverse'}`}>

              {/* Image Side */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <img src={prog.image} alt={prog.title.split('\n')[0]} className="w-full h-auto object-cover aspect-[4/3] md:aspect-video" />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-light text-[#a51a70] mb-6 whitespace-pre-line leading-snug">
                  {prog.title}
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {prog.description}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveProgrammes;
