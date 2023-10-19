import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BANNER_HEIGHT = "100vh";
export const BannerContainer = styled(Container)(({ theme }) => ({
  padding: "0 0",
  height: BANNER_HEIGHT,
  position: "relative",
  // backgroundImage: `url('${banner}')`,
  background: "transparent",
  minHeight: "750px",
  color: "white",
  textAlign: "center",
  backgroundAttachment: "fixed",
  [theme.breakpoints.down("md")]: {
    paddingTop: "150px",
  },
  opacity: 1,
  transition: "opacity 1s ease-out",
}));

export const ShadowLayerBox = styled(Box)(({ banner }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: BANNER_HEIGHT,
  zIndex: "-1",
  backgroundImage: `url('${banner}')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const SearchBar = styled(Box)(() => ({
  height: "10vh",
  maxHeight: "40px",
  display: "flex",
  width: "100%",
  margin: "0 auto",
  boxShadow: "0px 0px 4px 4px rgba(55,55,55,0.6)",

  padding: "0",
}));

export const InputSearch = styled("input")(() => ({
  height: "100%",
  width: "100%",
  "&:focus": {
    outline: "none",
  },
}));

export const SubmitSearch = styled(Button)(() => ({
  flexGrow: "1",
  borderRadius: 0,
}));
export const SiteHeading = styled(Typography)(({ theme }) => ({
  fontSize: "4.5rem",
  marginBottom: "20px",
  color: "white",
  fontWeight: "900",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
    marginTop: "150px",
  },
}));

export const SiteDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "300",
  lineHeight: "2.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

export const HoverLink = styled(Typography)(() => ({
  position: "absolute",
  bottom: "20px",
  left: "0",
  right: "0",
  fontWeight: "900",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    textDecoration: " underline",
  },
}));
