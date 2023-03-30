import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Divider, Paper } from "@mui/material";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ChipStack(props) {
  const breakpoints = {
    300: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 6,
    },
  };
  let { data } = props;
  return (
    <Swiper
      freeMode={true}
      loop={true}
      speed={800}
      spaceBetween={10}
      breakpoints={breakpoints}
    >
      {data.map((e, i) => {
        return (
          <SwiperSlide>
            <Chip
              sx={{ padding: "20px 20px", fontSize: "1rem" }}
              color="secondary"
              label={e.title}
              onClick={(_) => (window.location = e.url)}
            />{" "}
            {/* {i !== data.length - 1 && (
                <Divider orientation="vertical" variant="middle" flexItem />
              )} */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

ChipStack.propTypes = {
  data: PropTypes.array,
};
