const mongoose = require('mongoose');

const schema = new mongoose.Schema({


  achse: String,
  schadstoffklasse: String,
  gewichtsklasse: String,
  dieselverbrauch: String,
  start: String,
  ziel: String,
  streckenlaenge: String
});

module.exports = mongoose.model('Data', schema);
