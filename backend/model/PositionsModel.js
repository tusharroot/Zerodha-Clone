const { model } = require("mongoose");

const { PositionsSchemas } = require("../schemas/PositionsSchemas");

const PositionsModel = new model("positions", PositionsSchemas);

module.exports = { PositionsModel };
