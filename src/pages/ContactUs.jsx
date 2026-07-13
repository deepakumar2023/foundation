import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      {/* Banner Section */}
      <div className="bg-[#f2f8f8] w-full pt-20 pb-24 px-4 md:px-8 lg:px-16 relative">
        <div className="text-sm text-gray-500 mb-8 max-w-7xl mx-auto">
          <span>Home</span> &gt; <span className="text-[#008272]">Contact Us</span>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Whether you have a question about our initiatives, want to partner with us, or just want to learn more about our work, our team is ready to answer all your questions.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#e0f0f0] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#d0e8e8] rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Contact Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#008272] hover:bg-[#006659] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="flex flex-col space-y-12">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">Our Contact Details</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Head Office</h4>
                    <p className="leading-relaxed">Adani Corporate House,<br/>Shantigram, S G Highway,<br/>Ahmedabad - 382421,<br/>Gujarat, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <p>info@adanifoundation.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                    <p>+91 79 2656 5555</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <img src="https://picsum.photos/800/400?grayscale" alt="Map" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-md font-medium text-[#008272] flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
