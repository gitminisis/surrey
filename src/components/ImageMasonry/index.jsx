import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { MasonryBox, MasonryShadow, MasonryAction } from "./ImageMasonry.style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { getRecendAdditions, getSearchRequestURL } from "../../utils/record";
import { Skeleton, Grid } from "@mui/material";
import { getCurrentSession } from "../../utils/functions";

const ImageMasonryItem = (props) => {
  let { thumbnail, title, url, urlTitle, database, databaseName, sisn } =
    props.item;
  return (
    <MasonryBox>
      <MasonryShadow
        onClick={(_) => {
          window.location = getSearchRequestURL(
            database,
            `SISN ${sisn}`,
            "WEB_UNION_DETAIL",
            "UNION_VIEW"
            // getCurrentSession()
          );
        }}
      >
        <MasonryAction className="bounce">
          <div>
            <KeyboardDoubleArrowUpIcon />
          </div>
          <div> {urlTitle}</div>
          <div>{databaseName}</div>
        </MasonryAction>
      </MasonryShadow>
      <img
        src={`${thumbnail}`}
        srcSet={`${thumbnail}`}
        alt={urlTitle}
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
      {tiles && tiles.length > 0 && <Box sx={{ width: "100%", minHeight: 500, marginTop: "50px" }}>
        <Masonry
          columns={{ xs: 1, sm: 3, md: 4 }}
          spacing={2}
          sx={{ margin: "0 auto" }}
        >
          {tiles.map((item, index) => (
            <ImageMasonryItem item={item} key={item.thumbnail + index} />
          ))}
        </Masonry>
      </Box>}

      {(!tiles || tiles.length === 0 ) && !loading && <div style={{textAlign:'center', margin: '0 auto'}}><img style={{width:'100%', maxWidth:'300px'}} src="/assets/images/norecordbanner.png" alt="No Record Banner" /><p>No current avaiable records</p></div>}
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
