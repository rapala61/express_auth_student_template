var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model( 'Item', ItemSchema );
