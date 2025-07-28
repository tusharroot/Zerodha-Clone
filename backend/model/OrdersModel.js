const { model } = require("mongoose");

const { OrdersSchemas } = require("../schemas/OrdersSchemas");

const OrdersModel = model("order", OrdersSchemas);

module.exports = { OrdersModel };
