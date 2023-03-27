const express = require("express");
const path = require("path");
require('dotenv').config();
const db = require("./config/connect");
const cors = require("cors");
const routes = require("./routes"); // <- Will need to create routes folder and its contents later

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: 1000000}));
app.use(express.static(path.join(__dirname, "../client/build"))); // uncomment this to run normally
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(routes);
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
