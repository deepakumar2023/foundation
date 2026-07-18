import React from 'react';

const Collage = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="relative w-full max-w-[1100px] mx-auto min-h-[700px] hidden md:block">
          {/* Left Circle Text */}
          <div className="absolute left-0 bottom-[10%] w-[280px] h-[280px] rounded-full bg-[#fbf5f9] flex items-center justify-center p-10 z-0">
            <p className="text-[22px] text-text-main leading-snug font-medium text-center">
              The real<br />strength of<br />change lies in<br />people
            </p>
          </div>

          {/* Left Girls Image */}
          <div className="absolute left-[18%] top-[5%] w-[22%] z-10">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600" 
              alt="Students" 
              className="w-full h-[320px] object-cover rounded-3xl shadow-lg border-4 border-white"
            />
          </div>

          {/* Center Farmer Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32%] z-20">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" 
              alt="Farmer" 
              className="w-full h-[550px] object-cover rounded-t-[100px] rounded-b-3xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* Right Text with Line */}
          <div className="absolute right-[4%] top-[15%] z-10 flex items-center">
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-[#fbf5f9] -z-10"></div>
            {/* <div className="w-14 h-[1px] bg-primary mr-4 relative z-10"></div> */}
            <p className="text-[20px] text-primary leading-snug font-medium relative z-10">
              Farmers<br />who understand<br />their soil
            </p>
          </div>

          {/* Right Women Image */}
          <div className="absolute right-[16%] bottom-[5%] w-[22%] z-10">
            <img 
              src="https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&q=80&w=600" 
              alt="Women Entrepreneurs" 
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg border-4 border-white"
            />
          </div>
        </div>

        {/* Mobile version of Collage Section */}
        <div className="md:hidden flex flex-col gap-12 mt-20">
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800" 
              alt="Farmer" 
              className="w-full h-[400px] object-cover rounded-t-[50px] rounded-b-3xl shadow-lg border-4 border-white"
            />
            <div className="absolute -bottom-6 right-4 bg-surface p-4 rounded-xl shadow-lg border border-gray-100 flex items-center">
              <div className="w-8 h-[2px] bg-primary mr-3"></div>
              <p className="text-sm text-primary font-medium">Farmers who understand their soil</p>
            </div>
          </div>

          <div className="relative mt-8">
             <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600" 
              alt="Students" 
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg border-4 border-white"
            />
            <div className="absolute -bottom-12 -left-4 w-48 h-48 rounded-full bg-[#fbf5f9] flex items-center justify-center p-6 shadow-sm">
              <p className="text-sm text-text-main leading-snug font-medium text-center">
                The real strength of change lies in people
              </p>
            </div>
          </div>

          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&q=80&w=600" 
              alt="Women Entrepreneurs" 
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;
