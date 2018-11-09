import request from "request";

module.exports = url => {
  return new Promise(resolve => {
    request(url, (err, res, body) => {
      if (!err) {
        resolve(body + "");
      } else {
        resolve("");
      }
    });
  });
};
