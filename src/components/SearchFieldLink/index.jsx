import React from "react";
import PropTypes from "prop-types";
import { Link, Typography, Divider, Box, Grid } from "@mui/joy";
import { deepSearch } from "../../utils/functions";
import { getJumpURL } from "../../utils/record";

const SearchFieldLink = (props) => {
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
          {flattenArrayValue.map((v) => (
            <Link
              level="h6"
              underline="always"
              target="_blank"
              href={getJumpURL(session, database, name, v)}
              sx={{ display: "block" }}
            >
              {v}
            </Link>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
SearchFieldLink.propTypes = {};

export default SearchFieldLink;
