import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { MdOutlineSchool, MdOutlinePersonAdd, MdOutlineVerified, MdOutlineArrowForward, MdOutlineComputer, MdOutlineStar, MdOutlineLocationOn } from "react-icons/md";

function ExploreEducation () {
  const navigate = useNavigate();
  useEffect(() => {
    // Simple reveal on scroll
    const revealElements = document.querySelectorAll('.animate-on-scroll');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
        revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="bg-surface text-text-main font-['Hanken_Grotesk',sans-serif] antialiased">
      {/* Hero Section */}
      <section className="relative w-full h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Students in library" 
            className="w-full h-full object-cover" 
            src="/service/education.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-[20px] md:px-[24px] max-w-[1280px] mx-auto w-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6 leading-tight">
              Education: Empowering Future Generations
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] opacity-90 max-w-2xl">
              Ensuring every child has access to quality learning and the tools to succeed. We believe that knowledge is the cornerstone of sustainable impact and community legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="relative -mt-24 z-20 px-[20px] md:px-[24px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/85 backdrop-blur-[12px] border border-white/30 p-10 rounded-xl shadow-xl flex flex-col items-center text-center">
            <div className="mb-4 text-secondary">
              <MdOutlineSchool className="text-[48px]" />
            </div>
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-1">50+</h2>
            <p className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-text-muted uppercase">Schools Supported</p>
          </div>
          <div className="bg-white/85 backdrop-blur-[12px] border border-white/30 p-10 rounded-xl shadow-xl flex flex-col items-center text-center border-x-primary/10">
            <div className="mb-4 text-secondary">
              <MdOutlinePersonAdd className="text-[48px]" />
            </div>
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-1">10,000+</h2>
            <p className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-text-muted uppercase">Students Reached</p>
          </div>
          <div className="bg-white/85 backdrop-blur-[12px] border border-white/30 p-10 rounded-xl shadow-xl flex flex-col items-center text-center">
            <div className="mb-4 text-secondary">
              <MdOutlineVerified className="text-[48px]" />
            </div>
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-1">95%</h2>
            <p className="text-[14px] leading-[20px] tracking-[0.05em] font-bold text-text-muted uppercase">Graduation Rate</p>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[24px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                alt="Priya holding a tablet" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwPPZ9bkcK_wcpt7PkK7r8iixs1coVKHPyQpr22Qp9my_hXgVTgEBrzbxe7AY9AbO_8v7t3IRjg-_RK99V5Q5QqRlxCq4IfpbVhX8nCsK2mCMrHyjVTqgyFZj5J91_IgEAZJHHb2_uabl8AQ7MOrgW4XKxii5OLCtCOSgpmeqMQd_xlzcit6QKhTKpWR5OU1eXJNWEm_rP8QjaBap5HsYtaCbRgwVr0gzukw_k2bh8g5jJqafLFroIct4axjLAb9oIqFpgqFg8vqpO"
              />
            </div>
            {/* Testimonial Overlay */}
            <div className="absolute -bottom-8 -right-8 md:right-8 bg-[#00522d] text-white p-8 rounded-xl max-w-xs shadow-2xl">
              <p className="text-[16px] leading-[26px] italic leading-relaxed mb-4">
                "The Deepak Mangal Seva program didn't just give me a device; they gave me a window to the world."
              </p>
              <p className="text-[14px] leading-[20px] tracking-[0.05em] font-bold">— Priya, Grade 8</p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[#d8e2ff] text-[#2c4678] rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-bold">Success Story</span>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary leading-tight">
              Bridging the Digital Divide with Deepak Mangal Seva
            </h2>
            <div className="space-y-6 text-text-muted text-[16px] leading-[26px]">
              <p>
                Our flagship initiative, the Deepak Mangal Seva, was born from a simple observation: potential is universal, but opportunity is not. By integrating high-tech digital tools into rural curriculum, we have transformed dozens of community schools into vibrant hubs of modern learning.
              </p>
              <p>
                We don't just provide infrastructure; we invest in teacher training and localized content that resonates with the heritage of the communities we serve. This holistic approach ensures that every student who walks through our doors is prepared for the global economy while remaining rooted in their local values.
              </p>
            </div>
            <button onClick={() => navigate('/knowledge-centre')} className="flex items-center gap-2 text-primary font-bold group hover:gap-3 transition-all cursor-pointer">
              Explore our pedagogy 
              <MdOutlineArrowForward />
            </button>
          </div>
        </div>
      </section>

      {/* Active Programmes Section */}
      <section className="py-[60px] md:py-[120px] bg-[#f3f4f5] animate-on-scroll">
        <div className="px-[20px] md:px-[24px] max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-primary mb-4">Active Programmes</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prog 1 */}
            <div className="bg-white rounded-2xl p-10 border border-[#c4c6d0] hover:shadow-xl transition-all flex flex-col h-full group">
              <div className="w-14 h-14 rounded-xl bg-[#d8e2ff] flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <MdOutlineComputer className="text-primary group-hover:text-white text-3xl" />
              </div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Digital Literacy Labs</h3>
              <p className="text-[16px] leading-[26px] text-text-muted mb-10 flex-grow leading-relaxed">
                Equipping rural schools with state-of-the-art computer labs and high-speed internet to foster technical skills from an early age.
              </p>
              <button onClick={() => navigate('/contact-us')} className="w-full py-3.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                Read More
              </button>
            </div>
            {/* Prog 2 */}
            <div className="bg-white rounded-2xl p-10 border border-[#c4c6d0] hover:shadow-xl transition-all flex flex-col h-full group">
              <div className="w-14 h-14 rounded-xl bg-[#97f3b5] flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <MdOutlineStar className="text-secondary group-hover:text-white text-3xl" />
              </div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Scholarship Excellence</h3>
              <p className="text-[16px] leading-[26px] text-text-muted mb-10 flex-grow leading-relaxed">
                A merit-based financial aid program supporting high-performing students from underprivileged backgrounds for higher education.
              </p>
              <button onClick={() => navigate('/contact-us')} className="w-full py-3.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                Read More
              </button>
            </div>
            {/* Prog 3 */}
            <div className="bg-white rounded-2xl p-10 border border-[#c4c6d0] hover:shadow-xl transition-all flex flex-col h-full group">
              <div className="w-14 h-14 rounded-xl bg-[#ffdbca] flex items-center justify-center mb-8 group-hover:bg-tertiary transition-colors">
                <MdOutlineLocationOn className="text-tertiary group-hover:text-white text-3xl" />
              </div>
              <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary mb-4">Rural Learning Centers</h3>
              <p className="text-[16px] leading-[26px] text-text-muted mb-10 flex-grow leading-relaxed">
                Decentralized community hubs that provide after-school tutoring, vocational training, and adult literacy programs.
              </p>
              <button onClick={() => navigate('/contact-us')} className="w-full py-3.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Moments of Change Gallery */}
      <section className="py-[60px] md:py-[120px] bg-white overflow-hidden animate-on-scroll">
        <div className="px-[20px] md:px-[24px] max-w-[1280px] mx-auto mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-primary">Moments of Change</h2>
          </div>
        </div>
        <div className="px-[20px] md:px-[24px] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden group">
              <img 
                alt="Classroom learning" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7utEGKic_33nuimWnQNOBMUB5HKqqk84xeIGNRPl_5819NvkMjBMvkAjLkt-RHS2f_Okk5g3DYuSJdDgKhzxAqx9NctpGt2FYN575AUbAKnR5pov1UQqnmynRyMOGm50yRffDI3Z4lpaeTlSv42Z9Y7hmJXgaeP35tHVSF2Ym34gx1X_gYxdg5FzhwRZsDLbITTL4qozxM4CqYwlsxo6q-EGTa3z7oh3tPDIoy2J_UPP9zHgaVicmRhaNMU85uSYRFgRdd0tJtFJw"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden group">
              <img 
                alt="Robotics lab" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRuojYCFeiIHLCX3PMfc7DPktnlgDkpaxNkgXVLnILmZMTdmlmt26mtdEt2yHT0EpFLMaZrxXtkR8Out1UIrutKAhiqBsgsJ7ZFKGeaukdg4lc-jsNx02Sv8G5RQjxMBQG5imE4wxJbZ3ug8akQkxmaLujmrNro0okvfN-xFTkE9jdNKVY7DsR3LvTBwZCVCINLwS4pmmurNketXK61PSHNCl8R9PdG5t-v9Hng-1a9iJuhDgOKvzgjtzsb3i1n6IjrbJZDuopuJa7"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden group">
              <img 
                alt="Outdoor literacy class" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDidl5_eYUZRdwp3HDbVljIs2Eg3ZXf1FKlLbLVZWMdzJfCRhAGOR4lRxxYuVN7szhDaqWbIJyr6wtUfmMtrvftlfUa6k9oXQrcSqWmz-0j8g2fkVaqWY2b-0r3sf3mhwotz4Tr62EEknGb2AOLChAcMmLUUSQOGf6qDqMMaGYom_PMlGipP5BlJQwNAHeVyeC19Ani5ye-bHWLih2f79LGyk1i28Tt1_kUaYUWDrior3HtVXEYh1_vOd8I2CyBi6R27yEy5bJRmftb"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[60px] md:py-[120px] px-[20px] md:px-[24px] max-w-[1280px] mx-auto animate-on-scroll">
        <div className="bg-[#001a42] text-white rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/30 rounded-full blur-[100px]"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold mb-8 leading-tight">Help Us Rewrite the Future</h2>
            <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] mb-12 opacity-80">
              Your contribution directly supports scholarships, school infrastructure, and the expansion of our digital literacy programs across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => navigate('/contact-us')} className="bg-[#00894a] text-white px-12 py-4 rounded-xl font-bold text-[14px] leading-[20px] tracking-[0.05em] uppercase hover:bg-secondary transition-all shadow-lg">
                Support a Student
              </button>
              <button onClick={() => navigate('/contact-us')} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-4 rounded-xl font-bold text-[14px] leading-[20px] tracking-[0.05em] uppercase hover:bg-white/20 transition-all">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreEducation