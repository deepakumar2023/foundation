import React from 'react';

const ActiveProgrammes = () => {
  const programmes = [
    {
      title: "Project SuPoshan\nFor A Healthy Start",
      description: (
        <>
          <p className="mb-4">The problem of anemia and malnutrition is severe. The Foundation initiated Project SuPoshan across 14 states with an objective of reducing malnutrition and anemia among women and children. Over 1,000 SuPoshan Sanginis play a crucial role as agents of social change.</p>
          <p>Trained to take anthropometric measurements and raise awareness, they counsel mothers on eating right. Promoting backyard farming and home remedies, they bring health close to those who need it the most.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=15",
      imageLeft: true
    },
    {
      title: " deepak   Hospitals: The Promise Of Quality Health",
      description: (
        <>
          <p className="mb-4">Through its comprehensive health care strategy, bringing affordable and accessible medical care to the underprivileged,  deepak   Foundation is making a difference. The Gujarat  deepak   Institute of Medical Sciences (GAIMS) is a unique public-private partnership. Equipped with a 750-bed multi-speciality hospital in Bhuj, it caters to thousands of patients annually.</p>
          <p>The  deepak   hospital in Mundra is a 100-bed multi-speciality facility serving over 50,000 patients annually. In Godda, Jharkhand, the  deepak   Foundation runs a hospital focusing on maternal and child health. Through these initiatives, the foundation touches millions of lives across communities.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=16",
      imageLeft: false
    },
    {
      title: "Mobile Clinics\nCare Reaching To The Doorstep",
      description: (
        <>
          <p className="mb-4">The lack of primary healthcare access in remote villages is a major concern. To bridge this gap,  deepak   Foundation introduced Mobile Health Care Units (MHCUs). These mobile clinics act as first points of contact for villagers, providing essential diagnoses and medicines for free.</p>
          <p>Equipped with basic diagnostic tools and staffed by a doctor and a pharmacist, they cater to thousands of patients annually. These units have proven to be lifesavers and have reduced the medical out-of-pocket expenses for the rural populace significantly.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=17",
      imageLeft: true
    },
    {
      title: "Health Camps & Clinics\nAddressing Community Specific Needs",
      description: "Understanding the specific health requirements of various age groups, we organize specialized health camps. These camps offer services spanning eye check-ups, dental care, general health, maternal care, and pediatric check-ups. Through these clinics, we offer free diagnoses and medicines, bringing preventative and curative healthcare right to the community.",
      image: "https://picsum.photos/800/500?random=18",
      imageLeft: false
    },
    {
      title: "Blood Banks & Support\nA Drop Of Life",
      description: "The  deepak   Foundation operates and supports several blood banks and voluntary blood donation camps across its locations. Ensuring a steady supply of safe blood is crucial for emergency care and surgeries. With state-of-the-art facilities and dedicated personnel, we encourage the community to donate regularly, making a life-saving impact on society.",
      image: "https://picsum.photos/800/500?random=19",
      imageLeft: true
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
