import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function CoverFlowCarousel() {
  return (
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={3}
        centeredSlides
        style={{ height: "500px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 5
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 6
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 7
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 8
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 9
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(https://picsum.photos/600)",
          }}
        >
          Slide 10
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
