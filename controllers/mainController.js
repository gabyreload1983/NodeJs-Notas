const home = (req, res) => {
  res.render("index", { title: "Home" });
};

const about = (req, res) => {
  res.render("about", { title: "About" });
};

module.exports = {
  home,
  about,
};
