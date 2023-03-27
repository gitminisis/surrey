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
  Button,
} from "@mui/material";
import {
  getIndexList,
  xmlStrToJson,
  deepSearch,
  buildExpressionFromMap,
} from "../../../utils/functions";
import { sendSearchRequest } from "../../../utils/record";
const CollapseSearchFilter = (props) => {
  let { show, data, description, database } = props;
  const [expression, setExpression] = useState({});
  const updateInput = (field, value) => {
    expression[field] = value;
    setExpression(expression);
  };
  const submitForm = () => {
    let exp = buildExpressionFromMap(expression);
    window.location = sendSearchRequest(database, exp);
  };

  return (
    <>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Grid container spacing={2}>
              {data.map((e, i) => (
                <Grid item xs={12} sm={6} xl={3} key={`Autocomplete-${i}`}>
                  <AutocompleteDropdown
                    updateInput={updateInput}
                    database={database}
                    field={e.field}
                    label={e.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>

        <Divider sx={{ marginBottom: "2rem" }}>
          <Chip
            sx={{ fontSize: "1rem", px: 3, py: 2 }}
            onClick={submitForm}
            color="primary"
            label={"Submit your search"}
          />
        </Divider>
      </Collapse>
    </>
  );
};

const AutocompleteDropdown = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { field, label, database, updateInput } = props;
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
      onChange={(e, v) => updateInput(field, v)}
      options={items}
      renderInput={(params) => (
        <TextField
          onChange={(e) => updateInput(field, e.target.value)}
          name={field}
          {...params}
          label={label}
        />
      )}
    />
  );
};
CollapseSearchFilter.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
  description: PropTypes.string,
};

export default CollapseSearchFilter;
