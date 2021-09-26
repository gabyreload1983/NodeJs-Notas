const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");

const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://reload:Jano1987@cluster0.4hbz9.mongodb.net/blog-reload?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db...");
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () =>
      console.log(`Listening on port ${port}...`)
    );
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

//middlereware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

//blogs Routes
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  console.log("BUG");
  res.status(404).render("404", { title: "404" });
});

//app.use(helmet());
//app.use(compression());
