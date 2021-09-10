const express = require("express");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const postRoute = require("./routes/postRoute");

const app = express();

app.use(cors());

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use("/api/posts", postRoute);

const Port = process.env.PORT || 5000;

const databaseConnect = process.env.MONGO_CONNECT;

Mongoose.connect(databaseConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Mongodb successfully connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(Port, () => {
  console.log(`Sever is running of port ${Port}`);
});
