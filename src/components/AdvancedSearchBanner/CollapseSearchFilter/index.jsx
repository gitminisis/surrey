import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  CardContent,
  Autocomplete,
  TextField,
  Container,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
import {
  getIndexList,
  xmlStrToJson,
  deepSearch,
} from "../../../utils/functions";
const CollapseSearchFilter = (props) => {
  let { show, data, description, database } = props;
  console.log(data);
  return (
    <>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Grid container spacing={2}>
              {data.map((e, i) => (
                <Grid item xs={12} sm={6} xl={3}>
                  <AutocompleteDropdown
                    database={database}
                    field={e.field}
                    label={e.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
        <Divider>
          <Chip label={description} />
        </Divider>
      </Collapse>
    </>
  );
};

const AutocompleteDropdown = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { field, label, database } = props;
  console.log(field, label);
  useEffect(() => {
    getIndexList(field, database).then(
      (result) => {
        let { data } = result;
        let jsonData = xmlStrToJson(data);
        setIsLoaded(true);

        let options = deepSearch(jsonData, "option")[0];
        if (!options) {
          return;
        }
        setItems(options);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  return (
    <Autocomplete
      disablePortal
      options={items}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
CollapseSearchFilter.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
  description: PropTypes.string,
};

export default CollapseSearchFilter;
