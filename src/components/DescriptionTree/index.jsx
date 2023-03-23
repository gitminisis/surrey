import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getChildrenSearchLink,
  getJSONTree,
  getNodeFromTree,
  updateNode,
  addChildrenToNode,
  fetchNode,
} from "../../utils/tree";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

import { deepSearch } from "../../utils/functions";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Skeleton } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  StyledTreeItem,
  MinusSquare,
  PlusSquare,
  CloseSquare,
} from "./DescriptionTree.style";

const TreeSkeletonWidth = [100, 90, 80, 70, 70, 70, 60, 60, 60];
const TreeLoadingSkeleton = () => {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      {TreeSkeletonWidth.map((e) => (
        <Skeleton width={`${e}%`} style={{ marginLeft: `${100 - e}%` }} />
      ))}
    </Box>
  );
};
const DescriptionTree = (props) => {
  let { xml, title, displayDatabase } = props;
  let session = deepSearch(xml, "session")[0];
  let database = deepSearch(xml, "database_name")[0];
  let refd = deepSearch(xml, "refd")[0];
  let lowerLevelRecords = deepSearch(xml, "lower_level_occurence")[0];
  const [treeData, setTreeData] = useState([]);
  const [openKeyPath, setOpenKeyPath] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contextMenu, setContextMenu] = React.useState(null);
  debugger;
  console.log('render tree')
  useEffect(() => {
    console.log(displayDatabase.indexOf(database) !== -1);
    if (displayDatabase.indexOf(database) !== -1) {
      console.log("inside");
      getJSONTree(session, database, refd)
        .then((res) => {
          console.log(res);
          let { tree, openKeyPath } = res;
          setOpenKeyPath(openKeyPath.reverse());
          setTreeData(tree);
          setLoading(true);
        })
        .then((err) => {});
    }
  }, []);
  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleToggle = (event, nodeIds) => {
    setOpenKeyPath(nodeIds);
    const expanded = nodeIds.filter((x) => !openKeyPath.includes(x));
    if (expanded[0]) {
      let node = getNodeFromTree(treeData, expanded[0]);
      if (!node.isChildrenLoaded) {
        fetchNode(session, database, node.id).then((res) => {
          let resTree = addChildrenToNode([treeData], node.id, res.children);
          setTreeData(resTree[0]);
        });
      }
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
          <div nodeId={"."}>Loading ...</div>
        ) : null}
      </StyledTreeItem>
    );
  };
  if (displayDatabase.indexOf(database) === -1) {
    return null;
  }
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
        <Input
          variant="soft"
          placeholder="Search"
          name="KEYWORD_CL"
          startDecorator={<SearchIcon />}
        />
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        {loading ? (
          <div onContextMenu={handleContextMenu}>
            <TreeView
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
                mt: 4,
              }}
            >
              {renderTree(treeData)}
            </TreeView>
          </div>
        ) : (
          <TreeLoadingSkeleton />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

DescriptionTree.propTypes = {};

export default DescriptionTree;
