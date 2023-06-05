import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getChildrenSearchLink,
  getJSONTree,
  getNodeFromTree,
  updateNode,
  addChildrenToNode,
  fetchNode,
  appendChildrenToNode,
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
import { getSearchRequestURL } from "utils/record";
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
  let { xml, title, displayDatabase, showTree } = props;
  let session = deepSearch(xml, "session")[0];
  let database = deepSearch(xml, "database_name")[0];
  let refd = deepSearch(xml, "refd")[0];
  let lowerLevelRecords = deepSearch(xml, "lower_level_occurence")[0];
  let recordLink = deepSearch(xml, "session")[0];
  const [treeData, setTreeData] = useState([]);
  const [openKeyPath, setOpenKeyPath] = useState([]);
  const [loading, setLoading] = useState(false);
  const [contextMenu, setContextMenu] = React.useState(null);
  useEffect(() => {
    if (showTree) {
      getJSONTree(session, database, refd)
        .then((res) => {
          let { tree, openKeyPath, noTree } = res;
          setLoading(true);
          if (noTree) {
            return;
          }
          setOpenKeyPath(openKeyPath.reverse());
          setTreeData(tree);
        })
        .then((err) => {});
    }
  }, []);

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
    }
  };

  const renderTree = (nodes) => {
    let { id, children, hasChildren, isLoaded, loadMore, parentId } = nodes;
    console.log(nodes);
    return (
      <StyledTreeItem
        key={id}
        nodeId={id}
        onClick={(e) => {}}
        label={
          <Typography
            level="h6"
            component="a"
            href={
              loadMore === undefined
                ? getSearchRequestURL(
                    "DESCRIPTION",
                    `REFD ${id}`,
                    "WEB_UNION_DETAIL",
                    "UNION_VIEW",
                    session
                  )
                : "#"
            }
            onClick={(e) => {
              if (loadMore !== undefined) {
                console.log(loadMore);
                appendChildrenToNode(loadMore, treeData, parentId);
                return;
              }
              e.stopPropagation();
            }}
            sx={{
              fontWeight: refd === nodes.id ? "bold" : "inherit",
              textDecoration: refd === nodes.id ? "underline" : "none",
              color: "primary.dark",
            }}
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
  if (!showTree) {
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
        {loading ? (
          <div>
            {treeData.isRoot ? (
              <TreeView
                multiSelect={false}
                aria-label={title}
                defaultCollapseIcon={<MinusSquare />}
                defaultExpandIcon={<PlusSquare />}
                defaultEndIcon={<CloseSquare />}
                onNodeSelect={(e, n) => {
                  // handleClick(session, database, n)
                }}
                onNodeToggle={handleToggle}
                expanded={openKeyPath}
                sx={{
                  flexGrow: 1,
                  mt: 4,
                }}
              >
                {renderTree(treeData)}
              </TreeView>
            ) : (
              "Description tree is not available for this record"
            )}
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
