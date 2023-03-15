const express = require("express");
const path = require("path");
require('dotenv').config();
const db = require("./config/connect");
const routes = require("./routes"); // <- Will need to create routes folder and its contents later

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: 1000000}));


app.use(express.static(path.join(__dirname, "../client/build"))); // uncomment this to run normally
// if (process.env.NODE_ENV === "production") {
// }
app.use(routes);
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


app.listen(PORT, () => console.log(`Now listening on  http://localhost:${PORT}`));
// db.once("open", () => {
 
// });