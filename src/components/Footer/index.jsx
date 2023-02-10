import React from "react";
import {
  Typography,
  Link,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { PropTypes } from "prop-types";
export const Copyright = (props) => {
  const { copyrightURL, siteName } = props;
  return (
    <Typography variant="body2" style={{ textAlign: "center", color: "white" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {siteName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = (props) => {
  const { siteName, logo, logo2, baseURL, links } = props;
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        height: "auto",
        minHeight: "300px",
        color: "white",
        paddingTop: "80px",

        paddingBottom: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ padding: "2rem", display: "flex", alignItems: "center" }}
          >
            <img
              src={logo}
              alt={siteName || "Logo"}
              style={{ width: "100px", marginRight: "10px" }}
            />

            <span> {siteName}</span>
          </Grid>

          <Grid item xs={12} md={5} container>
            {links.map((link, index) => (
              <Grid
                key={link.href}
                item
                xs={3}
                sx={{ marginBottom: "20px", textAlign: "left" }}
              >
                <Link
                  style={{ fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
                  underline="hover"
                  href={link.url}
                  color="inherit"
                  index={`FooterLink-${index}`}
                >
                  {link.title}
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <img src={"https://i.imgur.com/KikZE4d.png"} alt="Surrey.ca" />

            <p>Software powered by:</p>
            <img
              src={"https://www.minisisinc.com/img/logo.png"}
              width="120px"
              alt="MINISIS inc."
            />
          </Grid>
        </Grid>
        <Divider flexItem sx={{ marginTop: "40px", marginBottom: "20px" }} />

        <Copyright copyrightURL={baseURL} siteName={siteName} />
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  logo: PropTypes.string,
  siteName: PropTypes.string,
  baseURL: PropTypes.string,
  logo2: PropTypes.string,
};

Copyright.propTypes = {};
export default Footer;
