import * as React from "react";
import Typography from "@mui/joy/Typography";
import { Item } from "./SummaryLayout.style";
import SummaryPagination from "./SummaryPagination";
import X2JS from "../../libs/xml2json.min.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

import { deepSearch } from "../../utils/functions";
export default function SummaryRecordsView(props) {
  const { data } = props;
  let xml_record = document.querySelector("#xml_record");
  let x2js = new X2JS();
  let xml = x2js.xml_str2json(
    new XMLSerializer().serializeToString(xml_record)
  );

  return (
    <>
      {xml.xml.xml_record.map((record) => {
        let database = record.database_name;
        let recordData = record.record;
        let displayFields = data.find((e) => e.database === database).fields;

        return (
          <Item sx={{ padding: "16px" }}>
            <Card sx={{ display: "flex" }}>
              <Box>
                {" "}
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/static/images/cards/live-from-space.jpg"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  {displayFields.map((field) => {
                    let fieldValue = deepSearch(
                      recordData,
                      field.name.toLowerCase()
                    );
                    let fieldLabel = field.label;
                    console.log(fieldValue, field.name.toLowerCase());
                    if (field.main) {
                      return (
                        <Typography
                          component="div"
                          variant="h3"
                          sx={{
                            color: "text.primary",
                            fontWeight: "bold",
                            fontSize: "1.3rem",
                            
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                              color: "text.secondary",
                            },
                          }}
                        >
                          {fieldValue.join(",")}
                        </Typography>
                      );
                    }

                    return (
                      fieldValue.length > 0 && (
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <strong>{fieldLabel}</strong>: {fieldValue.join(",")}
                        </Typography>
                      )
                    );
                  })}
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                ></Box>
              </Box>
            </Card>
          </Item>
        );
      })}{" "}
      <SummaryPagination />
    </>
  );
}
