import axios from "axios";
import {
  getTodayDate,
  getTomorrowDate,
  getDaysBeforeDate,
  getXMLRecord,
  deepSearch,
} from "./functions";
import { json } from "react-router";
import _ from "lodash";
import { ThumbUpAlt } from "@mui/icons-material";
import copy from "copy-to-clipboard";
import { MEDIA_THUMBNAIL_FIELD } from "../templates/DisplayFields";
import { debug } from "webpack";
import { flatten } from "lodash";
const DEFAULT_DETAIL_REPORT = "WEB_UNION_DETAIL";
const WEB_DNS = "http://samoa.minisisinc.com";
const DEFAULT_SUM_REPORT = "WEB_UNION_SUM";
const SUM_REPORT_BY_DATABASE = {
  COLLECTIONS: "WEB_UNION_SUM_COL",
  DESCRIPTION: "WEB_UNION_SUM_DESC",
};
export const getRecendAdditions = (_) => {
  let high = getTomorrowDate();
  let low = getDaysBeforeDate();
  let searchingField = [
    {
      database: "COLLECTIONS",
      date: "LAST_MODIFIED_TM",
      media: "M_IM_ACCESS",
      report: "WEB_UNION_SUM_COL",
    },
    {
      database: "DESCRIPTION",
      date: "MODIFIED_ON",
      media: "A_IM_ACCESS",
      report: "WEB_UNION_SUM_DESC",
    },
  ];
  let fieldByDatabase = {
    COLLECTIONS: { title: "legal_title", thumbnail: "m_im_access_link" },
    DESCRIPTION: { title: "title", thumbnail: "a_im_access_link" },
  };
  let searchURL = searchingField.map((e) => {
    let exp = `${e.date} > "${low}" and ${e.media} present`;
    let url = `/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM&EXP=${exp}&database=${e.database}`;
    return url;
  });

  return axios.all(searchURL.map((l) => axios.get(l))).then(
    axios.spread(function (...res) {
      let jsonData = res.map((e) =>
        getXMLRecord(new DOMParser().parseFromString(e.data, "text/html"))
      );
      let result = jsonData.reduce((acc, record) => {
        let xml_record = record.xml.xml_record;
        xml_record.map((e) => {
          let database = deepSearch(e, "database_name")[0];
          let thumbnail = deepSearch(e, fieldByDatabase[database].thumbnail)[0];
          if (Array.isArray(thumbnail)) {
            thumbnail = thumbnail[0];
          }
          thumbnail = thumbnail.replace(
            "SAMOA.MINISISINC.COM",
            "surrey.minisisinc.com"
          );

          acc.push({
            thumbnail,
            title: "Library",
            url: deepSearch(e, "record_link")[0],
            urlTitle: deepSearch(e, fieldByDatabase[database].title)[0],
          });
        });
        return acc;
      }, []);

      return result;
    })
  );
};

export const nextRecordURL = (xml) => {
  return getURLFromJSONLink(xml, "next_record");
};

export const backToSummary = (xml) => {
  return getURLFromJSONLink(xml, "back_to_summary");
};

export const previousRecordURL = (xml) => {
  return getURLFromJSONLink(xml, "previous_record");
};

export const getURLFromJSONLink = (xml, link) => {
  let url = deepSearch(xml, link);
  if (url.length === 0) {
    return null;
  }
  return deepSearch(url, "_href")[0];
};

export const getFirstThumbnail = (record, database) => {
  return getAllMedia(record, database)[0];
};

export const getAllMedia = (record, database, mediaType = "image") => {
  let field = MEDIA_THUMBNAIL_FIELD.find((e) => e.database === database)[
    mediaType
  ];
  let mediaURL = deepSearch(record, field.toLowerCase())[0];
  if (typeof mediaURL === "undefined") {
    return [];
  }
  let array = Array.isArray(mediaURL) ? mediaURL : [mediaURL];
  return array.map((e) =>
    e
      .replace("SAMOA.MINISISINC.COM", "surrey.minisisinc.com")
      .replace(/\n/g, "")
  );
};

export const bookmarkRecord = (url, SISN, database, fn) => {
  return axios({
    method: "post",
    url: `${url}?ADDSELECTION&COOKIE=BOOKMARK`,
    data: `mcheckbox_${SISN}=${SISN}-${database}`,
  }).then(function (res) {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    let xml = getXMLRecord(dom);
    if (fn) {
      fn(xml);
    }
    return xml;
  });
};

export const bookmarkAllRecord = (xml, fn) => {
  let url = deepSearch(xml, "bookmark_url")[0];
  let dataString = xml.xml.xml_record
    .map((r) => {
      let isBookmarked = deepSearch(r, "is_bookmarked")[0];
      if (isBookmarked) {
        return "";
      }
      let database = deepSearch(r, "database_name")[0];
      let sisn = deepSearch(r, "sisn")[0];
      return `mcheckbox_${sisn}=${sisn}-${database}`;
    })
    .filter((e) => e !== "")
    .join("&");
  return axios({
    method: "post",
    url: `${url}?ADDSELECTION&COOKIE=BOOKMARK`,
    data: dataString,
  }).then(function (res) {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    let xml = getXMLRecord(dom);
    if (fn) {
      fn(xml);
    }
    return xml;
  });
};

export const viewBookmark = (xml) => {
  let url = deepSearch(xml, "bookmark_url")[0];
  window.location = `${url}?SHOWORDERLIST&COOKIE=BOOKMARK&NEW=Y`;
};

export const removeBookmarkRecord = () => {};

export const removeAllBookmarkRecord = () => {};

export const getRecordPermalink = (
  sisn,
  database,
  report = DEFAULT_DETAIL_REPORT
) => {
  let url = `${WEB_DNS}/scripts/mwimain.dll/144/${database}/${report}?sessionsearch&exp=sisn ${sisn}`;
  return url;
};

export const copyToClipboard = (
  sisn,
  database,
  report = DEFAULT_DETAIL_REPORT
) => {
  let url = getRecordPermalink(sisn, database, report);
  copy(url);
};

export const getNumberOfRecords = (xml) => {
  const urlParams = new URLSearchParams(window.location.search);
  let pageSize = urlParams.get("PAGESIZE");
  if (pageSize) {
    return Number.parseInt(pageSize);
  }

  let firstRecordSeq = deepSearch(xml, "first_record_seq")[0];
  let lastRecordSeq = deepSearch(xml, "last_record_seq")[0];
  return Number.parseInt(lastRecordSeq) - Number.parseInt(firstRecordSeq) + 1;
};

export const getRecordsPerPageURL = (xml, pagesize) => {
  let url = deepSearch(xml, `pagesize_${pagesize}`)[0];
  return url;
};

export const getJumpURL = (
  session,
  database,
  field,
  value,
  summary = DEFAULT_SUM_REPORT,
  detail = DEFAULT_DETAIL_REPORT
) => {
  return `${session}/${database}/${field}/${value}/${SUM_REPORT_BY_DATABASE[database]}/${detail}?JUMP`;
};

//  TREE FUNCTIONS

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
  report = "WEB_UNION_DETAIL"
) => {
  let url = `${session}/${database}/REFD/${refd}/${report}?JUMP&DATABASE=${database}`;
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
  return xml.map((e) => {
    let hasChildren = deepSearch(e, "lower_lowerexist")[0] !== undefined;
    return {
      id: deepSearch(e, "lower_code")[0],
      key: deepSearch(e, "lower_code")[0],
      title: deepSearch(e, "lower_title")[0],
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
export const mapXMLToNode = (xml) => {
  let lower_level_occurrence = deepSearch(xml, "lower_level_occurrence")[0];
  let hasChildren =
    lower_level_occurrence !== undefined && lower_level_occurrence.length > 0;
  let id = deepSearch(xml, "refd")[0];
  let parentId = deepSearch(xml, "refd_higher")[0];
  return {
    id,
    key: id,
    title: deepSearch(xml, "title")[0],
    parentId: parentId === undefined ? null : parentId,
    isRoot: deepSearch(xml, "top_level_flag")[0] === "Y",
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
      let { xml, curNode, lower_level_occurrence } = getCurNodeFromXML(data);

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
        let index = _.findIndex(clone.children, { id: curRefd });
        clone.children[index].children = tree.children;
        tree = clone;
      }
      if (tree.isRoot) {
        return { tree, openKeyPath };
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
    let { xml, curNode, lower_level_occurrence } = getCurNodeFromXML(data);
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

export const getCurNodeFromXML = (data) => {
  let dom = new DOMParser().parseFromString(data, "text/html");
  let xml = getXMLRecord(dom);
  let curNode = mapXMLToNode(xml);
  let lower_level_occurrence = flatten(
    deepSearch(xml, "lower_level_occurrence")
  );
  return { xml, curNode, lower_level_occurrence };
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
      return { ...e, children, isChildrenLoaded: true };
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
  let curTree = JSON.parse(JSON.stringify(tree));
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
