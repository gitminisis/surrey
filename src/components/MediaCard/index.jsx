import React, { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import {
  getSearchRequestURL,
  getFeatureCollectionsFromIDs,
} from "../../utils/record";
import { deepSearch, getCurrentSession } from "../../utils/functions";
const MediaCard = (props) => {
  const { recordIds } = props;
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState(
    new Array(recordIds.length).fill(null)
  );
  useEffect(() => {
    if (recordIds.length === 0) return null;
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
      thumbnail = deepSearch(e, "oef_image_path")[0];
      id = deepSearch(e, "oef_ind")[0];

      // .replace(/\n/, " ")
      // .replace(/\\/gi, "/")
      // .replace("[IMAGES]", "/SAMOA_IMAGES/");
    }
    return (
      <Grid item xs={12} sm={6} md={3} key={i}>
        <Card
          className="mediaCardImage"
          sx={{ cursor: "pointer", height: 280, width: 280, margin: "0 auto" }}
          onMouseEnter={(_) => setHover(true)}
          onMouseLeave={(_) => setHover(false)}
          onClick={(_) =>
            (window.location = getSearchRequestURL(
              "ONLINE_EXHIBITION_VIEW",
              `OEF_IND ${id}`,
              "WEB_OE_UNION_SUM",
              "UNION_VIEW",
              getCurrentSession()
            ))
          }
        >
          <CardCover>
            <img
              src={thumbnail}
              srcSet={thumbnail}
              loading="lazy"
              alt={title}
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            {/* {title && (
              <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                {title}
              </Typography>
            )} */}
            {title && (
              <Typography
                startDecorator={<LocationOnRoundedIcon />}
                textColor="white"
              >
                {title}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  });
};
MediaCard.propTypes = {
  recordIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MediaCard;
