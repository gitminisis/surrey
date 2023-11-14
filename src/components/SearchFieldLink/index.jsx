import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Typography, Divider, Box, Grid } from "@mui/joy";
import { deepSearch } from "../../utils/functions";
import { getJumpURL } from "../../utils/record";
import Popover  from "@mui/material/Popover";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PopoverRecord from "../PopoverRecord";
import { Tooltip } from "@mui/material";
const SearchFieldLink = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  let { name, label, xml, moreInfo = false } = props;
  let record = xml.xml.xml_record.record;
  let session = deepSearch(xml, "session")[0];
  let database = deepSearch(xml, "database_name")[0];

  let value = deepSearch(record, name.toLowerCase());
  let flattenArrayValue = _.flattenDeep(value);
  return (
    <>
      <Divider style={{ width: "auto" }} />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: 2,
        }}
      >
        <Grid xs={4} sx={{ alignSelf: { xs: "start", md: "center" } }}>
          <Typography
            variant="plain"
            color="primary"
            component="div"
            fontSize="lg"
            level="h6"
            fontWeight={700}
          >
            {label}
          </Typography>
        </Grid>
        <Grid xs sx={{ alignSelf: { xs: "start", md: "center" } }}>
          {flattenArrayValue.map((v, i) => (
            <div key={i} style={{ display: "flex", alignContent: "center" }}>
              <Link
                level="h6"
                underline="always"
                href={getJumpURL(session, database, name, v)}
                sx={{ display: "block" }}
              >
                {v}
              </Link>

              <Popover 
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ p: 4, borderRadius: "20%" }}>
                  <PopoverRecord
                    session={session}
                    database="PEOPLE_VAL"
                    field="FULLNAME"
                    value={v}
                  />
                </Box>
              </Popover>
              {moreInfo && (
                <Tooltip title="Click to view more information about this">
                  <Typography
                    onClick={handleClick}
                    variant="body2"
                    sx={{ cursor: "pointer", color: "black", px: 1 }}
                  >
                    <HelpOutlineIcon />
                  </Typography>
                </Tooltip>
              )}
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
SearchFieldLink.propTypes = {};

export default SearchFieldLink;
