import _ from "lodash";
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
    if (typeof v == "object" && (v = deepSearch(v, key)).length) res.push.apply(res, v);
  });
  return res;
};
