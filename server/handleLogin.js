import to from "await-to-js";
import getAuthRequestUrl from "./services/fbAuth/getAuthRequestUrl";

module.exports = async (req, res) => {
  if (req.session.user) {
    res.redirect("/");
    return;
  }

  const [err, response] = await to(getAuthRequestUrl());

  res.render("login", {
    err: err ? err.message : "",
    authRequestUrl: err ? "" : response.authRequestUrl
  });
};
