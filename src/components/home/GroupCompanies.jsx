import React from 'react';

const companies = [
  { name: '  Enterprises', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' },
  { name: '  Ports', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' },
  { name: '  Power', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' },
  { name: '  Green Energy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' },
  { name: '  Transmission', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' },
  { name: '  Total Gas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ _Group_logo.svg/1200px- _Group_logo.svg.png' }
];

const GroupCompanies = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
        <h3 className="text-center text-lg font-medium text-gray-500 mb-8 uppercase tracking-widest">Our Group Companies</h3>

        {/* Simple scrolling/wrapping container for logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
          {companies.map((company, index) => (
            <div key={index} className="w-24 md:w-32 filter grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-auto object-contain"
                title={company.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
