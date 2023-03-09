import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, ButtonBase, Container } from "@mui/material";
import { Item } from "./DetailLayout.style";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
import useMediaQuery from "@mui/material/useMediaQuery";
const DetailSection = (props) => {
  const { data } = props;
  const xml = getXMLRecord();
  let record = xml.xml.xml_record;
  let database = record.database_name;
  let recordData = record.record;
  const sm = useMediaQuery("(max-width:600px)");

  let sections = data.displayFields.find(
    (e) => e.database === database
  ).section;
  return (
    <>
      <div>Record Details</div>

      <Item sx={{ padding: "10px 16px", width: "100vw" }} elevation={6}>
        <Container disableGutters maxWidth={"lg"}>
          <Tabs
            scrollButtons="auto"
            aria-label="Record Details"
            orientation={sm ? "horizontal" : "vertical"}
            sx={(theme) => ({ backgroundColor: "transparent" })}
          >
            <TabList
              scrollButtons="auto"
              variant="plain"
              sx={(theme) => ({
                maxWidth: sm ? "calc(100vw - 64px)" : "100%",
                "--List-padding": "12px",
                "--List-radius": "0px",
                "--ListItem-minHeight": "48px",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                overflow: sm ? "scroll" : "inherit",
                [`& .${tabClasses.root}`]: {
                  boxShadow: "none",
                  fontWeight: "md",
                  [`&.${tabClasses.selected}`]: {
                    borderBottom: !sm
                      ? "none"
                      : `3px solid ${theme.palette.primary.main}`,
                    borderRight: sm
                      ? "none"
                      : `3px solid ${theme.palette.primary.main}`,
                    backgroundColor: "primary.light",
                  },
                },
              })}
            >
              {sections.map((e) => (
                <Tab sx={{ px: 8, py: 2 }}>
                  <Typography variant="h6" component="h3">
                    {" "}
                    <strong>{e.title}</strong>
                  </Typography>
                </Tab>
              ))}
            </TabList>
            {sections.map((e, i) => {
              let displayFields = e.fields;
              return (
                <TabPanel value={i} sx={{ p: 2, minHeight: 200 }}>
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
                            return (
                              <GeneralDetailTextField
                                main={field.main}
                                label={fieldLabel}
                                value={fieldValue}
                              />
                            );
                          })}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </TabPanel>
              );
            })}
          </Tabs>
        </Container>
      </Item>
    </>
  );
};

DetailSection.propTypes = {};

export default DetailSection;
