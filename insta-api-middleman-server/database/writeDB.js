const path = require("path");
const editJsonFile = require("edit-json-file");
const readDB = require("./readDB");

const dbAbsolutePath = path.join(__dirname, "./db.json");

/**
 * Example:
 *
 *    writeDB({
 *       "a.b.c": 123,
 *       "e.f": "somestring"
 *    });
 *
 * This will modify database.a.b.c value to 123 when db.a.b.c exists
 * In case db.e.f doesn't exist, it will create database.e.f with value of "somestring"
 */
module.exports = modifyObj => {
  let file = editJsonFile(dbAbsolutePath);

  for (let path in modifyObj) {
    if (modifyObj.hasOwnProperty(path)) {
      file.set(path, modifyObj[path]);
    }
  }

  file.save();
};
