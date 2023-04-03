import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  Link,
} from "@mui/material";

import PropTypes from "prop-types";
import {
  AppbarContainer,
  AppbarLink,
  AppbarLogo,
  AppbarLogoBox,
  AppbarRoot,
  AppbarLinkBox,
} from "./AppBar.style";

const AppBar = (props) => {
  const { links, logo, siteName, baseURL, active } = props;
  const [isScroll, setIsScroll] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [open,setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;

      setIsScroll(scrolled ? 1 : 0);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppbarRoot className="header" scroll={isScroll}>
        <Container maxWidth={"true"}>
          <AppbarContainer maxWidth={"xl"}>
            <AppbarLogoBox
              href={baseURL}
              underline="none"
              sx={{ color: "white" }}
              variant={"h5"}
            >
              <AppbarLogo
                component="img"
                src={logo}
                alt={`${siteName} logo`}
              ></AppbarLogo>

              <span> {siteName}</span>
            </AppbarLogoBox>
            <AppbarLinkBox sx={{ display: { xs: "flex", md: "none" } , position:'relative'}}>
              {/* <div id="menu-icon" className={open ?'openIcon':""} onClick={_=>setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
              </div> */}
            </AppbarLinkBox>
            <AppbarLinkBox
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {links.map((link, i) => (
                <AppbarLink
                  className={
                    active && active === link.title ? "active-link" : ""
                  }
                  // onClick={(_) => (window.location = link.url)}
                  key={link.title}
                  href={link.url}
                  variant={"h5"}
                >
                  <Typography variant="a">{link.title}</Typography>
                </AppbarLink>
              ))}
            </AppbarLinkBox>

            <Box
              sx={{ display: { xs: "flex", md: "none" } }}
              style={{ alignItems: "center" }}
            >
              <div
                id="nav-icon4"
                className={isClicked ? "open" : ""}
                onClick={(_) => setIsClicked(!isClicked)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Box>
          </AppbarContainer>
        </Container>
      </AppbarRoot>
    </>
  );
};

AppBar.propTypes = {
  links: PropTypes.array,
  logo: PropTypes.string,
  siteName: PropTypes.string,
  baseURL: PropTypes.string,
  active: PropTypes.string,
};

export default AppBar;
