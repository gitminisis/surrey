import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { deepSearch, getXMLRecord } from "../../utils/functions";

import SummaryTextField from "../SummaryTextField";
import Component from "../Component";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import IconButton from "@mui/joy/IconButton";
import PropTypes from "prop-types";
import LinkIcon from "@mui/icons-material/Link";
const SummaryMasonryView = (props) => {
  const { data, thumbnailData } = props;

  const xml = getXMLRecord();
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={4}
        style={{ margin: "0 auto" }}
      >
        {xml.xml.xml_record.map((record) => {
          let database = record.database_name;
          let recordLink = record.record_link.replace(/\n/g, "");
          let recordData = record.record;
          let displayFields = data.find((e) => e.database === database).fields;

          let thumbnailField = thumbnailData.find(
            (e) => e.database === database
          ).fields;
          console.log(thumbnailField);
          return (
            <Card variant="outlined">
              <div style={{ width: "90%" }}>
                {displayFields.map((field) => {
                  let fieldValue = deepSearch(
                    recordData,
                    field.name.toLowerCase()
                  );
                  let thumbnailURL = deepSearch(
                    record,
                    thumbnailField.toLowerCase()
                  )[0];
                  console.log(thumbnailURL);

                  if (fieldValue.length === 0 || field.gridDisplay === false) {
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
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Box
                sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              >
                <IconButton
                  aria-label="bookmark"
                  variant="plain"
                  color="neutral"
                  size="sm"
                >
                  <BookmarkAdd />
                </IconButton>
                <IconButton
                  aria-label="copy link"
                  variant="plain"
                  color="neutral"
                  size="sm"
                >
                  <LinkIcon />
                </IconButton>
              </Box>
            </Card>
          );
        })}
      </Masonry>
    </Box>
  );
};

SummaryMasonryView.propTypes = { thumbnailData: PropTypes.object };

export default SummaryMasonryView;
