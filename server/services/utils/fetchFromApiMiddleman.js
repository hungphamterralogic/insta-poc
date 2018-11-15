import axios from "axios";
import to from "await-to-js";
import queryString from "query-string";
import { MIDDLEMAN_SERVER_PORT } from "../../../config";

module.exports = async (relativeUrl, queries) => {
  const middlemanUrl = `http://localhost:${MIDDLEMAN_SERVER_PORT}`;

  const requestUrl = queries
    ? `${middlemanUrl}${relativeUrl}?${queryString.stringify(queries)}`
    : `${middlemanUrl}${relativeUrl}`;

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
