import axios from "axios";
import to from "await-to-js";
import queryString from "query-string";
import lodashIsEmpty from "lodash.isempty";
import { API_URL } from "../config";

module.exports = async (req, res) => {
  const { relativeApiUrl, accessToken } = req.query;

  const queryInRelativeApiUrl = queryString.parseUrl(relativeApiUrl).query;

  const relativeApiUrlHasQuery = !lodashIsEmpty(queryInRelativeApiUrl);

  const requestUrl = relativeApiUrlHasQuery
    ? `${API_URL}/${relativeApiUrl}&access_token=${accessToken}`
    : `${API_URL}/${relativeApiUrl}?access_token=${accessToken}`;

  const [err, response] = await to(axios.get(requestUrl));

  if (response && response.data && !response.data.error) {
    res.json({ stat: "OK", data: response.data });
  } else {
    const message = err
      ? err.message
      : response && response.data && response.data.error
      ? response.data.error.message
      : "Something bad happened.";
    res.json({ message });
  }
};
