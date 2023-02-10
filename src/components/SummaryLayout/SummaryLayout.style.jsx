import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/material";
import { ExpandLess } from "@mui/icons-material";

export const SummaryContainer = styled(Paper)(({ theme }) => ({
  marginTop: "80px",
  marginBottom: "50px",
  padding : "16px",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));
