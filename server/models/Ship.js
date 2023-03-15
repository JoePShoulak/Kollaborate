const { Schema, model } = require("mongoose");

const shipSchema = new Schema(
    {
        author: String,
        payload: JSON,
        date: {type: Date, default: Date.now}
    });

const Ship = model("Ships",shipSchema);

module.exports = Ship;