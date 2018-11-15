import to from "await-to-js";
import lodashGet from "lodash.get";
import fetchFromApiMiddleman from "../services/utils/fetchFromApiMiddleman";

module.exports = async (req, res) => {
  const { relativeApiUrl } = req.query;
  const { accessToken } = req.session.user;

  const [err, response] = await to(
    fetchFromApiMiddleman("/fbApi", { relativeApiUrl, accessToken })
  );

  let message;

  if (err) {
    message = err.message;
  } else if (!response) {
    message = "Something bad happened.";
  } else if (response.stat !== "OK") {
    message = lodashGet(response, "message") || "Something bad happened.";
  }

  if (message) {
    res.json({ message });
  } else {
    res.json(response);
  }
};
