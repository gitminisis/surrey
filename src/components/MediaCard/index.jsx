import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
const MediaCard = (props) => {
  const [hover, setHover] = useState(false);
  let { description, title, thumbnail } = props;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{ cursor: "pointer", height: 280, width: 280 }}
        onMouseEnter={(_) => setHover(true)}
        onMouseLeave={(_) => setHover(false)}
      >
        <CardCover>
          <img
            src={thumbnail}
            srcSet={thumbnail}
            loading="lazy"
            alt=""
            // style={{
            //   objectFit: "cover",
            //   transform: hover ? "scale(1.2)" : "scale(1.0)",
            //   transition: "transform 300ms ease",
            // }}
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          {title && (
            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
MediaCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
};
export default MediaCard;
