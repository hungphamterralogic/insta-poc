import queryString from "query-string";
import {
  FACEBOOK_CLIENT_ID,
  MIDDLEMAN_URL,
  USER_AUTHORIZATION_URL
} from "./config";

module.exports = (req, res) => {
  const { scope } = req.query;

  if (!scope) {
    res.json({ message: "Lack 'scope' parameter" });
    return;
  }

  const clientId = FACEBOOK_CLIENT_ID;
  const redirectUri = `${MIDDLEMAN_URL}/auth/facebook-callback`;

  const queries = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope
  };

  const authRequestUrl = `${USER_AUTHORIZATION_URL}?${queryString.stringify(
    queries
  )}`;

  res.json({
    stat: "OK",
    authRequestUrl
  });
};
