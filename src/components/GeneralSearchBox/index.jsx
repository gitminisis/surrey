import React from "react";
import PropTypes from "prop-types";
import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import SearchIcon from "@mui/icons-material/Search";
import {
  Breadcrumbs,
  Link,
  Paper,
  InputBase,
  Button,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));

const GeneralSearchBox = (props) => {
  return (
    <Item elevation={6} sx={{ padding: "16px" }}>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>

          <Link
            underline="hover"
            color="text.primary"
            href="/summary"
            aria-current="page"
          >
            Summary
          </Link>
        </Breadcrumbs>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, md: 2 }}
          style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h3">Search the collections</Typography>
          </Grid>{" "}
          <Grid item xs={12} md={12}>
            {" "}
            <Input
              variant="soft"
              placeholder="Search…"
              startDecorator={<SearchIcon />}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <a variant="a" href="/faq.html" className="generalSearchBoxLink">
              Didn't find what you're looking for? Check our FAQ page for search
              tips
            </a>
          </Grid>
        </Grid>
      </div>
    </Item>
  );
};

GeneralSearchBox.propTypes = {};

export default GeneralSearchBox;
