import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getChildrenSearchLink,
  getJSONTree,
  getNodeFromTree,
} from "../../utils/record";
import { deepSearch } from "../../utils/functions";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/joy/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  StyledTreeItem,
  MinusSquare,
  PlusSquare,
  CloseSquare,
} from "./DescriptionTree.style";

const DescriptionTree = (props) => {
  let { xml, title } = props;
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
    const expanded = nodeIds.filter((x) => !openKeyPath.includes(x));

    if (expanded[0]) {
      let node = getNodeFromTree(treeData, expanded[0]);
      console.log(node, expanded[0]);
    } else {
    }
  };

  const renderTree = (nodes) => {
    let { id, children, hasChildren, isLoaded } = nodes;
    return (
      <StyledTreeItem
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
        {Array.isArray(children) && children.length > 0 ? (
          children.map((node) => renderTree(node))
        ) : hasChildren ? (
          <div nodeId={123}>Loading ...</div>
        ) : null}
      </StyledTreeItem>
    );
  };

  const handleClick = (session, database, id) => {
    window.location = getChildrenSearchLink(session, database, id);
  };
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
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TreeView
          onContextMenu={(e, n) => console.log(e, n)}
          multiSelect={false}
          aria-label={title}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          //   onNodeSelect={(e, n) => handleClick(session, database, n)}
          onNodeToggle={handleToggle}
          expanded={openKeyPath}
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
