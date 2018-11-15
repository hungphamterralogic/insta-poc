import path from "path";
import express from "express";
import handleGetAuthRequestUrl from "./services/handleGetAuthRequestUrl";
import handleExchangeAccessToken from "./services/handleExchangeAccessToken";
import getTestInfoWithAccessToken from "./services/getTestInfoWithAccessToken";
import { MIDDLEMAN_PORT, MAIN_SERVER_URL } from "./config";

const app = express();
const port = MIDDLEMAN_PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/auth/getAuthRequestUrl", (req, res) => {
  handleGetAuthRequestUrl(req, res);
});

app.get("/auth/facebook-callback", (req, res) => {
  res.render("facebook-callback", {
    mainServerUrl: MAIN_SERVER_URL
  });
});

app.get("/auth/exchangeAccessToken", (req, res) => {
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
