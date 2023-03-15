const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        username: String,//need to add bcrypt and Oauth token
        password: String,
        description: String,
        ships: Array,
    });

const User = model("Users",userSchema);

module.exports = User;