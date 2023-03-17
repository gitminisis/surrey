import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getJSONTree, getNodeFromTree } from "../../utils/record";
import { deepSearch } from "../../utils/functions";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/joy/Typography";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { styled } from "@mui/material/styles";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const DescriptionTree = (props) => {
  let { xml } = props;
  let session = deepSearch(xml, "session")[0];
  let database = deepSearch(xml, "database_name")[0];
  let refd = deepSearch(xml, "refd")[0];
  let lowerLevelRecords = deepSearch(xml, "lower_level_occurence")[0];
  const [treeData, setTreeData] = useState(false);
  const [openKeyPath, setOpenKeyPath] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getJSONTree(session, database, refd)
      .then((res) => {
        let { tree, openKeyPath } = res;
        setOpenKeyPath(openKeyPath.reverse());
        setTreeData(tree);
        setLoading(true);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  const handleToggle = (event, nodeIds) => {
    setOpenKeyPath(nodeIds);
  };

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <Typography
          level="h6"
          component="div"
          sx={{ fontWeight: refd === nodes.id ? "bold" : "inherit" }}
        >
          {nodes.title}
        </Typography>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Accordion>
      <AccordionSummary
        sx={{
          height: "40px",
          backgroundColor: "primary.light",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant="plain"
          color="primary"
          component="div"
          fontSize="lg"
          level="h6"
          fontWeight={700}
        >
          Description Tree View
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          // defaultExpanded={openKeyPath}
          onNodeToggle={handleToggle}
          expanded={openKeyPath}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{
            flexGrow: 1,
          }}
        >
          {renderTree(treeData)}
        </TreeView>
      </AccordionDetails>
    </Accordion>
  );
};

DescriptionTree.propTypes = {};

export default DescriptionTree;
