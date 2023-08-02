import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";
import {
  TagCardContainer,
  TagCardMedia,
  SubDescription,
} from "./TagCard.style";

const TagCard = (props) => {
  let { thumbnail, title, tag, description } = props;
  return (
    <Grid item sm={6} md={6}>
      <TagCardContainer>
        <TagCardMedia
          component="img"
          sx={{ width: "50%" }}
          md={{ width: 100 }}
          image={thumbnail}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flex: "0 1 auto", alignItems: "center" }}>
            <Chip color="primary" label={tag} sx={{ fontSize: "1rem" }} />
            <SubDescription as="p">{title}</SubDescription>
            <Typography
              sx={{
                opacity: "0.75",
                marginTop: "10px",
                textAlign: "left",
              }}
              as="p"
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </TagCardContainer>
    </Grid>
  );
};

TagCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
};
export default TagCard;
