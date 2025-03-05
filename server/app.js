const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const doctorRoute = require('./Routes/doctorRoute');
require("dotenv").config();

app.use(cors());
//parse incoming request with json payloads
app.use(bodyparser.json());
//parse incoming requests with urlencoded payloads
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect(process.env.DBCONN).then(() => {
  console.log("db connect!!!");
});

app.use("/doctor", doctorRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is run on port ${port}`);
});


