import  { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import TopicIcon from "@mui/icons-material/Topic";
const DescriptionBox = (props) => {
  let { heading, description, url, urlTitle, icon, iconLabel } = props;
  const [hover, setHover] = useState(false);
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card
        raised
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        sx={{
          maxWidth: "400px",
          height: "260px",
          cursor: "pointer",
          margin: "0 auto",
          transition: "all 0.3s",
          backgroundColor: hover ? "primary.light" : "white",
          textAlign: "left",
        }}
      >
        <CardContent>
          <div style={{ marginBottom: "20px" }}>
            {" "}
            {icon && (
              <Chip
                avatar={
                  icon ? <Avatar alt={iconLabel} src={icon} /> : <TopicIcon />
                }
                label={iconLabel}
                variant="outlined"
              />
            )}
          </div>
          <Typography sx={{ mb: 1.5 }} variant="h4" color="text.priamry">
            {heading}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <CardActions>
          {url && (
            <Button size="small" onClick={(_) => (window.location = { url })}>
              {urlTitle}
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

DescriptionBox.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
  icon: PropTypes.string,
  iconLabel: PropTypes.string,
};
export default DescriptionBox;
