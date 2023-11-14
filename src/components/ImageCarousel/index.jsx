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
import { getCurrentSession } from "../../utils/functions";

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
  let { children, loop = true, autoplay = true } = props;

  return (
    <Swiper
      autoplay={autoplay}
      freeMode={true}
      loop={loop}
      grabCursor={true}
      speed={1000}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      breakpoints={breakpoints}
      style={{ marginTop: "50px", width: "100%" }}
      spaceBetween={20}
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
  let { data, loop, handleClick, autoplay } = props;
  let curSession = getCurrentSession()
    ? getCurrentSession()
    : "/scripts/mwimain.dll";
  return (
    <Carousel loop={loop} autoplay={autoplay}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <CarouselBox
            onClick={(_) => {
              if (handleClick === undefined) {
                window.location = item.link ? curSession + item.link : "#";
              }

              handleClick(i);
            }}
            dimension={windowDimensions}
            thumbnail={item.thumbnail}
          >
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
