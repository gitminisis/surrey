import axios from "axios";
import _ from "lodash";
import {
    deepSearch,
    getXMLRecord
} from "./functions";
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
    return xml.filter(e => deepSearch(e, "lower_security")[0] !== 'No').map((e) => {
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
    if (lower_level_occurrence !== undefined) {
        lower_level_occurrence = Array.isArray(lower_level_occurrence) ? lower_level_occurrence : [lower_level_occurrence]
    }
    let hasChildren =
        typeof lower_level_occurrence !== "undefined"
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
        children: hasChildren ?
            mapLowerLevelXMLToNode(lower_level_occurrence, id) : null,
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
            let {
                data
            } = res;
            let curNodeJSON = getCurNodeFromXML(data);
            if (curNodeJSON === null) {
                noTree = true;
                return {
                    tree,
                    openKeyPath,
                    noTree
                }
            }
            let {
                xml,
                curNode,
                lower_level_occurrence
            } = curNodeJSON
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
                    id: curRefd
                });
                clone.children[index].children = tree.children;
                tree = clone;
            }
            if (tree.isRoot) {
                return {
                    tree,
                    openKeyPath
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
        let {
            data
        } = res;
        let {
            xml,
            curNode,
            lower_level_occurrence
        } = getCurNodeFromXML(data);
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
    if (dom.getElementById('MWI-error')) {
        return null;
    }
    let xml = getXMLRecord(dom);
    let curNode = mapXMLToNode(xml);
    let lower_level_occurrence = _.flatten(
        deepSearch(xml, "lower_level_occurrence")
    );
    return {
        xml,
        curNode,
        lower_level_occurrence
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
    debugger;

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
                isChildrenLoaded: true
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
        let x = path.reduce(function(o, k, i) {
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