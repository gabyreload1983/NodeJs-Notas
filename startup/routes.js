const mainRoutes = require("../routes/mainRoutes");
const blogRoutes = require("../routes/blogRoutes");

module.exports = (app) => {
  app.use("/", mainRoutes);

  //blogs Routes
  app.use("/blogs", blogRoutes);

  //404 page
  app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });
};
