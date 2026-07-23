import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full overflow-hidden font-sans">
      {/* Banner Section */}
      {/* Banner Section */}
      <div 
        className="w-full pt-24 pb-28 px-4 md:px-8 lg:px-16 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="text-sm text-gray-300 mb-12 max-w-7xl mx-auto relative z-10">
          <span className="hover:text-white cursor-pointer transition-colors">Home</span> &gt; <span className="text-white font-medium">Contact Us</span>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide drop-shadow-md">
            We’d Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Whether you have a question about our initiatives, want to partner with us, or just want to learn more about our work, our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-light text-text-main mb-8">Send Us a Message</h2>
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Your message has been sent successfully. We will get back to you soon!');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Subject</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors" placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Message</label>
                <textarea rows="5" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008272] focus:border-transparent transition-colors resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#008272] hover:bg-[#006659] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="flex flex-col space-y-12">

            <div>
              <h2 className="text-2xl md:text-3xl font-light text-text-main mb-6">Our Contact Details</h2>
              <div className="space-y-6 text-text-muted">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main mb-1">Registered Office</h4>
                    <p className="leading-relaxed">RZ-2084, G/F, R/S Gali No. 26,<br />Tughlakbad Extension,<br />South Delhi, Delhi - 110019, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main mb-1">Email Us</h4>
                    <p>deepakgupta4up@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#f2f8f8] flex items-center justify-center text-[#008272] shrink-0 mr-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-main mb-1">Call Us</h4>
                    <p>+91 70651 81291</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-medium text-text-main mb-4">Registration Details</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex flex-col"><span className="font-medium text-text-main">CIN</span> U85300DL2022NPL396819</li>
                <li className="flex flex-col"><span className="font-medium text-text-main">NGO Darpan ID</span> DL/2023/0337627</li>
                <li className="flex flex-col"><span className="font-medium text-text-main">80G Registration</span> AAJCD2202P26DL02 (AY 2026-27 to 2030-31)</li>
                <li className="flex flex-col"><span className="font-medium text-text-main">CSR Registration</span> CSR00112282</li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <img src="https://picsum.photos/800/400?grayscale" alt="Map" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-surface px-4 py-2 rounded-lg shadow-md font-medium text-[#008272] flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  View on Google Maps
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Partnership Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-text-main mb-4">Our Partnership Process</h2>
            <div className="w-24 h-1 bg-[#008272] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-[#e6f2f1] text-[#008272] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-medium text-text-main mb-2">Initial Enquiry</h3>
              <p className="text-sm text-text-muted">You write to us outlining your interest: CSR partnership, volunteering, media, or general enquiry.</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 -z-10"></div>
            </div>
            
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-[#e6f2f1] text-[#008272] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-medium text-text-main mb-2">Documentation Exchange</h3>
              <p className="text-sm text-text-muted">For institutional partners, we share our 12A/80G certificate, CSR registration letter, and NGO Darpan profile.</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 -z-10"></div>
            </div>
            
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-[#e6f2f1] text-[#008272] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-medium text-text-main mb-2">Scoping Discussion</h3>
              <p className="text-sm text-text-muted">We discuss programme fit, budget, timelines, and reporting expectations.</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 -z-10"></div>
            </div>
            
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 bg-[#e6f2f1] text-[#008272] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-medium text-text-main mb-2">Formal Proposal & Agreement</h3>
              <p className="text-sm text-text-muted">A detailed project proposal, budget breakdown, and reporting schedule is shared and agreed.</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-200 -z-10"></div>
            </div>
            
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e6f2f1] text-[#008272] rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-medium text-text-main mb-2">Implementation & Reporting</h3>
              <p className="text-sm text-text-muted">Programme delivery begins, with monthly field reports, quarterly progress reports, and a final impact report.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
