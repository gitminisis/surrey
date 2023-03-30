import { MAP } from "../assets/maps/surrey";
import _ from "lodash";

export const getMap = () => {
//   MAP.features = MAP.features.map((e) => {
//     e.geometry.coordinates = _.flattenDepth(e.geometry.coordinates,1);
//     return e;
//   });
  return MAP;
};
