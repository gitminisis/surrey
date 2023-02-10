import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Paper, InputBase, Button, Typography, Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ToggleSearchFilter = (props) => {
  let { data, description } = props;
  const initialState = data.map((e, i) => {
    return {
      key: i,
      active: false,
      ...e,
    };
  });
  const [chipData, setChipData] = useState(initialState);

  const handleClick = (key) => {
    let data = chipData.map((e, i) => {
      if (i === key) {
        e.active = !e.active;
      }
      return e;
    });

    setChipData(data);
  };

  const toggleIcon = (key, active) => {};

  return (
    <>
      {" "}
      <Typography
        variant="body2"
        style={{
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "1rem",
          color: "white",
        }}
      >
        {description}
      </Typography>
      <Paper
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;
          return (
            <ListItem key={data.key}>
              <Chip
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "white",
                  border: "2px solid white",
                }}
                color="primary"
                variant={data.active ? "filled" : "outlined"}
                label={data.label}
                onClick={(_) => handleClick(data.key)}
                deleteIcon={
                  data.active ? (
                    <ClearIcon />
                  ) : (
                    <AddIcon style={{ color: "white" }} />
                  )
                }
                onDelete={(_) => toggleIcon(data.key, data.active)}
              />
            </ListItem>
          );
        })}
      </Paper>
    </>
  );
};

ToggleSearchFilter.propTypes = {
  data: PropTypes.object,
  description: PropTypes.string,
};

export default ToggleSearchFilter;
