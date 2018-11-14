// const readDB = require("./readDB");
const writeDB = require("./writeDB");

writeDB({
  def: "defVal",
  "a.b.c": "abc"
});
