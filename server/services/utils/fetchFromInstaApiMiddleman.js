import axios from "axios";
import queryString from "query-string";
import { INSTA_API_MIDDLEMAN_SERVER_PORT } from "../../../config";

module.exports = async (relativeUrl, queries) => {
  const middlemanUrl = `http://localhost:${INSTA_API_MIDDLEMAN_SERVER_PORT}`;

  const requestUrl = `${middlemanUrl}${relativeUrl}?${queryString.stringify(
    queries
  )}`;

  const response = await axios.get(requestUrl);

  if (!response.data || response.data.stat !== "OK") {
    throw new Error("Something bad happenned");
  }

  return response.data;
};
