const { Schema } = require("mongoose");

const OrdersSchemas = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchemas };
