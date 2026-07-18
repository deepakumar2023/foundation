import React from 'react';

const ActiveProgrammes = () => {
  const programmes = [
    {
      title: "  deepak   gupta  Skill Development Centre (ASDC)\nBuilding Skills, Shaping Futures",
      description: (
        <>
          <p className="mb-4">ASDC, functioning under the  Deepak  gupta Foundation, plays a pivotal role in empowering the youth by providing them with industry-relevant skills. Partnering with the National Skill Development Corporation (NSDC), ASDC offers training in diverse sectors like welding, crane operation, logistics, and retail.</p>
          <p>The goal is to bridge the gap between demand and supply of skilled manpower, ensuring the youth are not just employable but equipped for entrepreneurship. The centres utilize cutting-edge technology, including simulators, to provide hands-on experience, significantly boosting placement rates.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=54",
      imageLeft: true
    },
    {
      title: "Women Empowerment Programs\nFostering Financial Independence",
      description: (
        <>
          <p className="mb-4">We believe that empowering a woman empowers a community. Our initiatives focus on organizing women into Self-Help Groups (SHGs) and providing them with micro-finance support, financial literacy, and livelihood training.</p>
          <p>From tailoring and handicraft to food processing and organic farming, women are trained in trades that align with local market demands. This not only supplements their family income but also elevates their social status and decision-making power within their households.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=55",
      imageLeft: false
    },
    {
      title: "Agricultural Interventions\nCultivating Prosperity",
      description: (
        <>
          <p className="mb-4">Agriculture remains the backbone of the rural economy. Our interventions focus on sustainable farming practices, introducing high-yield seed varieties, and promoting modern techniques like System of Rice Intensification (SRI) and drip irrigation.</p>
          <p>We work closely with farmers to reduce input costs and increase yields. Additionally, we facilitate market linkages, ensuring farmers get the right price for their produce, thereby enhancing their overall profitability and quality of life.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=56",
      imageLeft: true
    },
    {
      title: "Animal Husbandry & Dairy\nSupplementing Rural Incomes",
      description: "Livestock is a critical asset for rural households. We support communities by providing veterinary services, promoting improved breeds, and conducting awareness programs on animal health and nutrition. By strengthening dairy cooperatives and ensuring fair milk procurement processes, we help families secure a steady supplementary income.",
      image: "https://picsum.photos/800/500?random=57",
      imageLeft: false
    },
    {
      title: "Support for Artisans & Fisherfolk\nPreserving Heritage, Ensuring Livelihoods",
      description: "We work with traditional artisans to help them preserve their craft while making it commercially viable. By providing design inputs and market access, we ensure their skills translate into sustainable livelihoods. Similarly, we support fisherfolk with modern equipment, safety gear, and infrastructure like iceboxes, significantly improving their daily earnings.",
      image: "https://picsum.photos/800/500?random=58",
      imageLeft: true
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
