const mongoose = require("../db/connection");

const businessSchema = new mongoose.Schema({
    name: String,
    type: String,
    owner: String,
    neighborhood: String,
    description: String,
    url: String,
    facebook: String,
    instagram: String,
    pic: String
  });

  const theBusinesses = mongoose.model("Business", businessSchema)
  
  module.exports = theBusinesses;