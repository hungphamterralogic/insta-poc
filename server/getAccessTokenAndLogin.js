import to from "await-to-js";
import exchangeAccessToken from "./services/instaAuth/exchangeAccessToken";

module.exports = async (req, res) => {
  const { code } = req.query;
  const [err, response] = await to(exchangeAccessToken(code));

  if (err) {
    res.render("login", {
      err: "Cannot login, refresh this page to try again"
    });
  } else {
    const { accessToken } = response;
    req.session.user = {
      accessToken
    };
    res.redirect("/");
  }
};
