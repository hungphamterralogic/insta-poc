import queryString from "query-string";
import axios from "axios";
import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  MIDDLEMAN_URL,
  EXCHANGE_ACCESS_TOKEN_URL
} from "./config";

module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.json({ message: "Lack 'code' parameter" });
    return;
  }

  const redirectUri = `${MIDDLEMAN_URL}/auth/facebook-callback`;

  const queries = {
    client_id: FACEBOOK_CLIENT_ID,
    client_secret: FACEBOOK_CLIENT_SECRET,
    redirect_uri: redirectUri,
    code
  };
  const exchangeAccessTokenUrl = `${EXCHANGE_ACCESS_TOKEN_URL}?${queryString.stringify(
    queries
  )}`;

  const response = await axios.get(exchangeAccessTokenUrl);

  if (response.data && response.data.access_token) {
    res.json({
      stat: "OK",
      accessToken: response.data.access_token
    });
  } else {
    const message =
      response.data.error && response.data.error.message
        ? response.error.message
        : "Something bad happened.";

    res.json({ message });
  }
};
