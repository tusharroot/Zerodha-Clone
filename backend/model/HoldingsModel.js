const mongoose = require("mongoose");
const { HoldingsSchemas } = require("../schemas/HoldingsSchemas");

const HoldingsModel = mongoose.model("holding", HoldingsSchemas);

module.exports = { HoldingsModel };
