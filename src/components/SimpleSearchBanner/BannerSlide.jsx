import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { ShadowLayerBox } from "./SimpleSearchBanner.style";
const BannerSlide = (props) => {
  const { banner } = props;
  //   return banner.map((url, i) => <div key={i}>{url}</div>);

  return (
    <Swiper
      navigation={false}
      pagination={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      autoplay={{
        delay: 10000,
      }}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        zIndex: "-1",
      }}
    >
      {banner.map((url, i) => (
        <SwiperSlide key={i}>
          <ShadowLayerBox banner={url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

BannerSlide.propTypes = {
  banner: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BannerSlide;
