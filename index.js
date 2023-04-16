const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const homeRoute = require("./routes/home");
const addRoute = require("./routes/add");
const courseRoute = require("./routes/courses");
const aboutRoute = require("./routes/about");
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoute);
app.use("/add", addRoute);
app.use("/courses", courseRoute);
app.use("/about", aboutRoute);

app.listen(3000, () => {
  console.log("Server is runnig on 3000");
});
