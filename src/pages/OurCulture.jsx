import React from 'react';

const OurCulture = () => {
  const values = [
    {
      title: "Ownership",
      description: "A field coordinator who notices an issue is expected to raise and resolve it, not wait to be told.",
    },
    {
      title: "Transparency",
      description: "When a procurement invoice does not match a budgeted line item, our finance team raises it immediately.",
    },
    {
      title: "Respect for Community Knowledge",
      description: "Before finalising a plantation site, our teams ask local residents about ground realities.",
    },
    {
      title: "Consistency Over Spectacle",
      description: "A modest, recurring food distribution is treated as seriously as a large-scale event.",
    }
  ];

  return (
    <div className="w-full overflow-hidden font-sans">
      {/* Banner Section */}
      <div 
        className="w-full pt-24 pb-28 px-4 md:px-8 lg:px-16 relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/600?random=180')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="text-sm text-gray-300 mb-12 max-w-7xl mx-auto relative z-10">
          <span className="hover:text-white cursor-pointer transition-colors">Home</span> &gt; <span className="hover:text-white cursor-pointer transition-colors">Careers</span> &gt; <span className="text-white font-medium">Our Culture</span>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-md uppercase">
            Our Culture
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 space-y-20">
        
        {/* Life at Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-text-main mb-6">Life at Deepak Gupta Foundation</h2>
          <div className="w-24 h-1 bg-[#008272] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-text-muted leading-relaxed">
            We are a small, hands-on team that believes impact work should be held to the same standards of rigour, documentation, and accountability as any professional institution — while never losing the sense of purpose that brought each of us here.
          </p>
        </div>

        {/* How We Hire Section */}
        <div className="bg-[#f2f8f8] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#e0f0f0]">
          <h2 className="text-2xl md:text-3xl font-medium text-text-main mb-4">How We Hire and Onboard</h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            As a young organisation, we build our team deliberately rather than rapidly, onboarding new members with a clear understanding of our documentation standards from day one.
          </p>
        </div>

        {/* Values in Action */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-text-main mb-4">Values in Action</h2>
            <div className="w-24 h-1 bg-[#008272] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#008272] mb-3">{val.title}</h3>
                <p className="text-text-muted leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment to Dignity */}
        <div className="bg-surface p-10 md:p-16 rounded-3xl shadow-lg border border-gray-100 text-center relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">Our Commitment to Dignity</h2>
          <p className="text-xl text-text-muted leading-relaxed max-w-3xl mx-auto italic">
            "We are guided by a founding philosophy of institutional accountability and a workplace culture where all team members — founders, staff, field volunteers, and community partners alike — are treated with dignity."
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurCulture;
