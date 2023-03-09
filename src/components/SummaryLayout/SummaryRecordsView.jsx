import * as React from "react";
import Typography from "@mui/joy/Typography";
import { Item } from "./SummaryLayout.style";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import { getFirstThumbnail } from "../../utils/record";
import SummaryTextField from "../SummaryTextField";
import Component from "../Component";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
const SummaryRecordsView = (props) => {
  const { data, thumbnailData } = props;
  const xml = getXMLRecord();
  return (
    <>
      {xml.xml.xml_record.map((record) => {
        let database = record.database_name;
        let recordLink = record.record_link.replace(/\n/g, "");
        let recordData = record.record;
        let displayFields = data.find((e) => e.database === database).fields;
        let thumbPic = getFirstThumbnail(record, thumbnailData, database);
        return (
          <Grid item xs={12}>
            <Item sx={{ padding: "16px", borderRadius: "0" }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                }}
                variant="outlined"
                elevation={8}
              >
                <Box>
                  {thumbPic && (
                    <CardMedia
                      onClick={(_) => (window.location = recordLink)}
                      component="img"
                      sx={{
                        margin: "0 0",
                        width: "25vw",
                        maxWidth: "200px",
                        cursor: "pointer",
                      }}
                      image={thumbPic}
                      alt=""
                    />
                  )}
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
                            {fieldValue.join(", ")}
                          </SummaryTextField>
                        );
                      }

                      return (
                        <SummaryTextField>
                          <strong>{fieldLabel}</strong>: {fieldValue.join(", ")}
                        </SummaryTextField>
                      );
                    })}
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 1,
                      pb: 1,
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                    }}
                  >
                    <IconButton
                      aria-label="bookmark"
                      variant="plain"
                      color="neutral"
                      size="md"
                    >
                      <BookmarkAdd />
                    </IconButton>
                    <IconButton
                      aria-label="copy link"
                      variant="plain"
                      color="neutral"
                      size="md"
                    >
                      <LinkIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Item>
          </Grid>
        );
      })}
    </>
  );
};
SummaryRecordsView.propTypes = {
  data: PropTypes.array,
  isGrid: PropTypes.bool,
};

export default SummaryRecordsView;
