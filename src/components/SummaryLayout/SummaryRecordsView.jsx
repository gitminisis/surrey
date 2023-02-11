import * as React from "react";
import Typography from "@mui/joy/Typography";
import { Item } from "./SummaryLayout.style";
import SummaryPagination from "./SummaryPagination";
import X2JS from "../../libs/xml2json.min.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import { deepSearch } from "../../utils/functions";
import SummaryTextField from "../SummaryTextField";
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
          <Item sx={{ padding: "16px", borderRadius: "0" }}>
            <Card sx={{ display: "flex" }} variant="outlined" elevation={8}>
              <Box>
                {" "}
                <CardMedia
                  component="img"
                  sx={{ width: "25vw", maxWidth: "200px", cursor: "pointer" }}
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
                        <SummaryTextField main={true}>
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
        );
      })}{" "}
      <SummaryPagination />
    </>
  );
}
