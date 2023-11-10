import { has, flatten, map, isEqual, omitBy, isEmpty } from "lodash";
import X2JS from "../libs/xml2json.min.js";
import axios from "axios";
import SiteLayout from "../templates/SiteLayout.js";

const VIRTUAL_DIR = SiteLayout.virtualIncludePaths;
const APPLICATION = SiteLayout.application;
const IMAGE_VIRTUAL_PATH = SiteLayout.imageVirtualPath;
const IMAGE_VIRTUAL_DIR = SiteLayout.imageVirtualDir;
export const readCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
};

export const getCurrentSession = () => {
  return readCookie("HOME_SESSID");
};

export const deepSearch = (obj, key) => {
  if (has(obj, key))
    // or just (key in obj)
    return [obj[key]];
  // elegant:
  return flatten(
    map(obj, function (v) {
      return typeof v == "object" ? deepSearch(v, key) : [];
    }),
    true
  );
};

export const getKeyByValue = (map, searchValue) => {
  for (let [key, value] of map.entries()) {
    if (isEqual(value, searchValue)) return key;
  }
};

export const getXMLRecord = (dom = document, id = "#xml_record") => {
  try {
    const xmlDOM = dom.querySelector(id);
    const x2js = new X2JS();
    const xmlString = new XMLSerializer().serializeToString(xmlDOM);
    const json = x2js.xml_str2json(xmlString);
    return json;
  } catch (error) {
    console.error(
      "Error while processing the XML record from getXMLRecord",
      error
    );
    return false;
  }
};

export const getXMLTreeRecord = (xml) => {
  try {
    const x2js = new X2JS();
    const json = x2js.xml_str2json(xml);
    return json;
  } catch (error) {
    console.error(
      "Error while processing the XML record from getXMLTreeRecord",
      error
    );
    return false;
  }
};

export const getXMLFilter = (dom) => {
  let DOM_SEARCH = dom ? dom : document;
  let xmlDOM = DOM_SEARCH.querySelector("#filter_xml");
  let x2js = new X2JS();
  let json = x2js.xml_str2json(new XMLSerializer().serializeToString(xmlDOM));

  return json;
};

export const xmlStrToJson = (str) => {
  let x2js = new X2JS();
  let json = x2js.xml_str2json(str);
  return json;
};

export const getIndexList = (field, database, application) => {
  let url = `/scripts/mwimain.dll/FIRST?INDEXLIST&KEYNAME=${field}&DATABASE=${database}&form=[${VIRTUAL_DIR}]includes/html/cluster.html&TITLE=Browse%20${field}&APPLICATION=${APPLICATION}&LANGUAGE=144`;
  return axios.get(url);
};

export const getMoreIndexList = (url) => {
  return axios.get(url);
};

export const getAllIndexList = async (field, database, application) => {
  let done = false;
  let url = `/scripts/mwimain.dll/FIRST?INDEXLIST&KEYNAME=${field}&DATABASE=${database}&form=[${VIRTUAL_DIR}]includes/html/cluster.html&TITLE=Browse%20${field}&APPLICATION=${APPLICATION}&LANGUAGE=144`;
  let optionList = [];
  while (!done) {
    let result = await getMoreIndexList(url);
    let { data } = result;
    if (data === "") {
      done = true;
    }
    let jsonData = xmlStrToJson(data);
    let options = deepSearch(jsonData, "option")[0];
    let nextPage = deepSearch(jsonData, "next_page")[0];
    if (nextPage === "#") {
      done = true;
    }
    if (options) {
      optionList = [...optionList, ...options];
    }
    url = nextPage;
  }
  return optionList;
};
export const buildExpressionFromMap = (map) => {
  const filteredMap = omitBy(map, isEmpty);
  const string = Object.entries(filteredMap)
    .map(([key, value]) => `${key} "${value}"`)
    .join(" and ");

  return string;
};

/**
 * This function returns today's date in the format "YYYY-MM-DD".
 * It creates a new Date object and uses the toJSON() and slice() methods to format the date.
 * @param {*} _
 * @returns
 */
export const getTodayDate = (_) => {
  return new Date().toJSON().slice(0, 10);
};

export const getTomorrowDate = (_) => {
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow.toJSON().slice(0, 10);
};

export const getDaysBeforeDate = (number = 30) => {
  let today = new Date();
  let priorDate = new Date(new Date().setDate(today.getDate() - number));
  return priorDate.toJSON().slice(0, 10);
};

export const printPage = (_) => {
  window.print();
};

export const sendEmail = (session, data, body) => {
  let subject = data.filter((e) => e.id === "subject")[0].value;

  let bodyContent = `\n${data
    .map((e) => `${e.title}: ${e.value}`)
    .join("\n")}\n\n ${body}`.replace("&", "&amp;");
  let receiver = "archives@surrey.ca";
  let sender = "noreply@minisisinc.com";
  let url = `${session}?save_mail_form&async=y&xml=y&subject_default=${subject}&from_default=${sender}&to_default=${receiver}`;
  return axios({
    method: "POST",
    url: url,
    data: `sender=${sender}&receiver=${receiver}&subject=${subject}&mailbody=${bodyContent}`,
  });
};

export const sendEmailBookmark = (session, data, body) => {
  let subject = "Surrey Online Heritage Search - Bookmark(s) List";

  let bodyContent = `\n${data
    .map((e) => `${e.title}: ${e.value}`)
    .join("\n")}\n\n${body}`;
  let receiver = data.filter((e) => e.id === "emailAddress")[0].value;
  let sender = "noreply@minisisinc.com";
  let url = `${session}?save_mail_form&async=y&xml=y&subject_default=${subject}&from_default=${sender}&to_default=${receiver}`;
  return axios({
    method: "POST",
    url: url,
    data: `sender=${sender}&receiver=${receiver}&subject=${subject}&mailbody=${bodyContent}`,
  });
};

export const sendErrorReport = (session, body) => {
  let subject = "Report a problem";
  let receiver = "mikehoang.minisis@gmail.com";
  let sender = "noreply@minisisinc.com";
  let url = `${session}?save_mail_form&async=y&xml=y&subject_default=${subject}&from_default=${sender}&to_default=${receiver}`;
  return axios({
    method: "POST",
    url: url,
    data: `sender=${sender}&receiver=${receiver}&subject=${subject}&mailbody=${body}`,
  });
};

export const convertFilePathToURL = (path) => {
  return path
    .replace(/\\/g, "/")
    .replace(IMAGE_VIRTUAL_DIR, IMAGE_VIRTUAL_PATH);
};

export const isSessionSearch = () => {
  const currentUrl = window.location.href.toLowerCase();
  return currentUrl.includes("sessionsearch");
};

export const jsonToTemplate = (json) => {
  return json.map((e) => {
    let object = {};
    object.component = e.component;
    let dataObject = {};
    if (e.properties) {
      Object.keys(e.properties).map((key) => {
        dataObject[key] = e.properties[key].value;
      });
    }
    object.data = dataObject;
    if (e.children) {
      object.children = jsonToTemplate(e.children);
    }
    return object;
  });
};

export const jsonToFields = (json) => {
  return json.map((e) => {
    return {
      database: e.database,
      fields: e.displayFields,
    };
  });
};

export const getTrangCuteness = () => {
  let cuteness = 100;
  console.log(`Every second, Trang is becoming cuter `);
  let date = getTodayDate();
  let loop = setInterval((_) => {
    console.log(`Cuteness level: ${cuteness++}`);
    if (cuteness === 113) {
      console.log(`Cuteness overloading 🫠`);
    }

    if (cuteness > 116) {
      console.log(
        `Someone please do something about this, or we will run out of cuteness in the world 🫠`
      );
    }

    if (cuteness > 120) {
      console.log(
        "Evacuate the city, and give this girl a shield to hide her cuteness away"
      );
    }
  }, 1000);
};
// getTrangCuteness();

export const sanitizeFilterURL = (urlString, application) => {
  return urlString.replace("&DATABASE=UNION_VIEW", "");
  const url = new URL(urlString);

  // Remove the 'DATABASE' search parameter
  if (application === "UNION_VIEW") {
    url.searchParams.delete("DATABASE");
  }

  const queryParams = url.searchParams;

  // Get the updated URL as a string
  const updatedUrlString = queryParams.toString();

  return getCurrentSession() + "?" + updatedUrlString;
};
