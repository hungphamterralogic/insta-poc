import fetchFromApiMiddleman from "../services/utils/fetchFromApiMiddleman";
import to from "await-to-js";

module.exports = async (req, res) => {
  const { relativeApiUrl } = req.query;
  const { accessToken } = req.session.user;

  const [err, response] = await to(
    fetchFromApiMiddleman("/fbApi", { relativeApiUrl, accessToken })
  );

  let message;

  if (err) {
    message = err.message ? err.message : "Something bad happened.";
  } else if (!response) {
    message = "Something bad happened.";
  } else if (response.stat !== "OK") {
    message = response.message ? response.message : "Something bad happened.";
  }

  if (message) {
    res.json({ message });
  } else {
    res.json(response);
  }
};
