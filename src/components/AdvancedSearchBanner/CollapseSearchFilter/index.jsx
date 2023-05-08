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
  const [items, setItems] = useState([]);
  const [curNext, setCurNext] = useState("");
  const { field, label, database, updateInput } = props;
  const [value, setValue] = useState("");
  useEffect(() => {
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
  }, []);

  const loadMoreOptions = async (url) => {
    setIsLoaded(true);
    await getMoreIndexList(url).then((res) => {
      console.log(res);
      let { data } = res;
      let jsonData = xmlStrToJson(data);
      let options = deepSearch(jsonData, "option")[0];
      if (!options) {
        return;
      }

      let nextPage = deepSearch(jsonData, "next_page")[0];
      if (nextPage !== "#") {
        options.push("Show more options");
        setCurNext(nextPage);
      }
      let curOptions = items.filter((e, i) => i !== items.length - 1);
      curOptions = [...curOptions, ...options];
      setItems(curOptions);
    });
  };
  return (
    <Autocomplete
      disablePortal
      freeSolo
      autoHighlight
      // getOptionDisabled={(options) => {
      //   return options === "Show more options";
      // }}
      onChange={(e, v) => {
        e.stopPropagation();
        if (v === "Show more options") {
          console.log("load more..");
          loadMoreOptions(curNext);
          return;
        } else {
          updateInput(field, v);
          setValue(v);
          return;
        }
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
