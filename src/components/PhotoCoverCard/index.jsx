import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  CardMedia,
  Card,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import {
  getFeatureCollectionsFromIDs,
  getSearchRequestURL,
} from "../../utils/record";
import { deepSearch, getCurrentSession } from "../../utils/functions";
import Skeleton from "@mui/material/Skeleton";
const PhotoCoverCard = (props) => {
  const { recordIds } = props;
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const [records, setRecords] = useState(
    new Array(recordIds.length).fill(null)
  );

  useEffect(() => {
    if (recordIds.length === 0) {
      return null;
    }
    getFeatureCollectionsFromIDs(recordIds, getCurrentSession()).then((res) => {
      let rec = deepSearch(res, "record");
      if (!Array.isArray(rec)) {
        rec = [rec];
      }
      setRecords(rec);
      setLoading(false);
    });
  }, []);

  return records.map((e, i) => {
    let title, description, thumbnail, id;

    if (!loading) {
      title = deepSearch(e, "oef_title")[0];
      description = deepSearch(e, "oef_description")[0];
      thumbnail = deepSearch(e, "oef_image_path")[0].replace(/\n/, "");
      id = deepSearch(e, "oef_ind")[0];
    }

    return (
      <Grid item xs={12} md={6} key={i}>
        <Card
          className="photoCoverCard"
          onClick={(_) =>
            (window.location = getSearchRequestURL(
              "ONLINE_EXHIBITION_VIEW",
              `OEF_IND ${id}`,
              "WEB_OE_UNION_SUM",
              "UNION_VIEW",
              getCurrentSession()
            ))
          }
          style={{ cursor: "pointer", paddingBottom: "20px", margin: "0 auto" }}
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
            <CardMedia
             
              sx={{ height: 400, backgroundSize: "contain" }}
              image={thumbnail}
              title={title}
            />
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
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ height: "80px" }}
            >
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
            {/* <Button
              style={{ margin: "0 auto" }}
              className="button"
              variant="contained"
              size="large"
            >
              Browse
            </Button> */}
          </CardActions>
        </Card>
      </Grid>
    );
  });
};

PhotoCoverCard.propTypes = {};

export default PhotoCoverCard;
