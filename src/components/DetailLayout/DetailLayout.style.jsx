import { styled } from "@mui/material/styles";
import {Paper } from "@mui/material";

export const DetailContainer = styled(Paper)(({ theme }) => ({
  marginTop: "80px",
  padding : "16px",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));
