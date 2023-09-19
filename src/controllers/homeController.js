const getHomePage = (req, res) => {
  res.send("Hello Phat");
};

const getPhat = (req, res) => {
  // call model
  res.render("sample");
};

module.exports = {
  getHomePage,
  getPhat,
};
