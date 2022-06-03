const mongoose = require("mongoose");
const config = require("config");

const credentials = config.get("credentials");

const dbURI = `mongodb+srv://${credentials}@cluster0.4hbz9.mongodb.net/blog-reload?retryWrites=true&w=majority`;

module.exports = (app) => {
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
};
