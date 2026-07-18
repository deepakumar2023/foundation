import React, { useState } from 'react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('All Roles');

  const tabs = ['All Roles', 'Education', 'Healthcare', 'Environment', 'Operations'];

  const jobs = [
    {
      title: 'Senior Program Manager',
      department: 'Education',
      location: 'Mumbai, India'
    },
    {
      title: 'Clinical Field Officer',
      department: 'Healthcare',
      location: 'Gujarat, India'
    },
    {
      title: 'Climate Resilience Strategist',
      department: 'Environment',
      location: 'Delhi NCR'
    }
  ];

  const filteredJobs = activeTab === 'All Roles' ? jobs : jobs.filter(job => job.department === activeTab);

  return (
    <div className="font-['Hanken_Grotesk',sans-serif] bg-surface text-text-main text-[16px] leading-[26px]">
      
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsblFPNyu93gcS5L0rUgTo-k2s_JUUbVehBBfFw51wPQqggreKZV3ljiC2f7dpZKJY-FceQlXAePLEtYTxSdIvKQtLvL8Dc6fKdKisjijtB48Q1oynoobBcca05_v1jMuKsBSC-VGHnFLfhtHTRkAHRgZTYB1ORozkxmvf7Kz1hxrqxkVYS3x3GN9846ptID7klr4hwd5hBbKDLfmvX4vsD95ehNH6c4g643ucdsrRAcfs749gk4Fpjfjn68pTaL9OfBAzOLwtfK7n')`}}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00204f]/80"></div>
        </div>
        <div className="relative z-10 w-full px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-white">
          <div className="max-w-2xl">
            <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6">Join Our Mission</h1>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#d8e2ff] mb-10">
              Building a legacy of impact through community development, sustainable growth, and transformative social change across the nation.
            </p>
            <a 
              href="#openings" 
              className="bg-secondary hover:bg-[#047240] text-white px-8 py-4 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold inline-flex items-center gap-2 transition-all group"
            >
              Explore Openings
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-secondary text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase">The Foundation Heartbeat</span>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary">
              Life at Deepak Gupta Foundation
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-text-muted">
              We believe that real change starts with people who are passionate about making a difference. Our culture is built on the bedrock of empathy, integrity, and relentless innovation in the social sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#edeeef] rounded-xl border-l-4 border-secondary">
                <h4 className="font-bold text-primary mb-2">Empathy</h4>
                <p className="text-sm opacity-80">Deeply understanding the communities we serve.</p>
              </div>
              <div className="p-6 bg-[#edeeef] rounded-xl border-l-4 border-primary">
                <h4 className="font-bold text-primary mb-2">Integrity</h4>
                <p className="text-sm opacity-80">Maintaining the highest standards of transparency.</p>
              </div>
              <div className="p-6 bg-[#edeeef] rounded-xl border-l-4 border-[#f88034]">
                <h4 className="font-bold text-primary mb-2">Innovation</h4>
                <p className="text-sm opacity-80">Pioneering sustainable solutions for growth.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                alt="Our Culture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Bd_nHxQQ3SKNLeV8MhV5vptD8ggA_HNz1Y_y7wLNRY3t1nVGc9ZnJvlm3TpxmLiovIND2jnHPMdrDD3xv6GO7v2e2RBJ9Axi-XYrMZL5LCOBCByNoaufFF_iYDvgTsaVzaNiL0A_vx7pGRaJ47Dymqzk1mCBcmDvjyLRZcZXg1BLP_iNMWpwY2xl7kJDB9gR-fW8-pDJycGdGkGXN0nqxdnlkOSarGRVDqfDdoduMCTXRxlBRvivzjQYzvcfuxuPky1twuNkxZ5H"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-8 rounded-xl shadow-xl hidden md:block">
              <span className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] block font-bold">500+</span>
              <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold">Change Makers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us? */}
      <section className="bg-[#f3f4f5] py-[60px] md:py-[120px]">
        <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary mb-4">Why Join Us?</h2>
          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-text-muted max-w-2xl mx-auto">
            Beyond a career, we offer a platform to influence the lives of millions and grow as a professional in a mission-driven ecosystem.
          </p>
        </div>
        <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-[#d8e2ff] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Professional Growth</h3>
            <p className="text-text-muted">Continuous learning opportunities through structured mentorship and global best practice exposure.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-[#d8e2ff] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Social Impact</h3>
            <p className="text-text-muted">Direct involvement in projects that redefine healthcare, education, and climate resilience at scale.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-[#d8e2ff] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Diverse Environment</h3>
            <p className="text-text-muted">A collaborative workplace that celebrates unique perspectives and fosters inclusive community development.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-[#d8e2ff] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
            <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Holistic Well-being</h3>
            <p className="text-text-muted">Comprehensive health benefits and work-life harmony initiatives designed for our field and corporate teams.</p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto" id="openings">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary mb-4">Current Openings</h2>
            <p className="text-text-muted">Explore opportunities to contribute across our diverse impact themes.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-[#747780] text-text-muted hover:border-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-hidden border border-[#c4c6d0] rounded-xl bg-white shadow-sm">
          <div className="hidden md:grid grid-cols-4 gap-4 p-6 bg-[#edeeef] text-primary font-bold border-b border-[#c4c6d0]">
            <div>Position</div>
            <div>Department</div>
            <div>Location</div>
            <div className="text-right">Action</div>
          </div>
          
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 hover:bg-[#ffffff] transition-colors border-b border-[#c4c6d0] items-center">
                <div>
                  <h4 className="font-bold text-lg text-primary">{job.title}</h4>
                  <span className="md:hidden text-sm text-text-muted block mt-1">{job.department} • {job.location}</span>
                </div>
                <div className="hidden md:block text-text-muted">{job.department}</div>
                <div className="hidden md:block text-text-muted">{job.location}</div>
                <div className="text-right">
                  <button className="w-full md:w-auto px-6 py-2 rounded-lg bg-[#c4c6d0] hover:bg-[#1a3668] hover:text-white transition-all text-primary font-bold text-sm">Apply Now</button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-text-muted">No openings available in this department currently.</div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:underline">
            View all 24 openings
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          </button>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="bg-primary py-[60px] md:py-[120px] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg className="w-[300px] h-[300px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
        </div>
        <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto relative z-10">
          <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-white mb-12">Voices from the Field</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#1a3668]/30 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-white italic mb-8 leading-relaxed">
                "Working at Deepak Gupta Foundation has redefined my understanding of social impact. Here, we don't just execute projects; we build legacies. The freedom to innovate and the support from leadership is unparalleled in the sector."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Priya Sharma" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYNDQOg4J3jKwj8JhBGEFxPy2gCh08bVdlEWJeHb8NJcRHNwfr8HtXmsjprWNl49ArYeY__ibRxOmis9WDK1boi1Q84xiP-6xcd1tqvQbWuopmxOh2bd4q1VslxQO0yykVW_kUV9SX7q6p7ab3uVjsZ8wdoQdVubROYB8rfv9TcJqa10vcYxTjQyQhnzJNH4lUAjp9s1t6mCVBsiwtm_5J9O5GFI6eOFAnkvDnU5zfos2qLa0JkkU34pdsUvdom-gyLYsfhJer7zlK"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Priya Sharma</h4>
                  <p className="text-[#d8e2ff] text-sm">Director, Sustainable Livelihoods</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a3668]/30 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-white italic mb-8 leading-relaxed">
                "Every day I visit our project sites, I see the direct results of our collective effort. The satisfaction of seeing a community thrive because of our interventions is what keeps me motivated. It’s a career with a soul."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Dr. Amit Varma" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1KXsQ81LdYRf0W7f5FJn8XZjbZ0sitysl3q-_pikCX5K4Y79HNOEIx_ok0UgfYm78XDlAqzJCRCmzO_mJymDqlHCMarHy8BkS-rYtDNj7wBS1dCurAY3-1DgeGUGAtpLoXoZTq5nWlxBR849FXSSlqcz493qKcR-8X9Jb_n3fur9nchtsut7RVKUk933RINtKQ35vT4nep9YJUaMGPlInsVfeQj-LjSV24PHI1hrITdvGg995Bv69AHNpB_PDfeC1Iqu6IPG8HMDx"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Dr. Amit Varma</h4>
                  <p className="text-[#d8e2ff] text-sm">Field Operations Lead, Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary mb-16">Your Journey with Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Visual Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#c4c6d0] -z-10"></div>
          
          <div className="space-y-6">
            <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <h4 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary">Discover Roles</h4>
            <p className="text-text-muted px-4">Find the position that aligns with your expertise and passion for impact.</p>
          </div>
          
          <div className="space-y-6">
            <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <h4 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary">Submit Application</h4>
            <p className="text-text-muted px-4">Complete our intuitive application form with your professional journey.</p>
          </div>
          
          <div className="space-y-6">
            <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
            </div>
            <h4 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary">Meaningful Dialogues</h4>
            <p className="text-text-muted px-4">Engage with our leadership to explore synergy and mission alignment.</p>
          </div>
          
          <div className="space-y-6">
            <div className="w-24 h-24 bg-secondary border-4 border-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 11.1l-1.79-1.79c-.39-.39-1.02-.39-1.41 0l-3.3 3.3-1.63-2.61c-.32-.51-.95-.69-1.49-.43l-4.22 2.06c-.3.14-.54.39-.64.71L5 18.01 2.37 15.4c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l3.52 3.52c.39.39 1.02.39 1.41 0l2.67-2.67.92-3.83 4.41-2.15 2.11 3.36c.26.41.73.61 1.2.51L22.82 13c.48-.11.75-.62.54-1.07-.15-.36-.48-.61-.86-.83z"/></svg>
            </div>
            <h4 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary">Joining the Team</h4>
            <p className="text-text-muted px-4">Begin your journey as a catalyst for transformative community change.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-[60px] md:mb-[120px] px-[20px] md:px-[64px] max-w-[1280px] mx-auto">
        <div className="bg-[#edeeef] p-12 md:p-24 rounded-3xl text-center space-y-8">
          <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary">Ready to make a difference?</h2>
          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] text-text-muted max-w-2xl mx-auto">
            If you don't see a role that fits but believe you have the skills to drive impact, we'd still love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transition-shadow">Upload Your CV</button>
            <button className="border border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">Sign up for Job Alerts</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

