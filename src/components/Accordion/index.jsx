import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
const AccordionComponent = (props) => {
  const { data } = props;
  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px", textAlign: "left" }}>
      {data.map((item, i) => {
        return (
          <Accordion
            key={i}
            defaultExpanded={i === 0}
            sx={{
              marginTop: "10px",
              padding: "15px 15px",
              backgroundColor: "primary.light",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="p"
                dangerouslySetInnerHTML={{ __html: item.description }}
              >
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
AccordionComponent.propTypes = {
  data: PropTypes.array,
};
export default AccordionComponent;
