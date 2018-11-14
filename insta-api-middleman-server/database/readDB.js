const path = require("path");
const jsonfile = require("jsonfile");

const dbAbsolutePath = path.join(__dirname, "./db.json");

/**
 * use readDB() without path param to get the whole db
 * use readDB("a.b.c") to get value of db.a.b.c
 */
module.exports = path => {
  const db = jsonfile.readFileSync(dbAbsolutePath);

  if (!path) return db;

  let result = db;
  try {
    const nodes = path.split(".");
    nodes.forEach(node => {
      result = result[node];
    });
  } catch (e) {
    throw new Error("readDB: Invalid path!");
  }

  return result;
};
