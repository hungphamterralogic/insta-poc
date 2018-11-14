import express from "express";
import handleGetAuthRequestUrl from "./services/handleGetAuthRequestUrl";
import handleExchangeAccessToken from "./services/handleExchangeAccessToken";
import getTestInfoWithAccessToken from "./services/getTestInfoWithAccessToken";
import { MIDDLEMAN_PORT } from "./config";

const app = express();
const port = MIDDLEMAN_PORT;

app.get("/getAuthRequestUrl", (req, res) => {
  handleGetAuthRequestUrl(req, res);
});

app.get("/auth/facebook-callback", (req, res) => {
  const code = req.query.code;
  res.send(code);
});

app.get("/exchangeAccessToken", (req, res) => {
  handleExchangeAccessToken(req, res);
});

app.get("/getTestInfoWithAccessToken", (req, res) => {
  getTestInfoWithAccessToken(req, res);
});

app.use((_, res) => {
  res.json({ message: "Wrong path!!!" });
});

app.listen(port, () => {
  console.log(`Instagram API middleman server is running on port ${port}`);
});
