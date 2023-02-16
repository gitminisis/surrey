import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, CardActionArea, CardMedia } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
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
    <Grid xs={12} md={6}>
      <Card
        sx={{ width: "100%", height: "500px", borderRadius: "0" }}
        style={{ cursor: "pointer" }}
      >
        <CardCover
          onMouseLeave={(_) => setHover(false)}
          onMouseEnter={(_) => setHover(true)}
        >
          <img
            style={{
              "&:hover": {
                transform: "scale(1.02)",
                objectFit: "cover",
              },
            }}
            src={thumbnail}
            srcSet={thumbnail}
            loading="lazy"
            alt=""
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

PhotoCoverCard.propTypes = {};

export default PhotoCoverCard;
