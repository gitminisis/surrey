import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFlip,
  Navigation,
  Autoplay,
  Pagination,
  FreeMode,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import {
  CarouselBox,
  CarouselText,
  CarouselPagination,
} from "./ImageCarousel.style";

const breakpoints = {
  600: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
  1300: {
    slidesPerView: 4,
  },
};

SwiperCore.use([Navigation, Pagination, FreeMode, Autoplay]);
const Carousel = (props) => {
  let { children } = props;

  return (
    <Swiper
      autoplay={{ delay: 1000 }}
      freeMode={true}
      loop={true}
      speed={800}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      breakpoints={breakpoints}
      style={{ marginTop: "100px", width: "1500px" }}
      spaceBetween={20}
      onReachEnd={() => console.log("reach end")}
      navigation
      pagination={{
        el: ".latest-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<div class="' + className + '">' + (index + 1) + "</div>";
        },
      }}
    >
      {children}
    </Swiper>
  );
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const ImageCarousel = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let { data } = props;
  return (
    <Carousel>
      {data.map((item, i) => (
        <SwiperSlide key={item.thumbnail + i}>
          <CarouselBox dimension={windowDimensions} thumbnail={item.thumbnail}>
            <CarouselText as="p">{item.title}</CarouselText>
          </CarouselBox>
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  data: PropTypes.array,
};
export default ImageCarousel;
