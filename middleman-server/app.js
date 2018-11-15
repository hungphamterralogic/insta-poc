import path from "path";
import express from "express";
import handleGetAuthRequestUrl from "./handlers/handleGetAuthRequestUrl";
import handleExchangeAccessToken from "./handlers/handleExchangeAccessToken";
import handleFbApi from "./handlers/handleFbApi";
import { MIDDLEMAN_SERVER_PORT, MAIN_SERVER_URL } from "./config";

const app = express();
const port = MIDDLEMAN_SERVER_PORT;

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

app.get("/fbApi", (req, res) => {
  handleFbApi(req, res);
});

app.use((_, res) => {
  res.json({ message: "Wrong path!!!" });
});

app.listen(port, () => {
  console.log(`Middleman server is running on port ${port}`);
});
