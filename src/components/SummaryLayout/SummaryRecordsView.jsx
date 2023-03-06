import * as React from "react";
import Typography from "@mui/joy/Typography";
import { Item } from "./SummaryLayout.style";
import SummaryPagination from "./SummaryPagination";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import SummaryTextField from "../SummaryTextField";
import Component from "../Component";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
const SummaryRecordsView = (props) => {
  const { data } = props;
  const xml = getXMLRecord();
  return (
    <>
      {xml.xml.xml_record.map((record) => {
        let database = record.database_name;
        let recordLink = record.record_link.replace(/\n/g, "");
        let recordData = record.record;
        console.log(database);
        let displayFields = data.find((e) => e.database === database).fields;

        return (
          <Grid item xs={12}>
            <Item sx={{ padding: "16px", borderRadius: "0" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                variant="outlined"
                elevation={8}
              >
                <Box>
                  <CardMedia
                    onClick={(_) => (window.location = recordLink)}
                    component="img"
                    sx={{
                      margin: "0 0",
                      width: "25vw",
                      maxWidth: "200px",
                      cursor: "pointer",
                    }}
                    image="https://picsum.photos/500"
                    alt=""
                  />
                  {/* <ImageNotSupportedOutlinedIcon /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    minHeight: "160",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
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
                          <SummaryTextField
                            main={field.main}
                            onClick={(_) => (window.location = recordLink)}
                          >
                            {fieldValue.join(",")}
                          </SummaryTextField>
                        );
                      }

                      return (
                        <SummaryTextField>
                          <strong>{fieldLabel}</strong>: {fieldValue.join(",")}
                        </SummaryTextField>
                      );
                    })}
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
              </Card>
            </Item>
          </Grid>
        );
      })}
      <SummaryPagination />
    </>
  );
};
SummaryRecordsView.propTypes = {
  data: PropTypes.array,
  isGrid: PropTypes.bool,
};

export default SummaryRecordsView;
