import express from "express";
import handleGetAuthRequestUrl from "./handleGetAuthRequestUrl";
import { INSTA_API_MIDDLEMAN_SERVER_PORT } from "../config";

const app = express();
const port = INSTA_API_MIDDLEMAN_SERVER_PORT;

app.get("/getAuthRequestUrl", (req, res) => {
  handleGetAuthRequestUrl(req, res);
});

app.use((_, res) => {
  res.json({ message: "Wrong path!!!" });
});

app.listen(port, () => {
  console.log(`Instagram API middleman server is running on port ${port}`);
});
