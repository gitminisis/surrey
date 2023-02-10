import { Container, Box, AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppbarRoot = styled(AppBar)(({ scroll, theme }) => ({
  backgroundColor:
    scroll === 0 ? theme.palette.primary.main : theme.palette.primary.main,
  boxShadow: "none",
  width: "100vw",
  transition: "all 300ms ease-out",
  height: "79px",
  justifyContent: "center",
  opacity: scroll === 0 ? 1 : 0.95,
  left: 0,
  right: 0,
}));
export const AppbarContainer = styled(Container)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  height: "60px",
}));

export const AppbarLogoBox = styled(Box)((_) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

export const AppbarLogo = styled(Box)(() => ({
  maxWidth: "250px",
  marginRight: "10px",
  
}));

export const AppbarLinkBox = styled(Box)(() => ({
  justifyContent: "space-between",
  width: "50%",
  alignItems: "center",
  cursor: "pointer",
}));

export const AppbarLink = styled(Box)(() => ({
  display: "block",
  height: "auto",
  fontWeight: "bold",
  color: "white",
  "&:hover": {
    opacity: 0.8,
  },
}));
