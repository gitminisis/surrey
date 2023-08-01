import PropTypes from "prop-types";
import { Typography, Divider, Box, Grid, Link } from "@mui/joy";
import { deepSearch,convertFilePathToURL } from "../../utils/functions";
const index = (props) => {
  let {name, label, xml} = props;
  let record = xml.xml.xml_record.record;
  let fieldValue =
   deepSearch(record, name.toLowerCase());
   let flattenArrayValue = _.flattenDeep(fieldValue).map((e) =>
   e.replace(/\n/g, " ")
 );
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
          {flattenArrayValue.map((v, i) =>
             (
              <Link
                key={i}
                level="h6"
                component="a"
                sx={{ display: "block" }}
                href={convertFilePathToURL(v)}
                target="_blank"
                underline="hover"
              >
        
                {/* {convertFilePathToURL(v)} */}
        View textual document
              </Link>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

index.propTypes = {
};

export default index;
