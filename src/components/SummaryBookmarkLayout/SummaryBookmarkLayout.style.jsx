import { styled } from "@mui/material/styles";
import {  Paper } from "@mui/material";

export const SummaryContainer = styled(Paper)(({ theme }) => ({
  marginTop: "80px",
  padding: "16px",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const drawerWidth = 300;
export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 2,
  width: "-webkit-fill-available",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: `${drawerWidth}px`,
    },
    [theme.breakpoints.down("md")]: { marginLeft: 0 },
  }),
}));
