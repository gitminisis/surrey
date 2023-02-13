import _ from "lodash";
import X2JS from "../libs/xml2json.min.js";

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

export const getXMLRecord = () => {
  let xmlDOM = document.querySelector("#xml_record");
  let x2js = new X2JS();
  let xml = x2js.xml_str2json(new XMLSerializer().serializeToString(xmlDOM));
  return xml;
};
