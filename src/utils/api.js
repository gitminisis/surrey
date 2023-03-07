import axios from "axios";
import { getTodayDate, getTomorrowDate, getDaysBeforeDate, getXMLRecord } from "./functions";

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
  return axios.get(url).then((res) =>{
    let {data} = res;
    let dom = new DOMParser().parseFromString(data, "text/html")
    let xml = getXMLRecord(dom);
  });
};
