import axios from "axios";
import { getDaysBeforeDate } from "./functions";

const BASE_URL =
  "/scripts/mwimain.dll/144/INTERNET_STATS/WEB_STAT_XML?SESSIONSEARCH&exp=";

/**
 * get all the stats for the last "days"
 * @param {number} days
 * @returns
 */
export function getStats(days = 30) {
  let low = getDaysBeforeDate(days);
  let exp = `EVENT_DATE > ${low}`;

  let url = `${BASE_URL}${exp}`;

  return axios.get(url);
}


