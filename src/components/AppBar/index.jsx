import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Typography,
  Drawer,
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
import { Fade as Hamburger } from "hamburger-react";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";
const AppBar = (props) => {
  const { links, logo, siteName, baseURL, active } = props;
  const [isScroll, setIsScroll] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [open, setOpen] = useState(false);
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
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{ bgcolor: "primary.main", width: 240 }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 4,
          }}
        >
          {links.map((link, i) => (
            <>
              <Link
                key={link.title}
                href={link.url}
                variant={"h5"}
                sx={{
                  color: "white",
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                  fontWeight:
                    active && active === link.title ? "bold" : "inherit",
                }}
              >
                {link.title}
                {active && active === link.title ? (
                  <KeyboardArrowLeftOutlined />
                ) : null}
              </Link>
              <Divider style={{ backgroundColor: "white" }} />
            </>
          ))}
        </Box>
      </Drawer>
      <AppbarRoot className="header" scroll={isScroll}>
        <Container maxWidth={"true"}>
          <AppbarContainer maxWidth={"xl"}>
            <AppbarLogoBox
              href={baseURL}
              underline="none"
              sx={{ color: "white" }}
              variant={"h5"}
            >
              <div>
                <AppbarLogo
                  component="img"
                  src={logo}
                  alt={`${siteName} logo`}
                  onClick={(_) => (window.location = "https://www.surrey.ca/")}
                ></AppbarLogo>
              </div>
              <strong>{siteName}</strong>
            </AppbarLogoBox>
            <AppbarLinkBox
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <Hamburger
                toggled={open}
                toggle={setOpen}
                size={30}
                label="Menu Icon"
              />
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
