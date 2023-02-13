import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, ButtonBase, Container } from "@mui/material";
import { Item } from "./DetailLayout.style";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
const DetailSection = (props) => {
  const { data } = props;
  const xml = getXMLRecord();
  let record = xml.xml.xml_record;
  let database = record.database_name;
  let recordData = record.record;
  let displayFields = data.displayFields.find(
    (e) => e.database === database
  ).fields;
  return (
    <>
      <div>Detail Section</div>

      <Item sx={{ padding: "10px 16px", width: "100vw" }} elevation={6}>
        <Container disableGutters maxWidth={"lg"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "row",
            }}
          >
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ textAlign: "left" }}>
                  {displayFields.map((field) => {
                    let fieldValue = deepSearch(
                      recordData,
                      field.name.toLowerCase()
                    );
                    if (fieldValue.length === 0) {
                      return;
                    }
                    let fieldLabel = field.label;
                    if (field.component !== undefined) {
                      return Component(field);
                    }
                    if (field.main) {
                      return (
                        <GeneralDetailTextField
                          main={field.main}
                          onClick={(_) => (window.location = recordLink)}
                        >
                          {fieldValue.join(",")}
                        </GeneralDetailTextField>
                      );
                    }
                    return (
                      <GeneralDetailTextField>
                        <strong>{fieldLabel}</strong>: {fieldValue.join(",")}
                      </GeneralDetailTextField>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Item>
    </>
  );
};

DetailSection.propTypes = {};

export default DetailSection;
