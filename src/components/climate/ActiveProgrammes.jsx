import React from 'react';

const ActiveProgrammes = () => {
  const programmes = [
    {
      title: "Water Conservation And Management\nReviving The Lifeline",
      description: (
        <>
          <p className="mb-4">Water scarcity is one of the most pressing challenges of our times, heavily impacting agricultural yields and drinking water availability. The Deepak gupta Foundation has taken a multidimensional approach to water conservation, focusing on rainwater harvesting, deepening of village ponds, and building check dams.</p>
          <p>These efforts not only increase the surface water storage capacity but also recharge groundwater levels. By actively involving the community in the planning and execution of these projects, we ensure their sustainability and an improved quality of life for the rural populace.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=91",
      imageLeft: true
    },
    {
      title: "Biodiversity Enhancement\nGreening Our Future",
      description: (
        <>
          <p className="mb-4">Recognizing that a rich biodiversity is the best defense against climate change, the Foundation conducts extensive afforestation drives across its operational areas. We focus on planting native species that are resilient to the local climate and require less water, ensuring a higher survival rate.</p>
          <p>Beyond planting trees, we also engage in mangrove restoration along coastal areas. Mangroves act as natural barriers against cyclones and coastal erosion, while providing breeding grounds for marine life. Through community engagement and awareness programs, we foster a culture of environmental stewardship.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=92",
      imageLeft: false
    }
  ];

  return (
    <div className="w-full py-16 bg-surface px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-text-main mb-16">Active Programmes</h2>

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
                <div className="text-text-muted text-sm leading-relaxed">
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
