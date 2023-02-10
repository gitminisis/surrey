import React from "react";
import PropTypes from "prop-types";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { MasonryBox, MasonryShadow, MasonryAction } from "./ImageMasonry.style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ImageMasonryItem = (props) => {
  let { thumbnail, title, url, urlTitle } = props.item;
  return (
    <MasonryBox>
      <MasonryShadow onClick={(_) => (window.location = url ? url : "/")}>
        <MasonryAction className="bounce">
          <div>
            <KeyboardDoubleArrowUpIcon />
          </div>

          <div> {urlTitle}</div>
        </MasonryAction>
      </MasonryShadow>
      <img
        src={`${thumbnail}?w=162&auto=format`}
        srcSet={`${thumbnail}?w=162&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </MasonryBox>
  );
};

const ImageMasonry = ({ data }) => {
  return (
    <Box sx={{ width: "100%", minHeight: 500, marginTop: "50px" }}>
      <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={2}>
        {data.map((item, index) => (
          <ImageMasonryItem item={item} key={item.thumbnail + index} />
        ))}
      </Masonry>
    </Box>
  );
};

ImageMasonryItem.propTypes = {
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  urlTitle: PropTypes.string,
};
ImageMasonry.propTypes = {
  data: PropTypes.array,
};

export default ImageMasonry;
