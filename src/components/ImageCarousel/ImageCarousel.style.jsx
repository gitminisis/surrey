import { Box,  Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

export const CarouselText = styled(Typography)((description) => ({
  fontSize: "20px",
  color: "white",
  position: "absolute",
  bottom: "16px",
  left: "12px",
  right: "12px",
  fontWeight: "600",
  background: "#2a4408",
  padding: "2px 4px",
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
    filter: "brightness(1)",
    position: "relative",
    boxShadow: "6px 6px 6px 0px rgba(0,0,0,0.2)",
    transition: "all 0.5 linear",
    ":hover": {
      filter: "brightness(0.9)",
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
