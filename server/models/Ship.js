const { Schema, model } = require("mongoose");

const shipSchema = new Schema(
    {
        name: String,
        author: String,
        dataPayload: JSON,
        date: {type: Date, default: Date.now}
    });

const Ship = model("Ships",shipSchema);

module.exports = Ship;