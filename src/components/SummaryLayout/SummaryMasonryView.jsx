import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Item } from "./SummaryLayout.style";
import SummaryTextField from "../SummaryTextField";
import Component from "../Component";

const SummaryMasonryView = (props) => {
  const { data } = props;
  const xml = getXMLRecord();
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry columns={3} spacing={4}>
        {xml.xml.xml_record.map((record) => {
          let database = record.database_name;
          let recordLink = record.record_link.replace(/\n/g, "");
          let recordData = record.record;
          let displayFields = data.find((e) => e.database === database).fields;
          return (
            <Card
              sx={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  {displayFields.map((field) => {
                    let fieldValue = deepSearch(
                      recordData,
                      field.name.toLowerCase()
                    );
                    if (
                      fieldValue.length === 0 ||
                      field.gridDisplay === false
                    ) {
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
              <Box>
                <CardMedia
                  onClick={(_) => (window.location = recordLink)}
                  component="img"
                  sx={{
                    maxWidth: "80%",
                    cursor: "pointer",
                    margin: "0 auto",
                  }}
                  image={`https://picsum.photos/${
                    Math.floor(Math.random() * 500) + 400
                  }/${Math.floor(Math.random() * 500) + 400}`}
                  alt=""
                />
              </Box>
            </Card>
          );
        })}
      </Masonry>
    </Box>
  );
};

SummaryMasonryView.propTypes = {};

export default SummaryMasonryView;
