import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  CardActionArea,
  CardMedia,
  Card,
  CardActions,
  Typography,
  Button,
  CardContent,
} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
const PhotoCoverCard = (props) => {
  const [hover, setHover] = useState(false);
  let { description, title, thumbnail } = {
    description: "123",
    title: "123",
    thumbnail: "https://picsum.photos/900",
  };
  return (
    <Grid item xs={12} md={6}>
      <Card style={{ cursor: "pointer", paddingBottom: "20px" }} elevation={3}>
        <CardMedia
          sx={{ height: 400 }}
          image="https://picsum.photos/1200"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Feature collections
          </Typography>
          <Typography variant="body2" color="text.primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ margin: "0 auto" }}
            className="button"
            variant="contained"
            size="large"
          >
            Browse
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

PhotoCoverCard.propTypes = {};

export default PhotoCoverCard;
