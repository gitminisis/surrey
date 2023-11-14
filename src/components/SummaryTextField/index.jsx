import { Typography } from "@mui/material";
const index = (props) => {
  let { main, label, value, maxLength, recordLink } = props;
  let string = value.join(", ");
  if (maxLength && string.length > maxLength) {
    string = string.substring(0, maxLength) + " ...";
  }
  if (main) {
    return (
      <Typography
        onClick={(_) => (window.location = recordLink)}
        {...props}
        component="a"
        variant="h3"
        href={recordLink}
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "1.3rem",
          cursor: "pointer",
          marginBottom: "5px",
          "&:hover": {
            textDecoration: "underline",
            color: "primary.dark",
          },
        }}
      >
        {string}
      </Typography>
    );
  }

  return (
    <Typography variant="subtitle1" color="text.primary" component="div">
      <strong>{label}</strong>: {string}
    </Typography>
  );
};

index.propTypes = {};

export default index;
