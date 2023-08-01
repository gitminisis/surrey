import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, } from "@mui/material";
import { DetailContainer,} from "./DetailLayout.style";
import GeneralSearchBox from "../GeneralSearchBox";
import GeneralSection from "./GeneralSection";
import DetailSection from "./DetailSection";
import { getXMLRecord } from "../../utils/functions";
const DetailLayout = (props) => {
  const [xml, setXml] = useState(getXMLRecord());
  const { generalSection, detailSection, generalSearchBox } = props;
  let updateXML = (xml) => {
    setXml(xml);
  };
  return (
    <div>
      <DetailContainer
        elevation={2}
        sx={{ backgroundColor: "rgb(233, 232, 232,0.4)" }}
      >
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <GeneralSearchBox {...generalSearchBox} xml={xml} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <GeneralSection
                  xml={xml}
                  updateXML={updateXML}
                  data={generalSection}
                />
              </Grid>

              {/* <Grid container item xs={12}>
                <DetailSection data={detailSection} />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </DetailContainer>
    </div>
  );
};

DetailLayout.propTypes = {};

export default DetailLayout;
