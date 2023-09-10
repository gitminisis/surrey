
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MasonryBox = styled(Box)(({ theme }) => ({
  position: "relative",
  boxShadow: "3px 3px 4px 1px rgba(195,195,195,0.74)",
}));

export const MasonryShadow = styled(Box)(({ theme }) => ({
  position: "absolute",

  width: "100%",
  height: "100%",
  border: "2px solid white",
  opacity: "0",
  cursor: "pointer",
  zIndex: 2,
  "&:hover": {
    opacity: 1,
    background: "rgb(10,10,10,0.5)",
  },
}));

export const MasonryAction = styled("div")((_) => ({
  position: "absolute",
  bottom: "3%",
  color: "white",
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  transformOrigin: "bottom",
  margin: "0 auto",
  textAlign: "center",
  width: "100%",
  fontSize: "14px",
}));
