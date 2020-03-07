if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const redis = require("redis");
const client = redis.createClient();

const indexRouter = require("./routes/index");
const appendixRouter = require("./routes/appendix");
const usersRouter = require("./routes/users");

const app = express();

client.on("error", function(err) {
  console.log("Error " + err);
});
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/appendix", appendixRouter);
app.use("/users", usersRouter);

module.exports = app;
