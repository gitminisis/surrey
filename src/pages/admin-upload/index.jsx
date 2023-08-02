import React, { useState } from "react";
import PropTypes from "prop-types";
import MainCard from "../../components/MainCard";
import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Tabs,
  Tab,
} from "@mui/material/";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScreenRecording from "./ScreenRecording";
import CameraRecording from "./CameraRecording";
import FileUpload from "./FileUpload";
const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const Upload = (props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = (event, item) => {
    console.log(item);
    setOpen(false);
  };

  return (
    <MainCard title="">
      <Box
        sx={{ minHeight: "100vh", transform: "translateZ(0px)", flexGrow: 1 }}
      >
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="main tabs example"
        >
          <Tab value="1" label="Item One" />
          <Tab value="2" label="Item Two" />
          <Tab value="3" label="Item Three" />
        </Tabs>
        <FileUpload hidden={value !== "1"} />
        {/* <ScreenRecording hidden={value !== "2"} /> */}
        {/* <CameraRecording hidden={value !== "3"} /> */}
        {/* <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={(_) => setOpen(false)}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={(e) => handleClose(e, action)}
            />
          ))}
        </SpeedDial> */}
      </Box>
    </MainCard>
  );
};

Upload.propTypes = {};

export default Upload;
