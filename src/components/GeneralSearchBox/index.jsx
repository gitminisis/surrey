import React from "react";
import PropTypes from "prop-types";
import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import SearchIcon from "@mui/icons-material/Search";
import {
  Breadcrumbs,
  Link,
  Paper,
  InputBase,
  Button,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Divider from "@mui/joy/Divider";
import { backToSummary } from "../../utils/record";
import { deepSearch, isSessionSearch } from "../../utils/functions";
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
}));

const GeneralSearchBox = (props) => {
  const { breadcrumbs, heading, helpText, databaseList, xml, placeholder } =
    props;
  const [index, setIndex] = React.useState(0);
  let database = deepSearch(xml, "database_name")[0];
  let toSummary = backToSummary(xml);
  let session = deepSearch(xml, "session")[0];
  if (isSessionSearch()) {
    session = "/scripts/mwimain.dll";
  }
  return (
    <Item elevation={6} sx={{ padding: "16px" }} className="back-top-anchor">
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" variant="h6" href="/">
            Home
          </Link>
          {breadcrumbs.map((e, i) => {
            if (!toSummary && e === "Summary") {
              return null;
            }
            return (
              <Link
                key={`breadcrumb-link-${i}`}
                variant="h6"
                underline={
                  i === breadcrumbs.length - 1
                    ? "none"
                    : toSummary
                    ? "hover"
                    : "none"
                }
                color={
                  i === breadcrumbs.length - 1 ? "text.primary" : "inherit"
                }
                href={i === 0 && breadcrumbs.length > 1 ? toSummary : "#"}
                aria-current={`${e} page`}
              >
                {e}
              </Link>
            );
          })}
        </Breadcrumbs>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, md: 2 }}
          style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              {heading}
            </Typography>
          </Grid>{" "}
          <Grid item xs={12} md={12}>
            <form
              method="POST"
              action={session + databaseList[index].searchURL}
            >
              <Input
                variant="soft"
                sx={{ px: 0 }}
                placeholder={placeholder}
                name="KEYWORD_CL"
                endDecorator={
                  <>
                    {" "}
                    <Divider orientation="vertical" />
                    <Button disableRipple type="submit">
                      <SearchIcon />
                    </Button>
                  </>
                }
                startDecorator={
                  <React.Fragment>
                    <Select
                      variant="plain"
                      value={index}
                      onChange={(e, value) => {
                        setIndex(Number.parseInt(value));
                      }}
                      sx={{ bgcolor: "transparent" }}
                    >
                      {databaseList.map((e, i) => (
                        <Option value={i} key={`GeneralSearchBoxLink-${i}`}>
                          <strong>{e.database}</strong>
                        </Option>
                      ))}
                    </Select>
                  </React.Fragment>
                }
              />
            </form>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
            <Link href={helpText.link} className="generalSearchBoxLink">
              {helpText.description}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Item>
  );
};

GeneralSearchBox.propTypes = {
  breadcrumbs: PropTypes.array,
  heading: PropTypes.string,
  helpText: PropTypes.object,
};

export default GeneralSearchBox;
