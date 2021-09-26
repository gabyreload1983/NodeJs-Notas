const express = require("express");

//express app
const app = express();

// register view engine
app.set("view engine", "ejs");

//connect to mongodb
require("./startup/mongodb")(app);

//middlereware and static files
require("./middleware/midd")(app);

// all routes
require("./startup/routes")(app);

//Deployment
require("./startup/prod")(app);
