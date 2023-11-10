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
  buildExpressionFromMap,
  getMoreIndexList,
  getAllIndexList,
} from "../../../utils/functions";
import { getSearchRequestURL } from "../../../utils/record";
const CollapseSearchFilter = (props) => {
  let { show, data, description, database } = props;
  const [expression, setExpression] = useState({});
  const updateInput = (field, value) => {
    expression[field] = value;
    setExpression(expression);
  };
  const submitForm = () => {
    let exp = buildExpressionFromMap(expression);
    window.location = getSearchRequestURL(database, exp);
  };

  return (
    <>
      <Collapse in={show} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>
            <Grid container spacing={2}>
              {data.map((e, i) => (
                <Grid item xs={12} sm={6} xl={3} key={`Autocomplete-${i}`}>
                  {e.dropdown ? (
                    <AutocompleteDropdown
                      updateInput={updateInput}
                      database={database}
                      defaultList={e.defaultList}
                      field={e.field}
                      label={e.title}
                    />
                  ) : (
                    <InputField
                      updateInput={updateInput}
                      database={database}
                      field={e.field}
                      label={e.title}
                    />
                  )}
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

const InputField = (props) => {
  const { field, label, database, updateInput } = props;
  return (
    <TextField
      style={{ width: "100%" }}
      onChange={(e) => updateInput(field, e.target.value)}
      variant="outlined"
      name={field}
      label={label}
    />
  );
};

const AutocompleteDropdown = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [curNext, setCurNext] = useState("");
  const { field, label, database, updateInput, defaultList } = props;
  const [items, setItems] = useState(defaultList || []);

  const [value, setValue] = useState("");
  useEffect(() => {
    if (!defaultList) {
      getAllIndexList(field, database).then(
        (res) => {
          setItems(res);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
  }, []);

  return (
    <Autocomplete
      disablePortal
      freeSolo
      loading={!isLoaded}
      autoHighlight
      onChange={(e, v) => {
        updateInput(field, v);
        setValue(v);
      }}
      options={items}
      renderInput={(params) => (
        <TextField name={field} {...params} label={label} />
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
