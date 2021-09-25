const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "mario", snippet: "ksdnflkasmgmmfgfg" },
    { title: "luigi", snippet: "pokpsdf6456465afg" },
    { title: "princes", snippet: "645665gd1h5f16gj" },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.use((req, res) => {
  res.status(404).render("404");
});
