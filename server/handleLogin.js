import to from "await-to-js";
import getAuthRequestUrl from "./services/instaAuth/getAuthRequestUrl";

module.exports = async (req, res) => {
  const [err, response] = await to(getAuthRequestUrl());

  res.render("login", {
    err: err ? err.message : "",
    authRequestUrl: err ? "" : response.authRequestUrl
  });
};
