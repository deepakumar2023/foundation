import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Collage = () => {
  const container = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Define the 3 positions
      const pos1 = { left: "29%", top: "25%", width: "22%", xPercent: -50, yPercent: -50, zIndex: 10 };
      const pos2 = { left: "50%", top: "50%", width: "32%", xPercent: -50, yPercent: -50, zIndex: 20 };
      const pos3 = { left: "73%", top: "70%", width: "22%", xPercent: -50, yPercent: -50, zIndex: 10 };

      // Set initial positions
      gsap.set(".img-1", pos1);
      gsap.set(".img-2", pos2);
      gsap.set(".img-3", pos3);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-driver",
          start: "top 100%", // Start immediately as it enters from the bottom
          end: "bottom 0%", // End as late as possible
          scrub: 4, // Higher scrub value makes it significantly slower and smoother
          pin: false,
        }
      });

      tl.to(".img-1", { ...pos2, duration: 1, ease: "power1.inOut" }, 0)
        .to(".img-2", { ...pos3, duration: 1, ease: "power1.inOut" }, 0)
        .to(".img-3", { ...pos1, duration: 1, ease: "power1.inOut" }, 0);

      tl.to(".img-1", { ...pos3, duration: 1, ease: "power1.inOut" }, 1)
        .to(".img-2", { ...pos1, duration: 1, ease: "power1.inOut" }, 1)
        .to(".img-3", { ...pos2, duration: 1, ease: "power1.inOut" }, 1);
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile GSAP Stacking Animation
      gsap.set(".mobile-card-2, .mobile-card-3", { yPercent: 100 });

      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: "#mobile-scroll-driver",
          start: "top top",
          end: "+=1500", // Controls how long the scroll takes
          scrub: 1,
          pin: true,
        }
      });

      // Card 2 slides up to cover Card 1
      tlMobile.to(".mobile-card-2", { yPercent: 0, duration: 1, ease: "none" })
      // Card 3 slides up to cover Card 2
              .to(".mobile-card-3", { yPercent: 0, duration: 1, ease: "none" });
    });

  }, { scope: container });

  return (
    <section ref={container} className="bg-surface relative overflow-clip md:overflow-hidden">
      
      {/* DESKTOP SECTION */}
      <div id="scroll-driver" className="hidden md:block w-full py-2">
        <div className="relative w-full max-w-[1100px] mx-auto min-h-[700px] flex items-center justify-center">
          
          {/* Left Circle Text (Fixed) */}
          <div className="absolute left-0 bottom-[10%] w-[280px] h-[280px] rounded-full bg-[#fbf5f9] flex items-center justify-center p-10 z-0">
            <p className="text-[22px] text-text-main leading-snug font-medium text-center">
              The real<br />strength of<br />change lies in<br />people
            </p>
          </div>

          {/* Right Text with Line (Fixed) */}
          <div className="absolute right-[4%] top-[15%] z-10 flex items-center">
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-[#fbf5f9] -z-10"></div>
            <p className="text-[20px] text-primary leading-snug font-medium relative z-10">
              Farmers<br />who understand<br />their soil
            </p>
          </div>

          {/* Image 1: Girls (Initially Top Left) */}
          <div className="img-1 absolute shadow-lg rounded-3xl overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
              alt="Students"
              className="w-full h-full object-cover"
              style={{ minHeight: "320px" }}
            />
          </div>

          {/* Image 2: Farmer (Initially Center) */}
          <div className="img-2 absolute shadow-2xl rounded-[100px] rounded-b-3xl overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800"
              alt="Farmer"
              className="w-full h-full object-cover"
              style={{ minHeight: "450px" }}
            />
          </div>

          {/* Image 3: Women (Initially Bottom Right) */}
          <div className="img-3 absolute shadow-lg rounded-3xl overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&q=80&w=600"
              alt="Women Entrepreneurs"
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>

        </div>
      </div>

      {/* MOBILE VERSION (GSAP Stacked Cards) */}
      <div id="mobile-scroll-driver" className="md:hidden w-full h-[90vh] relative overflow-hidden bg-surface mt-10">
        
        {/* Main Heading for mobile */}
        <div className="absolute top-4 left-0 w-full text-center px-4 z-50">
          <h2 className="text-[28px] font-semibold text-text-main leading-tight bg-surface/90 backdrop-blur-sm p-3 rounded-2xl inline-block">
            The real strength of change lies in people
          </h2>
        </div>

        {/* Card 1: Farmer */}
        <div className="mobile-card-1 absolute top-0 left-0 w-full h-full bg-surface pt-24 pb-10 px-4 z-10 flex items-center justify-center">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800"
              alt="Farmer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-4 right-4 bg-[#fbf5f9] p-5 rounded-2xl shadow-xl flex items-center">
              <div className="w-8 h-[2px] bg-[#0080a8] mr-4 flex-shrink-0"></div>
              <p className="text-base text-[#0080a8] font-medium leading-snug">Farmers who understand their soil</p>
            </div>
          </div>
        </div>

        {/* Card 2: Students */}
        <div className="mobile-card-2 absolute top-0 left-0 w-full h-full bg-surface pt-24 pb-10 px-4 z-20 flex items-center justify-center shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
              alt="Students"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-4 right-4 bg-[#fbf5f9] p-5 rounded-2xl shadow-xl flex items-center">
              <div className="w-8 h-[2px] bg-[#0080a8] mr-4 flex-shrink-0"></div>
              <p className="text-base text-[#0080a8] font-medium leading-snug">Children who learn fast when someone’s paying attention</p>
            </div>
          </div>
        </div>

        {/* Card 3: Women */}
        <div className="mobile-card-3 absolute top-0 left-0 w-full h-full bg-surface pt-24 pb-10 px-4 z-30 flex items-center justify-center shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&q=80&w=600"
              alt="Women Entrepreneurs"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-4 right-4 bg-[#fbf5f9] p-5 rounded-2xl shadow-xl flex items-center">
              <div className="w-8 h-[2px] bg-[#0080a8] mr-4 flex-shrink-0"></div>
              <p className="text-base text-[#0080a8] font-medium leading-snug">Women who hold families together</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collage;
