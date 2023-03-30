import React from "react";
import {
  Typography,
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

export const DescriptionCardItem = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  transition: "background .2s ease",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: "24px",
  },
}));


