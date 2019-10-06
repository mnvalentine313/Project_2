// Set up and require all variables
// Install and require Express
const express = require("express");
// Install and require Handlebars
const hbs = require("hbs");
// Install and require body-parser
const parser = require("body-parser");
const methodOverride = require("method-override")

// Tell to run Express
app = express()

// Require up business controller
const businessController = require("./controllers/businesses")

// Set up all app uses
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

// Everything but the port goes above this!
app.use("/", businessController);
app.use(express.static("public"));

// Tell which port on which to listen
// app.listen(8080, () => console.log("Running on port 8080."));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});