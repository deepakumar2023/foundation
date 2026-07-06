import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FiArrowRight } from 'react-icons/fi';

const heroSlides = [
  {
    title: "Nearly 30 Years of Enabling Change, Enriching Lives",
    desc: "",
    btnText: "Watch Video",
    btnLink: "#",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Enabling better lives for all through inclusive, long-term community resilience",
    desc: "",
    btnText: "Know More",
    btnLink: "/about-us",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Aspirations rise here, and with them India rises too",
    desc: "Expanding access to education where opportunity is limited.",
    btnText: "See The Impact",
    btnLink: "/impact-themes/education",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  },
  {
    title: "Well-being For Every Home",
    desc: "Ensuring healthy lives spanning families and communities.",
    btnText: "See The Impact",
    btnLink: "/impact-themes/health",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 xl:px-8 mt-24">
                  <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-[fadeInUp_1s_ease-out]">
                      {slide.title}
                    </h1>
                    {slide.desc && (
                      <p className="text-xl md:text-2xl mb-8 font-light animate-[fadeInUp_1s_ease-out_0.2s_both]">
                        {slide.desc}
                      </p>
                    )}
                    <Link 
                      to={slide.btnLink}
                      className="inline-flex items-center px-8 py-4 bg-[var(--color-primary)] hover:bg-[#006b8c] text-white font-medium rounded transition-colors animate-[fadeInUp_1s_ease-out_0.4s_both]"
                    >
                      {slide.btnText}
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
