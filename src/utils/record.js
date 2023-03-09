import axios from "axios";
import {
  getTodayDate,
  getTomorrowDate,
  getDaysBeforeDate,
  getXMLRecord,
  deepSearch,
} from "./functions";

export const getRecendAdditions = (_) => {
  let high = getTomorrowDate();
  let low = getDaysBeforeDate();
  let searchingField = [
    { date: "LAST_MODIFIED_TM", media: "M_IM_ACCESS" },
    { date: "MODIFIED_ON", media: "A_IM_ACCESS" },
  ];
  let searchExpressions = searchingField
    .map((e) => {
      let exp = `(${e.date} < "${high}" and ${e.date} > "${low}" and ${e.media} present)`;
      return exp;
    })
    .join(" or ");
  let url = `/scripts/mwimain.dll?UNIONSEARCH&KEEP=Y&APPLICATION=UNION_VIEW&language=144&REPORT=WEB_UNION_SUM&EXP=${searchExpressions}`;
  return axios.get(url).then((res) => {
    let { data } = res;
    let dom = new DOMParser().parseFromString(data, "text/html");
    let xml = getXMLRecord(dom);
  });
};

export const getFirstThumbnail = (record, thumbnailData, database) => {
  let thumbnailField = thumbnailData.find(
    (e) => e.database === database
  ).fields;
  let thumbnailURL = deepSearch(record, thumbnailField.toLowerCase())[0];
  let thumbPic = "";
  if (thumbnailURL !== undefined && thumbnailURL.length > 0) {
    let url = Array.isArray(thumbnailURL) ? thumbnailURL[0] : thumbnailURL;

    thumbPic = url
      .replace("SAMOA.MINISISINC.COM", "surrey.minisisinc.com")
      .replace(/\n/g, "");
  }
  return thumbPic;
};

export const bookmarkRecord = (url, SISN, database) => {
  return axios({
    method: "post",
    url: `${url}?ADDSELECTION&COOKIE=BOOKMARK`,
    data: `mcheckbox_${SISN}=${SISN}-${database}`,
  }).then(function (r) {
    console.log(r);
  });
};

export const bookmarkAllRecord = () => {};

export const viewBookmark = () => {};

export const removeBookmarkRecord = () => {};

export const removeAllBookmarkRecord = () => {};

export const getRecordPermalink = () => {};

export const copyToClipboard = () => {};
