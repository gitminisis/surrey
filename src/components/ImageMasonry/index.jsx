import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { MasonryBox, MasonryShadow, MasonryAction } from "./ImageMasonry.style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { getRecendAdditions } from "../../utils/record";
import { Skeleton, Grid } from "@mui/material";
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
        src={`${thumbnail}`}
        srcSet={`${thumbnail}`}
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

const LOADING_SKELETON = [
  { width: "25%", height: "200px" },
  { width: "25%", height: "200px" },
  { width: "25%", height: "200px" },
  { width: "25%", height: "200px" },
  { width: "25%", height: "200px" },
  { width: "25%", height: "200px" },
];
const ImageMasonry = ({ data }) => {
  const [tiles, setTiles] = useState(data || []);
  const [loading, setLoading] = useState(true);
  useEffect((_) => {
    getRecendAdditions().then((res) => {
      setLoading(false);
      setTiles(res);
    });
  }, []);
  return (
    <>
      {" "}
      {loading && (
        <Grid container spacing={4} style={{ margin: "0 auto" }}>
          {LOADING_SKELETON.map((e, i) => (
            <Grid
              key={`LoadingSkeleton-${i}`}
              xs={6}
              md={4}
              item
              style={{ margin: "0 auto" }}
            >
              <Skeleton variant="rectangular" width={"100%"} height={140} />
              <Skeleton variant="rectangular" style={{ marginTop: "16px" }} />
              <Skeleton
                variant="rectangular"
                width={"50%"}
                style={{ marginTop: "16px" }}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ width: "100%", minHeight: 500, marginTop: "50px" }}>
        <Masonry
          columns={{ xs: 1, sm: 3, md: 4 }}
          spacing={2}
          sx={{ margin: "0 auto" }}
        >
          {tiles.map((item, index) => (
            <ImageMasonryItem item={item}  key={item.thumbnail + index} />
          ))}
        </Masonry>
      </Box>
    </>
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
