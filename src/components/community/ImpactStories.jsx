import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "Building Roads, Connecting Lives: A Village Transformed",
      author: "Deepak gupta  Foundation",
      image: "https://picsum.photos/400/300?random=150"
    },
    {
      id: 2,
      title: "RO Plants Ensuring Clean Drinking Water for Thousands",
      author: "Deepak gupta  Foundation",
      image: "https://picsum.photos/400/300?random=151"
    },
    {
      id: 3,
      title: "New Panchayat Hall Fosters Better Village Governance",
      author: "Deepak gupta  Foundation",
      image: "https://picsum.photos/400/300?random=152"
    },
    {
      id: 4,
      title: "Solar Street Lights Bring Safety and Joy to Rural Homes",
      author: "Deepak gupta  Foundation",
      image: "https://picsum.photos/400/300?random=153"
    }
  ];
  return (
    <div className="w-full py-16 bg-surface px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center text-text-main mb-12">Impact Stories</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: 'w-2 h-2 rounded-full bg-gray-300 cursor-pointer inline-block',
            bulletActiveClass: '!bg-primary'
          }}
          className="pb-2"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="bg-[#fcf5fb] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">

                <div className="mb-6">
                  <span className="text-xs text-[#a51a70] font-medium tracking-wider uppercase mb-3 inline-block">COMMUNITY DEV</span>
                  <h3 className="text-sm font-medium text-text-main leading-snug mb-3 line-clamp-3">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                      <img src={`/favicon.png`} alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-text-muted font-medium">{story.author}</span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={story.image} alt="Impact" className="w-full h-full object-cover" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel controls */}
        <div className="flex justify-center items-center gap-4 mt-10 relative z-10">
          <button className="swiper-button-prev-custom w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-muted hover:text-[#a51a70] hover:border-[#a51a70] transition-colors cursor-pointer">
            &larr;
          </button>
          <div className="swiper-pagination-custom flex gap-2 items-center justify-center"></div>
          <button className="swiper-button-next-custom w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-muted hover:text-[#a51a70] hover:border-[#a51a70] transition-colors cursor-pointer">
            &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImpactStories;
