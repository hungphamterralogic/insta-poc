import express from "express";
import to from "await-to-js";
import getAuthRequestUrl from "./services/instaAuth/getAuthRequestUrl";
import { MAIN_SERVER_PORT } from "../config";

const app = express();
const port = MAIN_SERVER_PORT;

app.get("/getAuthRequestUrl", async (req, res) => {
  const [err, response] = await to(getAuthRequestUrl());

  if (err) {
    res.json({ message: "Cannot get auth request url" });
  } else {
    res.json(response);
  }
});

app.use((_, res) => {
  res.json({ message: "You went to the wrong path, dude!!!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
