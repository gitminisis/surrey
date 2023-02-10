import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BANNER_HEIGHT = "100vh";
export const BannerContainer = styled(Container)(({ theme, banner }) => ({
  paddingTop: "15%",
  height: BANNER_HEIGHT,
  position: "relative",
  backgroundImage: `url('${banner}')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "500px",
  color: "white",
  textAlign: "center",
  backgroundAttachment: "fixed",
  [theme.breakpoints.down("md")]: {
    paddingTop: "150px",
  },
}));

export const ShadowLayerBox = styled(Box)((_) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: BANNER_HEIGHT,
  backgroundColor: "rgba(12, 12, 12, 0.9)",
  zIndex: "-1",
}));

export const SearchBar = styled(Box)(({ theme }) => ({
  height: "10vh",
  maxHeight: "40px",
  display: "flex",
  width: "100%",
  margin: "0 auto",
  boxShadow: "0px 0px 4px 4px rgba(55,55,55,0.6)",

  padding: "0",
}));

export const InputSearch = styled("input")(({ theme }) => ({
  height: "100%",
  width: "100%",
  "&:focus": {
    outline: "none",
  },
}));

export const SubmitSearch = styled(Button)((_) => ({
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
  },
}));

export const SiteDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "300",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
}));

export const HoverLink = styled(Typography)(({ theme }) => ({
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
