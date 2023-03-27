import React, { useEffect, useState } from "react";
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
import { getFeatureCollectionsFromIDs } from "../../utils/record";
import { deepSearch } from "../../utils/functions";
import Skeleton from "@mui/material/Skeleton";
const PhotoCoverCard = (props) => {
  const { recordIds } = props;
  const [xml, setXML] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const [records, setRecords] = useState(new Array(4).fill(null));

  useEffect(() => {
    if (recordIds.length === 0) {
      return null;
    }
    getFeatureCollectionsFromIDs(recordIds).then((res) => {
      console.log(res);
      let rec = deepSearch(res, "record");
      if (!Array.isArray(rec)) {
        rec = [rec];
      }
      console.log(rec);
      setRecords(rec);
      setXML(res);
      setLoading(false);
    });
  }, []);

  return records.map((e, i) => {
    let title, description, thumbnail;
    if (!loading) {
      title = deepSearch(e, "oef_title")[0];
      description = deepSearch(e, "oef_description")[0];
      thumbnail = deepSearch(e, "oef_image_path")[0].replace(/\n/, "");
    }

    return (
      <Grid item xs={12} md={6}>
        <Card
          style={{ cursor: "pointer", paddingBottom: "20px" }}
          elevation={3}
        >
          {loading ? (
            <div>
              {" "}
              <Skeleton
                animation="wave"
                height="400"
                style={{ marginBottom: 6, height: "400px" }}
              />
            </div>
          ) : (
            <CardMedia sx={{ height: 400 }} image={thumbnail} title={title} />
          )}

          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              {loading ? (
                <Skeleton
                  animation="wave"
                  height={30}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                title
              )}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {loading ? (
                <React.Fragment>
                  <Skeleton animation="wave" style={{ marginBottom: 6 }} />
                  <Skeleton animation="wave" width="80%" />
                </React.Fragment>
              ) : (
                description
              )}
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
  });
};

PhotoCoverCard.propTypes = {};

export default PhotoCoverCard;
