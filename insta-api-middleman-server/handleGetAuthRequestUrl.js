module.exports = (req, res) => {
  res.json({
    stat: "OK",
    authRequestUrl: "http://link",
    queries: req.query
  });
};
