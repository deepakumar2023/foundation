import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#f8f0f8] w-full pt-20 pb-16 px-4 md:px-8 lg:px-16 relative">
      {/* Breadcrumbs */}
      <div className="text-sm text-text-muted mb-8 max-w-7xl mx-auto">
        <span>Home</span> &gt; <span className="text-[#a51a70]">Impact Themes</span> &gt; <span className="text-[#a51a70]">Education</span>
      </div>

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-3xl md:text-5xl font-light text-text-main mb-4 tracking-wide">
          The Distance Between Potential<br />And Progress Is A Classroom
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative h-auto md:h-[600px] flex flex-col md:block items-center space-y-12 md:space-y-0">

        {/* Testimonial 1 */}
        <div className="md:absolute md:top-0 md:left-[10%] flex flex-col md:flex-row items-center md:items-start max-w-sm">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="/1.jpeg" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-text-main leading-relaxed">
              "My teacher was a magic helper, making the hard math as be easily. I knew the right guidance. I thought she were some kind of a...
              <a href="#" className="text-[#a51a70] italic"> 7 more words</a>"
            </p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="md:absolute md:top-[120px] md:right-[5%] flex flex-col md:flex-row-reverse items-center md:items-start max-w-sm">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-mr-8 md:ml-6 z-10 border-4 border-white">
            <img src="/2.jpeg" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-mr-12 pt-12 md:pt-6 md:pr-16 text-right">
            <p className="text-text-main leading-relaxed">
               "My father, a fisherman, wants me to become a forest ranger. It has remained a dream because. Walking three kilometers from where...
              <a href="#" className="text-[#a51a70] italic"> 32 more words</a>"
            </p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="md:absolute md:bottom-[50px] md:left-[15%] flex flex-col md:flex-row items-center md:items-start max-w-sm">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 shadow-lg mb-4 md:mb-0 md:-ml-8 md:mr-6 z-10 border-4 border-white">
            <img src="/3.jpeg" alt="Student" className="w-full h-full object-cover" />
          </div>
          <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm text-sm relative z-0 md:-ml-12 pt-12 md:pt-6 md:pl-16">
            <p className="text-text-main leading-relaxed">
              "My father insisted on sending my grand and three sisters to the small classroom every morning. He wanted that I wouldn't have the same struggles of being illiterate. Now I'm in grade 1.
              <a href="#" className="text-[#a51a70] italic"> 7 more words</a>"
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 text-sm text-text-muted leading-relaxed px-4 pb-8">
        deepak gupta  Foundation is working to deeply impact the growing educational inequalities by bringing access to quality education to children across India. Free primary education is provided to the underprivileged through creating physical infrastructure. We also focus on capacity building of teachers and implement innovative learning tools, thereby nurturing an environment where students can blossom. Today,   deepak   gupta  Vidya Mandirs are educating thousands of students for free, while many thousands more are receiving quality education through our smart classroom interventions across 200+ government schools in the country.
      </div>
    </div>
  );
};

export default HeroSection;
