import React from "react";
import PropTypes from "prop-types";
import { Drawer } from "@mui/material";
const DesktopFilterWrapper = (props) => {
  const { openDesktop, children } = props;
  return (
    <Drawer
      sx={{
        width: "100%",
        display: { xs: "none", lg: "flex" },
        overflowY:'scroll'
      }}
      variant="persistent"
      anchor="left"
      open={openDesktop}
    >
      {children}
    </Drawer>
  );
};

DesktopFilterWrapper.propTypes = {};

export default DesktopFilterWrapper;
