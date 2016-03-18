var mongoose = require('mongoose');

var ListSchema = mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId },
  items: [mongoose.model('Item').Schema]
}, { timestamps: true });

module.exports = mongoose.model('List', ListSchema);
