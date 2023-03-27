import axios from "axios";
import {
  getTodayDate,
  getTomorrowDate,
  getDaysBeforeDate,
  getXMLRecord,
  deepSearch,
  getKeyByValue,
} from "./functions";
import copy from "copy-to-clipboard";
import {
  MEDIA_THUMBNAIL_FIELD,
  SORT_REPORTS_BY_DATABASE,
} from "../templates/DisplayFields";
import { findKey } from "lodash";
const DEFAULT_DETAIL_REPORT = "WEB_UNION_DETAIL";
const WEB_DNS = "http://samoa.minisisinc.com";
const DEFAULT_SUM_REPORT = "WEB_UNION_SUM";
const SUM_REPORT_BY_DATABASE = {
  COLLECTIONS: "WEB_UNION_SUM_COL",
  DESCRIPTION: "WEB_UNION_SUM_DESC",
};

/**
 * send a request to fetch a search from the corresponding database, expression
 * @param {*} database
 * @param {*} expression
 * @param {*} report
 * @param {*} session
 */
export const sendSearchRequest = (
  database,
  expression,
  report,
  application = "UNION_VIEW",
  session = "/scripts/mwimains.dll"
) => {
  let url = `${session}?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=${application} &DATABASE=${database}&language=144&REPORT=${
    report || SUM_REPORT_BY_DATABASE[database]
  }&EXP=${expression}`;
  return url;
};

export const getFeatureCollectionsFromIDs = (ids, fn) => {
  let exp = ids
    .map((e) => `OEF_IND ${e}`)
    .join(" or ")
    .trim();

  let url = `/scripts/mwimains.dll?UNIONSEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=ONLINE_EXHIBITION_VIEW&language=144&REPORT=WEB_OE_SUM&EXP=${exp}`;
  return axios.get(url).then((res) => {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    let xml = getXMLRecord(dom);
    if (fn !== undefined) {
      fn(xml);
    }
    return xml;
  });
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

export const getAllImageCaptions = (record) => {
  let captions = deepSearch(record, "image_caption")[0];
  if (typeof captions === "undefined") {
    return [];
  }
  let array = Array.isArray(captions) ? captions : [captions];
  return array;
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
    if (fn !== undefined) {
      fn(xml);
    }
    return xml;
  });
};
export const removeBookmarkFromKey = (map, record, fn) => {
  let index = getKeyByValue(map, record) + 1;
  let sisn = deepSearch(record, "sisn")[0];
  let session = deepSearch(record, "bookmark_url")[0];
  return axios({
    method: "post",
    url: `${session}?DELETEORDER&COOKIE=BOOKMARK`,
    data: `mcheckbox_${index}=${sisn}`,
  }).then(function (res) {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    return dom;
  });
};
export const removeBookmarkFromSISN = (record, sisn, index) => {
  let session = deepSearch(record, "bookmark_url")[0];
  return axios({
    method: "post",
    url: `${session}?DELETEORDER&COOKIE=BOOKMARK`,
    data: `mcheckbox_${index}=${sisn}`,
  }).then(function (res) {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    return res;
  });
};
export const bookmarkAllRecord = (xml, fn) => {
  debugger;
  let url = deepSearch(xml, "bookmark_url")[0];
  let dataString = xml.xml.xml_record
    .map((r) => {
      let isBookmarked = deepSearch(r, "is_bookmarked")[0];
      if (isBookmarked === "true") {
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
    if (fn !== undefined) {
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

export const removeAllBookmarkRecord = () => {
  var Cookies = document.cookie.split(";");

  // set 1 Jan, 1970 expiry for every cookies
  for (var i = 0; i < Cookies.length; i++)
    document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
};

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

export const fetchJSONRecord = (session, database, sisn = [], fn) => {
  let searchExpression = sisn.map((e) => `SISN ${e}`).join(" or ");
  let url = `${session}/scripts/mwimain.dll?SEARCH&KEEP=Y&SIMPLE_EXP=Y&APPLICATION=UNION_VIEW&DATABASE=${database}&language=144&REPORT=${SUM_REPORT_BY_DATABASE[database]}&EXP=${searchExpression}`;
  return axios.get(url).then((res) => {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    let xml = getXMLRecord(dom);
    if (fn !== undefined) {
      fn(xml);
    }
    return xml;
  });
};

export const getIDFromBookmarkSummary = (xml) => {
  return xml.xml.xml_record.map((e, i) => {
    return {
      database: e.database_name,
      sisn,
    };
  });
};

export const getSortReportURL = (xml, application, sort) => {
  console.log(sort, application);
  let url = deepSearch(xml, "bookmark_url")[0];
  // url = url.replace(
  //   "WEB_UNION_SUM",
  //   SORT_REPORTS_BY_DATABASE[sort][application]
  // );

  url = `${url}/${SORT_REPORTS_BY_DATABASE[sort][application]}?RECLIST&DATABASE=${application}`;
  return url;
};

/** PAGINATION FUNCTIONS */
export const getPagination = (xml) => {
  return deepSearch(xml, "pagination")[0];
};

export const getPageUrlFromPagination = (pagination, index) => {
  return pagination[index]["_href"];
};

export const getCurrentPageFromPagination = (pagination) => {
  return Number.parseInt(pagination.filter((e) => e.b !== undefined)[0].b);
};
