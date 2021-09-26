const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

// register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

//middlereware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

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
