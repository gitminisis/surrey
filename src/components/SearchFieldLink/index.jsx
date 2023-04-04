import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Typography, Divider, Box, Grid } from "@mui/joy";
import { deepSearch } from "../../utils/functions";
import { getJumpURL } from "../../utils/record";
import Popover from "@mui/material/Popover";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PopoverRecord from "../PopoverRecord";
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
  let { name, label, xml } = props;
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
                target="_blank"
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography>

                <PopoverRecord
                  session={session}
                  database="PEOPLE_VAL"
                  field="FULLNAME"
                  value={v}
                />
              </Popover>
              <Typography
                onClick={handleClick}
                variant="body2"
                sx={{ cursor: "pointer", color: "primary.main" }}
              >
                <HelpOutlineIcon />
              </Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
SearchFieldLink.propTypes = {};

export default SearchFieldLink;
