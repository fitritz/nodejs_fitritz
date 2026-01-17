const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tradition: {
    type: String,
    required: true
  }


});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;