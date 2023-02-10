import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

export const CarouselText = styled(Typography)((description) => ({
  fontSize: "20px",
  color: "white",
  position: "absolute",
  bottom: "16px",
  left: "16px",
  fontWeight: "600",
}));
export const CarouselBox = styled(Box)(({ theme, dimension, thumbnail }) => {
  let { width, height } = dimension;
  const MAX_WIDTH = 1500;

  return {
    borderRadius: "5px",
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    filter: "brightness(0.8)",
    position: "relative",
    boxShadow: "6px 6px 6px 0px rgba(0,0,0,0.6)",
    ":hover": {
      filter: "brightness(0.6)",
    },
    height: ((_) => {
      if (width < 600) return `${width - 32}px`;
      if (width > 600 && width <= 1000) return `${(width - 52) / 2}px`;
      if (width > 1000 && width <= 1200) return `${(width - 72) / 3}px`;
      else return `${(width > MAX_WIDTH ? MAX_WIDTH : width - 92) / 4}px`;
    })(),
  };
});

export const CarouselPagination = styled(Box)((_) => ({
  display: "flex",
  width: "80%",
  maxWidth: "500px",
}));

CarouselBox.propTypes = {
  dimension: PropTypes.object,
  thumbnail: PropTypes.string,
};
