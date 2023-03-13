import React from "react";
import PropTypes from "prop-types";
import { Item } from "./DetailLayout.style";
import { Box, Typography, Grid, ButtonBase, Container } from "@mui/material";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
import RecordTextField from "../RecordTextField";
const GeneralSecion = (props) => {
  const { data } = props;
  const xml = getXMLRecord();
  let record = xml.xml.xml_record;
  let database = record.database_name;
  let recordData = record.record;
  let displayFields = data.displayFields.find(
    (e) => e.database === database
  ).fields;
  return (
    <Item sx={{ padding: "10px 16px" }} elevation={6}>
      <Container disableGutters maxWidth={"lg"} style={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
          }}
        >
          <Grid item xs={12} sm container spacing={2} sx={{ pt: 4 }}>
            <Grid item sx={{ margin: "0 auto" }}>
              <ButtonBase sx={{ width: 300, height: 300 }}>
                <img
                  alt="complex"
                  src="https://picsum.photos/900"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              <Grid
                item
                xs
                sx={{
                  textAlign: "left",
                  maxWidth: "700px",
                  margin: "0 auto",
                  minWidth: "300px",
                }}
              >
                <RecordTextField
                  displayFields={displayFields}
                  recordData={recordData}
                  displayComponent={GeneralDetailTextField}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Item>
  );
};

GeneralSecion.propTypes = {};

export default GeneralSecion;
