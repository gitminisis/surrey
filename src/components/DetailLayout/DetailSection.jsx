import PropTypes from "prop-types";
import { Box, Grid,  Typography, Container } from "@mui/material";
import { Item } from "./DetailLayout.style";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { deepSearch, getXMLRecord } from "../../utils/functions";
import GeneralDetailTextField from "./GeneralDetailTextField";
import RecordTextField from "../RecordTextField";
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
      <Item sx={{ width: "100vw", py: 8 }} elevation={6}>
        <Container disableGutters maxWidth={"lg"}>
          <Typography
            variant="h4"
            component={"h3"}
            fontWeight="lg"
            sx={{ mb: 4 }}
          >
            Record Details
          </Typography>
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
              {sections.map((e,i) => (
                <Tab key={i} sx={{ px: 8, py: 2 }}>
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
                <TabPanel key={i} value={i} sx={{ p: 1, minHeight: 200 }}>
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
                          <RecordTextField
                            displayFields={displayFields}
                            recordData={recordData}
                            displayComponent={GeneralDetailTextField}
                          />
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
