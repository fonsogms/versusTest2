const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require("./index");
app.use("/", index);
app.listen(5005);
