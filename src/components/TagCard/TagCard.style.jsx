import { Card, CardMedia, Container, Typography } from "@mui/material";
import { styled } from "@mui/material";

export const TagCardContainer = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "left",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "&:hover": {
    transition: "all 0.2s",
  },
}));

export const TagCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "50%",
  "&:hover": {
    transition: "all 0.2s",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SubDescription = styled(Typography)(({ theme }) => ({
  marginTop: "25px",
  lineHeight: "1.5",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.4rem",
  },
}));
