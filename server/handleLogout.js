module.exports = async (req, res) => {
  req.session.user = null;
  res.redirect("/login");
};
