import axios from "axios";
import _ from "lodash";
import { deepSearch, getXMLTreeRecord } from "./functions";
/**
 * Returns the search URL to the record with the corresponding REFD
 * @param {} session
 * @param {*} database
 * @param {*} refd
 * @param {*} report
 * @returns
 */
export const getChildrenSearchLink = (
  session,
  database,
  refd,
  report = "EXTRACT_TREE_PAGE"
) => {
  let url = `${session}/${database}/REFD/${refd}/${report}?JUMP&DATABASE=${database}&SHOWSINGLE=Y&SHARE_SESSID=LMA_SHARE_SESSID&M_GVAR1=TREE_FORMAT:XML&M_GVAR2=STARTENTRY:1#false`;
  return url;
};

/**
 * Return a request to search the requested record
 * @param {} session
 * @param {*} database
 * @param {*} id
 * @returns
 */
export const getXMLTree = (session, database, id) => {
  return axios.get(getChildrenSearchLink(session, database, id));
};

/**
 * Returns the JSON Object for each record in the lower level record XML section
 * @param {*} xml
 * @param {*} parentId
 * @returns
 */
export const mapLowerLevelXMLToNode = (xml, parentId) => {
  return xml
    .filter((e) => deepSearch(e, "lower_security")[0] !== "No")
    .map((e) => {
      let hasChildren = deepSearch(e, "has-children")[0] !== "false";
      let isNextPage = deepSearch(e, "next-page-link")[0];
      if (isNextPage !== undefined) {
        return {
          id: `${parentId}-next-page-link`,
          key: `${parentId}-next-page-link`,
          title: "Load more tree records ...",
          parentId: parentId,
          isRoot: false,
          hasChildren: false,
          children: null,
          isChildrenLoaded: true,
          loadMore: isNextPage,
        };
      }
      return {
        id: deepSearch(e, "refd")[0],
        key: deepSearch(e, "refd")[0],
        title: deepSearch(e, "title")[0],
        parentId: parentId,
        isRoot: false,
        hasChildren: hasChildren,
        children: hasChildren ? [] : null,
        isChildrenLoaded: hasChildren ? false : true,
      };
    });
};

/**
 * Returns the JSON Object for the main record from the XML search results.
 * @param {*} xml
 * @returns
 */
export const mapXMLToNode = (xml, id) => {
  let lower_level_occurrence = deepSearch(xml, "link")[0];
  if (lower_level_occurrence !== undefined) {
    lower_level_occurrence = Array.isArray(lower_level_occurrence)
      ? lower_level_occurrence
      : [lower_level_occurrence];
  }
  debugger;
  let hasChildren = typeof lower_level_occurrence !== "undefined";

  let parentId = deepSearch(xml, "refd_higher")[0];
  return {
    id,
    key: id,
    title: deepSearch(xml, "record_title")[0],
    parentId: parentId === undefined ? null : parentId,
    isRoot: parentId === undefined,
    hasChildren: hasChildren,
    isChildrenLoaded: true,
    children: hasChildren
      ? mapLowerLevelXMLToNode(lower_level_occurrence, id)
      : null,
  };
};

// let isRoot = false;
let tree = {};
let openKeyPath = [];
let treeArray = [];
let noTree = false;

/**
 * Build the tree from the current record using bottom-up approach
 * @param {*} session
 * @param {*} database
 * @param {*} id
 * @returns
 */
export const getJSONTree = (session, database, id) => {
  openKeyPath.push(id);
  while (!tree.isRoot) {
    return getXMLTree(session, database, id).then((res) => {
      let { data } = res;
      let curNodeJSON = getCurNodeFromXML(data, id);
      if (curNodeJSON === null) {
        noTree = true;
        return {
          tree,
          openKeyPath,
          noTree,
        };
      }
      let { xml, curNode, lower_level_occurrence } = curNodeJSON;
      let hasChildren =
        lower_level_occurrence !== undefined &&
        lower_level_occurrence.length > 0;
      if (hasChildren) {
        curNode.children = mapLowerLevelXMLToNode(
          lower_level_occurrence,
          curNode.id
        );
      }
      if (_.isEmpty(tree)) {
        tree = _.clone(curNode);
      } else {
        let clone = _.clone(curNode);
        let curRefd = tree.id;
        let index = _.findIndex(clone.children, {
          id: curRefd,
        });
        clone.children[index].children = tree.children;
        tree = clone;
      }
      if (tree.isRoot) {
        return {
          tree,
          openKeyPath,
        };
      } else {
        let higherLevelCode = deepSearch(xml, "refd_higher")[0];
        return getJSONTree(session, database, higherLevelCode);
      }
    });
  }
};

/**
 * returns the searching record and all its children in JSON format
 * @param {*} session
 * @param {*} database
 * @param {*} id
 * @returns
 */
export const fetchNode = (session, database, id) => {
  return getXMLTree(session, database, id).then((res) => {
    let { data } = res;

    let { xml, curNode, lower_level_occurrence } = getCurNodeFromXML(data, id);
    let hasChildren =
      lower_level_occurrence !== undefined && lower_level_occurrence.length > 0;
    if (hasChildren) {
      curNode.children = mapLowerLevelXMLToNode(
        lower_level_occurrence,
        curNode.id
      );
    }
    return curNode;
  });
};

/**
 *
 * @param {string} url
 * @param {string} id
 */
export const appendChildrenToNode = (url, tree, id) => {
  axios.get(url).then((res) => {
    let { data } = res;

    console.log(data, tree);
  });
};
export const getCurNodeFromXML = (data, id) => {
  let dom = new DOMParser().parseFromString(data, "text/html");
  if (dom.getElementById("MWI-error")) {
    return null;
  }
  let xml = getXMLTreeRecord(data, "links");
  let curNode = mapXMLToNode(xml, id);
  let lower_level_occurrence = _.flatten(
    deepSearch(xml, "lower_level_occurrence")
  );
  return {
    xml,
    curNode,
    lower_level_occurrence,
  };
};
/**
 * Return node object from the tree using the ID
 * @param {} tree
 * @param {*} id
 * @returns
 */
export const getNodeFromTree = (tree, id) => {
  let curNode = _.cloneDeep(tree);
  if (curNode.id === id) {
    return curNode;
  }

  if (curNode.hasChildren && curNode.isChildrenLoaded) {
    for (let i = 0; i < curNode.children.length; i++) {
      let res = getNodeFromTree(curNode.children[i], id);
      if (res !== null) {
        return res;
      }
    }
  }

  return null;
};

// export const getOpenKeyPath = (tree, id) => {};

/**
 * Add children to the current node of the tree.

 * @param {} tree
 * @param {*} id
 * @param {*} children
 * @returns
 */
export const addChildrenToNode = (tree, id, children) => {
  if (children === null) {
    return tree;
  }

  return tree.map((e) => {
    if (e.id === id) {
      return {
        ...e,
        children,
        isChildrenLoaded: true,
      };
    }

    if (e.hasChildren) {
      return {
        ...e,
        children: addChildrenToNode(e.children, id, children),
      };
    }
    return e;
  });
};

export const insertNodeToTree = (tree, node) => {};

/**
 * Update the node
 *  * NOT IN USED *
 * @param {} tree
 * @param {*} newNode
 * @param {*} path
 * @returns
 */
export const updateNode = (tree, newNode, path = []) => {
  // let curNode = tree;
  let curNode = _.cloneDeep(tree);
  if (path.length > 0) {
    path.map((e) => {
      curTree = curTree[e];
    });
  }

  if (curTree.id === newNode.id) {
    curTree = newNode;
    let x = path.reduce(function (o, k, i) {
      if (i === path.length - 1) {
        o[k] = newNode;
      }
      return o[k];
    }, tree); // set init
    return tree;
  }

  if (curTree.hasChildren && curTree.children.length > 0) {
    path.push("children");
    for (let i = 0; i < curTree.children.length; i++) {
      let res = updateNode(tree, newNode, [...path, i]);
      if (res !== null) {
        return tree;
      }
    }
  }
  // return tree;
  return null;
};
