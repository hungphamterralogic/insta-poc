import axios from "axios";
import to from "await-to-js";
import lodashGet from "lodash.get";
import queryString from "query-string";
import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  MIDDLEMAN_SERVER_URL,
  EXCHANGE_ACCESS_TOKEN_URL
} from "../config";

module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.json({ message: "Lack 'code' parameter" });
    return;
  }

  const redirectUri = `${MIDDLEMAN_SERVER_URL}/auth/facebook-callback`;

  const queries = {
    client_id: FACEBOOK_CLIENT_ID,
    client_secret: FACEBOOK_CLIENT_SECRET,
    redirect_uri: redirectUri,
    code
  };
  const exchangeAccessTokenUrl = `${EXCHANGE_ACCESS_TOKEN_URL}?${queryString.stringify(
    queries
  )}`;

  const [err, response] = await to(axios.get(exchangeAccessTokenUrl));

  if (lodashGet(response, "data.access_token")) {
    res.json({
      stat: "OK",
      accessToken: lodashGet(response, "data.access_token")
    });
  } else {
    const message =
      lodashGet(err, "message") ||
      lodashGet(response, "data.error.message") ||
      "Something bad happened.";
    res.json({ message });
  }
};
