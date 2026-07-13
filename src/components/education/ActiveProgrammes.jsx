import React from 'react';

const ActiveProgrammes = () => {
  const programmes = [
    {
      title: "Adani Vidya Mandir\nA Place To Learn. A Space To Grow.",
      description: (
        <>
          <p className="mb-4">Adani Vidya Mandirs are state-of-the-art schools run completely free of cost for children from low-income families. These CBSE-affiliated schools give a robust foundation to meritorious students by opening doors to opportunities.</p>
          <p>Adani Vidya Mandir is the first cost-free school in India to get NABET accreditation by the Quality Council of India. Currently, four campuses of Adani Vidya Mandirs are operational in Ahmedabad, Bhadreshwar, Surguja and Krishnapatnam, providing free education to children. The school has been continuously yielding 100% board exam results, year-on-year.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=10",
      imageLeft: true
    },
    {
      title: "Adani Public School\nNurturing Little Minds By Choice",
      description: (
        <>
          <p className="mb-4">Adani Public School in Mundra was instituted to impart holistic education to students from nearby communities. Through the adoption of the ‘Makerspace’ approach, students have been able to ideate and create real life, 3D prototypes. The school creates a learning environment that gives equal importance to the mind, body and soul while keeping learning simple and fun.</p>
          <p>As per the Education World India School Rankings, it is ranked as the #1 Co-ed Day School in Kutch and #8 in Gujarat. Given the school’s persistent push for academic excellence and innovation in teaching methods, it has also been certified as the only school in Saurashtra and Kutch region to have received NABET accreditation from the Quality Council of India.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=11",
      imageLeft: false
    },
    {
      title: "Utthan\nFrom One Day To A Brighter Future",
      description: (
        <>
          <p className="mb-4">Project Utthan focuses on improving the quality of education in government schools in rural regions across 14 states in India. It aims to elevate the standard of reading, writing and basic mathematical skills of primary students. It builds the capacity of mothers to monitor their child's studies and fosters a deeper bond between them.</p>
          <p>Smart classrooms, interactive teaching methodologies, and a joyful environment keep children engaged. Currently, over 30,000 children in 200+ schools are benefiting from this project. Thus, a well-rounded foundation gives children the confidence and skills they need to navigate the world.</p>
        </>
      ),
      image: "https://picsum.photos/800/500?random=12",
      imageLeft: true
    },
    {
      title: "Udaan\nGiving Young Dreams A New Horizon",
      description: "Project Udaan is an inspirational tour to the Adani Group's ports, power plants and more. It aims to encourage the youth to dream big. The exposure helps students understand the scale of operations and the numerous career opportunities available to them. This visual learning has left a lasting impact on young minds, leading to an increase in enrollment and a reduction in dropout rates. It is currently being implemented across 18 states in India.",
      image: "https://picsum.photos/800/500?random=13",
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
                <img src={prog.image} alt="Programme" className="w-full h-auto object-cover aspect-[4/3] md:aspect-video" />
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
