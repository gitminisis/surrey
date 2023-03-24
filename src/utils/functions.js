import _ from "lodash";
import X2JS from "../libs/xml2json.min.js";
import axios from "axios";
import SiteLayout from "../templates/SiteLayout.js";

const VIRTUAL_DIR = SiteLayout.virtualIncludePaths;
const APPLICATION = SiteLayout.application;
export const deepSearch = (obj, key) => {
  if (_.has(obj, key))
    // or just (key in obj)
    return [obj[key]];
  // elegant:
  return _.flatten(
    _.map(obj, function (v) {
      return typeof v == "object" ? deepSearch(v, key) : [];
    }),
    true
  );

  // or efficient:
  var res = [];
  _.forEach(obj, function (v) {
    if (typeof v == "object" && (v = deepSearch(v, key)).length)
      res.push.apply(res, v);
  });
  return res;
};

export const getKeyByValue = (map, searchValue) => {
  for (let [key, value] of map.entries()) {
    if (_.isEqual(value, searchValue)) return key;
  }
};
export const getXMLRecord = (dom) => {
  let DOM_SEARCH = dom ? dom : document;
  let xmlDOM = DOM_SEARCH.querySelector("#xml_record");
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

export const getTodayDate = (_) => {
  return new Date().toJSON().slice(0, 10);
};
("");
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
