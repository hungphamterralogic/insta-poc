import path from "path";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import handleLogin from "./handlers/handleLogin";
import handleLogout from "./handlers/handleLogout";
import handleMiddlemanApiCall from "./handlers/handleMiddlemanApiCall";
import { MAIN_SERVER_PORT } from "../config";
import handleGetAccessTokenAndLogin from "./handlers/handleGetAccessTokenAndLogin";

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
  handleLogin(req, res);
});

app.get("/logout", (req, res) => {
  handleLogout(req, res);
});

app.get("/getAccessTokenAndLogin", (req, res) => {
  handleGetAccessTokenAndLogin(req, res);
});

app.use((req, res, next) => {
  if (!req.session.user) res.redirect("/login");
  else next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/middlemanApiCall", (req, res) => {
  handleMiddlemanApiCall(req, res);
});

app.use((_, res) => {
  res.json({ message: "You went to the wrong path, dude!!!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
