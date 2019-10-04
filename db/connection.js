const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/businesses");

mongoose.Promise = Promise;
module.exports = mongoose;