import axios from "axios";
import to from "await-to-js";
import queryString from "query-string";
import { API_URL, TEST_ACCESS_TOKEN } from "../config";

module.exports = async (req, res) => {
  const url = `${API_URL}/me`;
  const queries = {
    access_token: TEST_ACCESS_TOKEN
  };

  const [err, response] = await to(
    axios.get(`${url}?${queryString.stringify(queries)}`)
  );

  if (err) {
    console.log(err);
    const message = err.message;
    res.json({ message });
  } else {
    res.json({
      stat: "OK",
      data: response.data
    });
  }
};
