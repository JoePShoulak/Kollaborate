import mongoose, { mongo } from 'mongoose';
const { Schema, model } = mongoose;

const shipSchema = new Schema(
    {
        name: String,
        author: String,
        dataPayload: JSON,
        date: {type: Date, default: Date.now}
    });

const Ship = mongoose.model("Ships",shipSchema);

export default Ship;