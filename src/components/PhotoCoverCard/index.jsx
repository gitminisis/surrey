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
      <Card sx={{ height: "600px" }} style={{ cursor: "pointer" }}>
        <CardMedia
          sx={{ height: 500 }}
          image="https://picsum.photos/600"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

PhotoCoverCard.propTypes = {};

export default PhotoCoverCard;
