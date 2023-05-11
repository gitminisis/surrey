import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Typography, Divider, Box, Grid } from "@mui/joy";
import { deepSearch } from "../../utils/functions";
import { getJumpURL } from "../../utils/record";
import Popper from '@mui/material/Popper';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PopoverRecord from "../PopoverRecord";
import { Tooltip } from "@mui/material";
import Fade from '@mui/material/Fade';
const SearchFieldLink = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  let { name, label, xml, moreInfo = false } = props;
  let record = xml.xml.xml_record.record;
  let session = deepSearch(xml, "session")[0];
  let database = deepSearch(xml, "database_name")[0];

  let value = deepSearch(record, name.toLowerCase());
  let flattenArrayValue = _.flattenDeep(value);
  console.log(open, canBeOpen)
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

              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={800}>
                    <Box sx={{ p: 4,  bgcolor: 'background.paper', borderColor:'primary.main', border:'1px solid ' }} elevation={6}>
                      <PopoverRecord
                        session={session}
                        database="PEOPLE_VAL"
                        field="FULLNAME"
                        value={v}
                      />
                   
                    </Box>
                  </Fade>
                )}

              </Popper>
              {moreInfo && (
                <Tooltip title="Click to view more information about this">
                  <Typography
                    aria-describedby={id}
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
