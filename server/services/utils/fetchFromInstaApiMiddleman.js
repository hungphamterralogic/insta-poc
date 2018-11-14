import axios from "axios";
import to from "await-to-js";
import queryString from "query-string";
import { INSTA_API_MIDDLEMAN_SERVER_PORT } from "../../../config";

module.exports = async (relativeUrl, queries) => {
  const middlemanUrl = `http://localhost:${INSTA_API_MIDDLEMAN_SERVER_PORT}`;

  const requestUrl = `${middlemanUrl}${relativeUrl}?${queryString.stringify(
    queries
  )}`;

  const [err, response] = await to(axios.get(requestUrl));

  if (err || !response.data || response.data.stat !== "OK") {
    const message = err
      ? err.message
      : response.data && response.data.message
      ? response.data.message
      : "Something bad happened.";

    throw new Error(message);
  }

  return response.data;
};
