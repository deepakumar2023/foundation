import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { MdOutlineArrowForward, MdOutlinePark, MdOutlineWaterDrop, MdOutlineGroups, MdOutlineCheckCircle, MdOutlineOpenInNew } from "react-icons/md";

function ExploreClimateChanges() {
  const navigate = useNavigate();
  useEffect(() => {
    // Simple Intersection Observer for animation reveals
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-['Hanken_Grotesk',sans-serif] antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" 
              alt="A panoramic photograph of a lush green forest canopy at dawn" 
              style={{backgroundImage: "url('/service/climateaction.jpeg')"}}
            ></div>
            <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'}}></div>
          </div>
          <div className="relative z-10 w-full px-[20px] md:px-[64px] max-w-[1280px] mx-auto text-white">
            <div className="max-w-2xl animate-fade-in-up">
              <span className="inline-block bg-[#006d3d] text-white px-4 py-1 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-bold mb-6 uppercase tracking-widest">
                Environmental Stewardship
              </span>
              <h1 className="text-[40px] md:text-[60px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-bold mb-6">
                Climate Action: Preserving Our Planet
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal mb-8 opacity-90 leading-relaxed">
                The Deepak Gupta Foundation is dedicated to large-scale environmental sustainability. By restoring ecosystems and empowering communities, we are building a resilient future where nature and humanity thrive in harmony.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate('/contact-us')} className="bg-[#006d3d] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
                  Our Strategy
                  <MdOutlineArrowForward />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Metric Bar */}
        <section className="bg-[#f8f9fa] relative z-20 py-16 -mt-12 md:-mt-20">
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
              <div className="bg-white p-10 rounded-xl shadow-lg border border-[#c4c6d0] flex flex-col items-center text-center group hover:border-[#006d3d] transition-all">
                <div className="bg-[#97f3b5] text-[#047240] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlinePark className="text-4xl" />
                </div>
                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-2">500,000+</h2>
                <p className="text-[#44474f] font-medium">Saplings Planted</p>
              </div>
              <div className="bg-white p-10 rounded-xl shadow-lg border border-[#c4c6d0] flex flex-col items-center text-center group hover:border-[#006d3d] transition-all">
                <div className="bg-[#97f3b5] text-[#047240] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineWaterDrop className="text-4xl" />
                </div>
                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-2">20+</h2>
                <p className="text-[#44474f] font-medium">Water Bodies Restored</p>
              </div>
              <div className="bg-white p-10 rounded-xl shadow-lg border border-[#c4c6d0] flex flex-col items-center text-center group hover:border-[#006d3d] transition-all">
                <div className="bg-[#97f3b5] text-[#047240] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineGroups className="text-4xl" />
                </div>
                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-2">15,000+</h2>
                <p className="text-[#44474f] font-medium">Farmers Trained</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story: Harit */}
        <section className="py-[60px] md:py-[120px] bg-[#f8f9fa] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#97f3b5] opacity-30 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    className="w-full aspect-[4/3] object-cover" 
                    alt="Harit Project" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdnNhAHbe5bHlWiyYjgzNzXK9FsGp-XywYhy2-Npkbn0Vk5VwvQ6qLxSNR2jGjUtlMMzU4Ce4lJFUcOK0CMGXcBBp7a2gUcWfFywJZsv0P5BFj-cio-bCcqidpHQFCM7rN7bk1dYqgXXwfrvqeh7Y_UzbJdL1LiL2-WAoFgPCMpRSeuT_8j2iYibboHibN1LzK87VfNsMcYhnCaPexH1KZBZduGJ74ON4ASekXbQPDg3Fx_2lC01PNYK93EnF2i4WIcwdfixWUY3tl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl border border-white/20" style={{background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
                    <p className="italic text-[#1a3668] font-medium mb-4">"Harit has not just brought back the green cover; it has brought back life to our village. The birds are returning, and the air feels cooler. Our children now have a future rooted in nature."</p>
                    <p className="text-[#191c1d] font-bold">— Rajesh Kumar, Local Community Leader</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#006d3d] font-bold tracking-widest uppercase mb-4 text-[14px] leading-[20px] tracking-[0.05em]">Project Spotlight</h3>
                <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f] mb-8">Harit: Our Green Initiative</h2>
                <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-normal text-[#44474f] mb-10 leading-relaxed">
                  Through the Harit initiative, we have transformed over 1,000 hectares of degraded land into flourishing micro-forests. By engaging local communities in every step—from seed selection to nurturing—we ensure the long-term sustainability of our afforestation efforts. This isn't just about planting trees; it's about creating self-sustaining ecosystems.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <MdOutlineCheckCircle className="text-[#006d3d]" />
                    <span className="font-medium text-[#191c1d]">Biodiversity Conservation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdOutlineCheckCircle className="text-[#006d3d]" />
                    <span className="font-medium text-[#191c1d]">Carbon Sequestration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdOutlineCheckCircle className="text-[#006d3d]" />
                    <span className="font-medium text-[#191c1d]">Community Ownership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Programmes */}
        <section className="py-[60px] md:py-[120px] bg-[#f3f4f5]">
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] animate-on-scroll">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f] mb-4">Active Programmes</h2>
                <p className="text-[#44474f] max-w-xl text-[16px] leading-[26px]">Explore the diverse pillars of our climate strategy, each designed to address specific environmental challenges through innovative, scalable solutions.</p>
              </div>
              <button onClick={() => navigate('/contact-us')} className="hidden md:flex items-center gap-2 text-[#00204f] font-bold hover:underline decoration-2 underline-offset-8">
                View All Initiatives
                <MdOutlineOpenInNew />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px]">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="Afforestation Drives" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgEqNA6ieB9HGeYuUgpskU23lKjWzNILL149GtJ85FMhGl1DCK97zW_ANOhlhglTwGieR7-TEtyyTQugrAth57g0GYgPWWar1sDGbiOgARETG8V1mqkJpI56ovHm__q-3IfSlXybk_E2atmRGf5CXvjqSfdYt2qBKkR1IGFc9SxoEx5MUP9qE_eTOtFM3_vhKg1LeBN6fil7F4V05yerKwic0LyylIM5rk_j2FEwbWynQzheo6rtOkIrZZRIocKE7Hn55V0V3_N48y"
                  />
                  <div className="absolute top-4 left-4 bg-[#006d3d] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Afforestation</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-4">Afforestation Drives</h3>
                  <p className="text-[#44474f] mb-8 flex-grow text-[16px] leading-[26px]">Creating resilient green lungs for urban and rural landscapes through scientific plantation methods and community participation.</p>
                  <button onClick={() => navigate('/contact-us')} className="border-2 border-[#00204f] text-[#00204f] font-bold px-6 py-3 rounded-lg hover:bg-[#00204f] hover:text-white transition-colors self-start flex items-center gap-2">
                    Read More
                    <MdOutlineArrowForward />
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="Water Conservation" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB86k3BA_fbr19TKsPcTJTs5vwr4-22B3fvYu2m0Dz_xNRJrJKR97xX73dUBrJCPtVHyOhpP94zd0t4CFHHlwFUJXfpScRDoIJVToNdAbZNv6n5f-HgBDkrd3IEiBPAdRYQIXW1VEedKmft0r0FChqqmNlc0XM8_qhNWkUdPlT3dxQEWYWLNo9UNETukfPl84t5_UaRd3WGkZhtm3z9W0BpElLbS2yJgn6092ePeEpWGQejYlQo7c6PherZIZfAWctgShTTwtM6NW86"
                  />
                  <div className="absolute top-4 left-4 bg-[#006d3d] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Conservation</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-4">Water Conservation</h3>
                  <p className="text-[#44474f] mb-8 flex-grow text-[16px] leading-[26px]">Rejuvenating traditional water bodies and implementing rainwater harvesting to ensure long-term water security for agriculture.</p>
                  <button onClick={() => navigate('/contact-us')} className="border-2 border-[#00204f] text-[#00204f] font-bold px-6 py-3 rounded-lg hover:bg-[#00204f] hover:text-white transition-colors self-start flex items-center gap-2">
                    Read More
                    <MdOutlineArrowForward />
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="Waste Management" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBFoqchty4d8I5tg_yVYtGiUXjTGcDY5CBhrRok2OIg70CRYB-mLBKI2z7qXF4B-zpskqLX_ca4DRfZdMI7sJ_da0pPVA1AtvzIeIT8hsS4mGhsBGsChnDTKyHvgpVAAWWI7dgzN501YLyjp0WK2RUiHaQio6R3Rg-LsDAszAnVpbobimILUZYMhNCek14wsmgpEG6OHGXXcJ6FfB56bOcQDiaqXwtlldxLD7qGeA1sEUmRRswl9iDHp46uYrmpP0vm-Qhv08pzoEt"
                  />
                  <div className="absolute top-4 left-4 bg-[#006d3d] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Sustainability</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold text-[#00204f] mb-4">Waste Management</h3>
                  <p className="text-[#44474f] mb-8 flex-grow text-[16px] leading-[26px]">Implementing circular economy models and community-led waste segregation to minimize landfill impact and promote recycling.</p>
                  <button onClick={() => navigate('/contact-us')} className="border-2 border-[#00204f] text-[#00204f] font-bold px-6 py-3 rounded-lg hover:bg-[#00204f] hover:text-white transition-colors self-start flex items-center gap-2">
                    Read More
                    <MdOutlineArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moments of Change Gallery */}
        <section className="py-[60px] md:py-[120px] bg-[#f8f9fa]">
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] font-semibold text-[#00204f] mb-4">Moments of Change</h2>
              <div className="w-24 h-1 bg-[#006d3d] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Community Mega-Plantation Drive" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm0Np9UrbAR0I3C2F7NAEUjV-X0YNthDpvQyQcO9czfYlNJy2cdQT6OotocJIp60qrYLf1Dv6O88KZMsCdv3s5jm3DGXbaxnXxbdhMyBofLun7DVKGUqxEcch4XoayH2_BQIQnj0Jj0iDNXch1uLsWQLYZkG2P5BNuo8GNY3QP0eVJ0Q0cIih0_y-9jdzcDLJahxe131xUi_E1oD2dAgLaU8bGfV40_sFy7wGnEAohwlhomGDi9Z98n20U6qpVDT08Oe4tOuU8CqD0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold">Community Mega-Plantation Drive, 2025</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden group relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Sustainable Practice Training" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArgvV0OnqSUmYc6XV7blud7bh61_q84LyQXL_1xabX2fpFXAPusVv3Sfd2O_NaSdwYq8VmkYigbZK-B8Fp60okOO0Tm1YgwMRsva9ktQYTS-qTl1gshjtBH8BgNQkGlEEfTPwP7CTifa2iz5uT1c8o7n1yXRAYWYPc4q3Q3F0ZLvV12Gq6wU9sWtBJaSEY9CJAXWvhDcvTZ_rWulenuQktiX-F38oruRK500LSoHAeUvXo8YOeo3llaPXDwmojwr3HmevLaK-GYw_W"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center text-xs">
                  <p className="text-white font-bold">Sustainable Practice Training</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden group relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Nature Clubs for Youth" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOK7HgzO3P7F4g-tzvRJCQY6bT7dWl0PyWzCXAniUbXu9mg0XbEB-uEiEyh5E8iR6tO8Z-TzK5q-NobzrUXvAb8BSbvMXJDfYUxRvhja-rx1HYV-2tcGOR3EkiMB3VrEDzHHY7SZRNjNGggdhJ4uKKBgsiykiQbVQ7NQ4w3fMnOsxnxfG-XhZ5G7x70M6k-GvYpY36yaVV1NAxRSc8ce7nabSOyE9zpiQV9o9_5Qb2oUQIQoR73EfjmYPav9qOdTZelbYZkWiF33ns"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center text-xs">
                  <p className="text-white font-bold">Nature Clubs for Youth</p>
                </div>
              </div>
              <div className="md:col-span-2 rounded-2xl overflow-hidden group relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  alt="Watershed Management Infrastructure" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqod08QTZBbDserOYvZW-KCrzIglo0Re51hwm_fuiBQZXu3xY6cZ9x6_ER-5yiWHP7x6vN7JGs5lyQk1apfy3CM2AS-UM8oX6g0POxAbGR0nZ3Dznvb4aR55njvAESxJ1pne0GgUeDej2CtmXWexY9CEFDoYgrNjIanJ1K5Xh8TT9V7u-AXisM5FPEy3lMghTH6e0LBov4UdoVZNq2Mgcr5qAC3TM5oRSty18phEFCuEGh9GrgwDNAT1ExTec02rKvuU5x91ZCMPEy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold">Watershed Management Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-20 bg-[#1a3668] text-white relative overflow-hidden animate-on-scroll">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#006d3d] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px] relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold mb-4">Stay Updated on Our Impact</h2>
              <p className="opacity-80 text-[16px] leading-[26px]">Join our newsletter to receive monthly stories of change and progress reports on our environmental initiatives across the nation.</p>
            </div>
            <div className="w-full max-w-md flex gap-2">
              <input 
                className="flex-grow bg-white/10 border border-white/20 rounded-lg px-6 py-4 focus:bg-white/20 focus:outline-none transition-all placeholder:text-white/50" 
                placeholder="Your Email Address" 
                type="email"
              />
              <button onClick={() => navigate('/contact-us')} className="bg-[#006d3d] text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExploreClimateChanges;