import path from "path";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import handleLogin from "./handleLogin";
import { MAIN_SERVER_PORT } from "../config";
import getAccessTokenAndLogin from "./getAccessTokenAndLogin";

const app = express();
const port = MAIN_SERVER_PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

app.get("/login", (req, res) => {
  if (req.session.user) res.redirect("/");
  else handleLogin(req, res);
});

app.get("/logout", (req, res) => {
  req.session.user = null;
  res.redirect("/login");
});

app.get("/getAccessTokenAndLogin", (req, res) => {
  getAccessTokenAndLogin(req, res);
});

app.use((req, res, next) => {
  if (!req.session.user) res.redirect("/login");
  else next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use((_, res) => {
  res.json({ message: "You went to the wrong path, dude!!!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
