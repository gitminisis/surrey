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
const DEFAULT_DETAIL_REPORT = "WEB_UNION_DETAIL";
const WEB_DNS = "http://samoa.minisisinc.com";
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

export const getRecordPermalink = () => {};

export const copyToClipboard = (
  sisn,
  database,
  report = DEFAULT_DETAIL_REPORT
) => {
  let url = `${WEB_DNS}/scripts/mwimain.dll/144/${database}/${report}?sessionsearch&exp=sisn ${sisn}`;
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
