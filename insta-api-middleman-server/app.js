import express from "express";
import handleGetAuthRequestUrl from "./handleGetAuthRequestUrl";
import handleExchangeAccessToken from "./handleExchangeAccessToken";
import { INSTA_API_MIDDLEMAN_SERVER_PORT } from "../config";

const app = express();
const port = INSTA_API_MIDDLEMAN_SERVER_PORT;

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

app.use((_, res) => {
  res.json({ message: "Wrong path!!!" });
});

app.listen(port, () => {
  console.log(`Instagram API middleman server is running on port ${port}`);
});
