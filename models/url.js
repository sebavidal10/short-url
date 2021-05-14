const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  urlCode: String,
  urlOriginal: String,
  urlShort: String,
});

module.exports = mongoose.model('Url', URLSchema);
