const express = require("express");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
};
