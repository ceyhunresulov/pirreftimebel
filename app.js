const express = require("express");
const indexRouters = require("./routers/indexRouters");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let PORT = process.env.PORT || 5000;
const app = express();
app.use(express.urlencoded({ extended: true }));

const dbURL =
  "mongodb+srv://ceyhun:23042000@cluster0.jn3bg.mongodb.net/furniture?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => console.log(`${PORT} isleyir`));
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("public/"));
app.use(indexRouters);
